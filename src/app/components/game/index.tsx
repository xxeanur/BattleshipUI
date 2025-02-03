import React, { useState, useEffect, useMemo } from 'react'
import { style } from './style'
import { useLanguageContext } from '../../context/localization/localization';
import { useThemeContext } from '../../context/theme/theme'
import { io } from 'socket.io-client';
import { useNotificationContext } from '../../context/notification/notificationContext';

function Game() {

  const { language } = useLanguageContext();
  const { theme } = useThemeContext();
  const { showNotification } = useNotificationContext();
  const classes = style(theme);

  const [ships, setShips] = useState<{ ship: HTMLElement, isHorizontal: boolean, size: number }[] | null>(null);
  const ids = ["destroyer", "submarine", "cruiser", "battleship", "carrier"];
  useEffect(() => {
    //başlangıçta sayfa yüklenirken shipleri diziye ekliyorum 
    let array: { ship: HTMLElement, isHorizontal: boolean, size: number }[] = [];
    ids.forEach((id, index) => {
      const element = document.getElementById(id);
      if (element) {
        array.push({ ship: element, isHorizontal: true, size: index + 1 });
      }
    });
    setShips(array);
  }, [])

  const [selectedShip, setSelectedShip] = useState<{ ship: HTMLElement, isHorizontal: boolean, size: number } | null>(null);
  //Bir gemiye tıklandığında çağrılır
  const selectShip = (ship: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const selectedShip = ships?.find(x => x.ship.id === ship.currentTarget.id);
    if (selectedShip)
      setSelectedShip(selectedShip); // Seçilen gemiyi kaydet 
  };


  useEffect(() => {
    if (ships)
      ships.forEach(shipItem => {
        if (shipItem.ship.id === selectedShip?.ship.id)
          shipItem.ship.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px";
        else
          shipItem.ship.style.boxShadow = "none";
      });
  }, [selectedShip])

  const rotateSelectedShip = () => {
    if (selectedShip) {
      const prevWidth = selectedShip.ship.style.width;
      selectedShip.ship.style.width = selectedShip.ship.style.height;
      selectedShip.ship.style.height = prevWidth;
      selectedShip.isHorizontal = !selectedShip.isHorizontal;
    } else {
      console.log('Henüz bir gemi seçilmedi.');
    }
  };

  //Sürükleme başladığında 
  const [draggedShip, setDraggedShip] = useState<{ ship: HTMLElement, isHorizontal: boolean, size: number } | null>(null);
  const handleDragStart = (e: React.DragEvent) => {
    const draggedShip = ships?.find(x => x.ship.id === e.currentTarget.id);
    if (draggedShip) {
      setDraggedShip(draggedShip);
      e.dataTransfer.setData("Text", draggedShip.ship.id);
    }
  }

  interface GridCell {
    shipId: string | null;
    isOccupied: boolean;
    isHorizontal: boolean | null; //Gemi yönü
  }

  const [grid, setGrid] = useState<GridCell[]>(Array(100).fill({
    shipId: null,
    isOccupied: false,
    isHorizontal: null,
  }));

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const draggedShipId = e.dataTransfer.getData("Text");
    const draggedShip = ships?.find(x => x.ship.id === draggedShipId);
    if (!draggedShip) return -1;

    const updatedGrid = [...grid];

    if (draggedShip.isHorizontal && (index % 10) + draggedShip.size > 10) {
      showNotification("Gemi yatayda hücrenin dışına taşıyor!", "warning");
      return;
    }
    if (!draggedShip.isHorizontal && index + (draggedShip.size - 1) * 10 >= 100) {
      showNotification("Gemi dikeyde hücre dışına taşıyor!", "warning");
      return;
    }

    for (let i = 0; i < draggedShip.size; i++) {
      const targetIndex = draggedShip.isHorizontal ? index + i : index + i * 10;

      if (updatedGrid[targetIndex]?.isOccupied) {
        showNotification("Hücre zaten dolu!", "warning");
        return;
      }

      const surroundingCells = getSurroundingCells(targetIndex);
      for (const surroundingCell of surroundingCells) {
        if (updatedGrid[surroundingCell]?.isOccupied) {
          showNotification("Gemi etrafında boşluk yok!", "warning");
          return;
        }
      }
    }

    for (let i = 0; i < draggedShip.size; i++) {
      const targetIndex = draggedShip.isHorizontal ? index + i : index + i * 10;
      updatedGrid[targetIndex] = {
        shipId: draggedShip.ship.id,
        isOccupied: true,
        isHorizontal: draggedShip.isHorizontal,
      };
    }

    setGrid(updatedGrid);

    const willDeleteShipId = document.getElementById(draggedShip.ship.id);
    if (willDeleteShipId) {
      willDeleteShipId.style.display = "none";
      shipsSettled();
    }
  };

  const getSurroundingCells = (cellIndex: number) => {
    const surroundingCells: number[] = [];
    const row = Math.floor(cellIndex / 10);
    const col = cellIndex % 10;

    const directions = [
      { row: -1, col: -1 }, { row: -1, col: 0 }, { row: -1, col: 1 },
      { row: 0, col: -1 }, { row: 0, col: 1 },
      { row: 1, col: -1 }, { row: 1, col: 0 }, { row: 1, col: 1 }
    ];

    for (const { row: dr, col: dc } of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow >= 0 && newRow < 10 && newCol >= 0 && newCol < 10) {
        surroundingCells.push(newRow * 10 + newCol);
      }
    }
    return surroundingCells;
  };

  const [shipCounter, setShipCounter] = useState(0);
  const totalShips = 5;
  const shipsSettled = () => {
    setShipCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      return newCounter;
    });
  };

  const [searchPlayer, setSearchPlayer] = useState(false);
  const [playerFound, setPlayerFound] = useState(false);
  const socket = useMemo(() => io("http://localhost:5000", { autoConnect: false }), []);

  function SearchPlayer() {
    if (readyGrid !== true) {
      showNotification("Lütfen oyun ızgırasını sıfırladıktan sonra oyunu başlatın! ", "info");
      return;
    }
    if (shipCounter !== totalShips) {
      showNotification("Lütfen gemileri yerleştirdikten sonra oyunu başlatın!", "warning");
      return;
    }
    socket.connect();
    socket.emit("searchGame", grid);
    setSearchPlayer(true);
  }

  const [readyGrid, setReadyGrid] = useState(true);
  const exitGame = () => {
    console.log("exit butonu");
    if (isConnected) {
      socket.disconnect();
      showNotification("Oyundan çıktınız!", "error");
      setPlayerFound(false);
      setSearchPlayer(false);
      setReadyGrid(false);
      setIsMyTurn(null);
    }
  }

  const [clickedCells, setClickedCells] = useState<Set<number>>(new Set());
  const [isConnected, setIsConnected] = useState(false);
  const [isMyTurn, setIsMyTurn] = useState<null | boolean>(null);
  const [hit, setHit] = useState<boolean | null>(null);

  useEffect(() => {
    if (hit !== null) {
      const timer = setTimeout(() => {
        setHit(null); 
      }, 1500);
      return () => clearTimeout(timer); 
    }
  }, [hit]);

  useEffect(() => {
    const handleConnect = () => {
      // console.log("bağlanma durumu", socket.connected);
      setIsConnected(true);
    };

    const handlePlayerFound = ({ opponentId, currentTurn }: { opponentId: string, currentTurn: boolean }) => {
      showNotification("Rakip bulundu.", "success");
      setIsMyTurn(currentTurn);
      setPlayerFound(true);
      setReadyGrid(false);
    };

    //rakip oyundan ayrıldı
    const handleOpponentLeft = ({ message }: { message: string }) => {
      showNotification(message, "error");
      setPlayerFound(false);
      setSearchPlayer(false);
      socket.disconnect();
      setIsConnected(false);
      setIsMyTurn(null);
    };


    const handleAttackResult = ({ hit, cellIndex }: { hit: boolean; cellIndex: number }) => {
      const cellElement = document.getElementById(`opponent-cell-${cellIndex}`);
      if (cellElement) {
        if (hit) {
          cellElement.style.backgroundColor = "#970000";
          setIsMyTurn(true);
        } else {
          const dot = document.createElement("div");
          dot.style.width = "5px";
          dot.style.height = "5px";
          dot.style.backgroundColor = "#404040";
          dot.style.borderRadius = "50%";
          cellElement.style.display = "flex";
          cellElement.style.alignItems = "center";
          cellElement.style.justifyContent = "center";
          cellElement.appendChild(dot);
          setIsMyTurn(false);
        }
        setHit(hit);
      }
    }

    const handleOpponentAttack = ({ cellIndex, hit }: { cellIndex: number; hit: boolean }) => {
      const opponentCellElement = document.getElementById(`cell-${cellIndex}`);
      if (opponentCellElement) {
        if (hit) {
          opponentCellElement.style.backgroundColor = "#970000";
          setIsMyTurn(false);
        } else {
          const dot = document.createElement("div");
          dot.style.width = "5px";
          dot.style.height = "5px";
          dot.style.backgroundColor = "#404040";
          dot.style.borderRadius = "50%";
          opponentCellElement.style.display = "flex";
          opponentCellElement.style.alignItems = "center";
          opponentCellElement.style.justifyContent = "center";
          opponentCellElement.appendChild(dot);
          setIsMyTurn(true);
        }
        setHit(hit);
      }
    }

    socket.on("currentTurn", ({ currentTurn }: { currentTurn: boolean }) => {
      setIsMyTurn(currentTurn);
      setHit(null);
    });


    const handleShipSunk = ({ shipId }: { shipId: string }) => {
      showNotification(`Rakibinizin ${shipId} gemisi batırıldı.`, "info");
    }

    const handleYourShipSunk = ({ shipId }: { shipId: string }) => {
      showNotification(`${shipId} geminiz batırıldı.`, "info");
    };

    // Oyunu kazanıldığında
    const handleGameWon = ({ message }: { message: string }) => {
      showNotification(message, "success");
      socket.disconnect();
      setSearchPlayer(false);
      setPlayerFound(false);
    };

    // Oyunu kaybedildiğinde
    const handleGameLost = ({ message }: { message: string }) => {
      showNotification(message, "error");
      socket.disconnect();
      setSearchPlayer(false);
      setPlayerFound(false);
    };

    // Olay işleyicileri
    socket.on("connect", handleConnect);
    socket.on("opponentLeft", handleOpponentLeft);
    socket.on("playerFound", handlePlayerFound);
    socket.on("cellClicked", handleClickCell);
    socket.on("attackResult", handleAttackResult);
    socket.on("opponentAttack", handleOpponentAttack);
    socket.on("shipSunk", handleShipSunk);
    socket.on("yourShipSunk", handleYourShipSunk);
    socket.on("gameWon", handleGameWon);
    socket.on("gameLost", handleGameLost);

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect", handleConnect);
    };
  }, [socket]);


  //İşaretlenmiş grid hücresine tekrar tıklamayı engelle
  const handleClickCell = (cellIndex: number) => {
    if (!isMyTurn) {
      return;
    }

    if (clickedCells.has(cellIndex)) {
      return;
    }
    setClickedCells((prev) => new Set(prev).add(cellIndex));
    socket.emit("cellClicked", cellIndex);

  }

  const reset = () => {
    setReadyGrid(true);
    const newGrid = Array.from({ length: 100 }, () => ({
      shipId: null,
      isOccupied: false,
      isHorizontal: null,
    }));
    setGrid(newGrid)
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.display = "block"
      }
    });

    setShipCounter(0);

    for (let i = 0; i < 100; i++) {
      const opponentCellElement = document.getElementById(`opponent-cell-${i}`);
      if (opponentCellElement) {
        opponentCellElement.style.backgroundColor = "";
        opponentCellElement.innerHTML = "";
      }

      const playerCellElement = document.getElementById(`cell-${i}`);
      if (playerCellElement) {
        playerCellElement.style.backgroundColor = "";
        playerCellElement.innerHTML = "";
      }
    }
    setClickedCells(new Set());
  }

  return (
    <div className={classes.container}>
      <div className={classes.game}>
        <div className={classes.player}>
          <div className={classes.gridContainer}>
            <h2>{language.player1}</h2>
            <p>{isMyTurn === null ? "..." : isMyTurn ? "Sıra Sizde..." : "Sıra Rakibinizde..."}</p>
            <div className={classes.grid}>
              {grid.map((cell, index) => (
                <div
                  key={index}
                  id={`cell-${index}`}
                  className={`${classes.gridItem} ${cell.isOccupied ? "occupied " : ""}`}
                  onDragOver={(e) => { e.preventDefault(); }}
                  onDrop={(e) => handleDrop(e, index)}
                >
                </div>
              ))}
            </div>

            <div>
              {!isConnected && (
                <>
                  <button className={classes.rotateBtn} onClick={rotateSelectedShip}>
                    {language.rotateBtn}
                  </button>
                  <button className={classes.resetBtn} id="reset" onClick={reset}>
                    {language.resetBtn}
                  </button>
                </>
              )}
            </div>

          </div>

          <div className={classes.allShips}>
            <div
              className={classes.destroyerShip}
              draggable="true"
              id='destroyer'
              style={{ width: 25, height: 25 }}
              onDragStart={(e) => handleDragStart(e)}
              onMouseDown={(e) => selectShip(e)}
            ></div>
            <div
              className={classes.submarineShip}
              draggable="true"
              style={{ width: 50, height: 25 }}
              id='submarine'
              onDragStart={(e) => handleDragStart(e)}
              onMouseDown={(e) => selectShip(e)}
            ></div>
            <div
              className={classes.cruiserShip}
              draggable="true"
              id='cruiser'
              style={{ width: 75, height: 25 }}
              onDragStart={(e) => handleDragStart(e)}
              onMouseDown={(e) => selectShip(e)}
            ></div>
            <div
              className={classes.battleShip}
              draggable="true"
              id='battleship'
              style={{ width: 100, height: 25 }}
              onDragStart={(e) => handleDragStart(e)}
              onMouseDown={(e) => selectShip(e)}
            ></div>
            <div
              className={classes.carrierShip}
              style={{ width: 125, height: 25 }}
              draggable="true"
              id='carrier'
              onDragStart={(e) => handleDragStart(e)}
              onMouseDown={(e) => selectShip(e)}
            ></div>
          </div>
        </div>

        <div className={classes.player}>
          <div className={classes.gridContainer}>
            <h2>{language.player2}</h2>
            <p>{hit === null ? "..." : hit ? "İsabetli atış!" : "Başarısız atış!"}</p>
            <div className={classes.grid}>
              {grid.map((cell, index) => (
                <div key={index}
                  id={`opponent-cell-${index}`}
                  className={classes.gridItem}
                  onClick={() => {
                    handleClickCell(index);
                  }}
                ></div>
              ))}
            </div>

            {playerFound ?
              (
                <button onClick={exitGame} className={classes.exitBtn}>{language.exitGame}</button>
              ) :
              (
                searchPlayer ?
                  (
                    <div> oyuncu aranıyor...</div>
                  ) :
                  (
                    <button onClick={SearchPlayer} className={classes.findBtn}>{language.searchPlayer}</button>
                  )
              )}

          </div>
        </div>

      </div>
    </div >
  )
}
export default Game