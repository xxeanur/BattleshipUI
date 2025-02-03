import { createUseStyles } from 'react-jss'

export const style = createUseStyles({
    container: {
        backgroundColor: "red",
        width: "100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    game: {
        width: '1000px',
        height: '600px',
        backgroundColor: (theme: any) => theme.gameComponent,
        display: "flex"
    },
    player: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        "& h2": {
            fontSize: "30px",
            fontFamily: "fantasy",
            marginBottom: "10px",
            color: (theme: any) => theme.fontColor,
        },
        "& p": {
            marginTop: "0px",
            marginBottom: "5px",
            color: (theme: any) => theme.fontColor,
        }
    },
    gridContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    grid: {
        zIndex: 0,
        backgroundColor: "#D9D9D9",
        border: "1px solid #000",
        display: 'grid',
        gridTemplateColumns: "repeat(10, 25px)",
        gridTemplateRows: "repeat(10, 25px)",
    },
    gridItem: {
        zIndex: 0,
        width: 25,
        height: 25,
        border: "1px solid #000",
        backgroundColor: "white",
        '&.occupied': {
            backgroundColor: 'rgba(0, 0, 255, 0.5)', // Gemi görünümü
        },
    },
    dragging: {
        opacity: 0.5,
    },

    rotateBtn: {
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: "#FF7824",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "18px",
        width: "150px",
        height: "30px",
    },

    resetBtn: {
        marginTop: "20px",
        marginBottom: "20px",
        marginLeft:"5px",
        backgroundColor: "",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "18px",
        width: "150px",
        height: "30px",
    },

    allShips: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 10
    },
    destroyerShip: {
        zIndex: 10,
        position: "relative",
        backgroundColor: "#66EC23",
    },
    submarineShip: {
        zIndex: 10,
        backgroundColor: "#237AEC",
    },
    cruiserShip: {
        zIndex: 10,
        backgroundColor: "#ECC023",
    },
    battleShip: {
        zIndex: 10,
        backgroundColor: "#FA02AF",
    },
    carrierShip: {
        zIndex: 10,
        backgroundColor: "#562ECF",
    },

    findBtn: {
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "18px",
        height: "30px",
        width: "150px",
    },

    exitBtn: {
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "18px",
        height: "30px",
        width: "150px",
    },


    "@media(max-width:1000px)": {
        game: {
            width: '350px',
            height: '100%',
            flexDirection: "column",
        },
        player: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            "& h2": {
                fontSize: "20px",
                marginTop: "5px",
                marginBottom: "5px",
            },
            "& p": {
                marginTop: "0px",
                marginBottom: "5px",
            }
        },
    }

})