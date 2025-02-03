import React, { useEffect, useRef } from 'react'
import { style } from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { Game, MainComponent } from '../../components';
import { useThemeContext } from '../../context/theme/theme';
import { useLanguageContext } from '../../context/localization/localization';


import { axiosInstance } from '../../services/HttpCustomService';
import Auth from '../../context/authentication/Auth';


function Home() {
  const navigate = useNavigate();
  const { language } = useLanguageContext();
  const { theme } = useThemeContext();
  const classes = style(theme);


  const startbutton = useRef<HTMLDivElement>(null);
  const gameComponent = useRef<HTMLDivElement>(null);



  const searchPlayers = () => {
    if (startbutton.current)
      startbutton.current.style.display = "none";

    if (gameComponent.current)
      gameComponent.current.style.display = "block";
  }

  return (
    <Auth>
      <MainComponent>
        <div ref={startbutton} className={classes.searchForPlayers}>
          <button onClick={searchPlayers}>
            <FontAwesomeIcon icon={faPlay} />
            <h1>{language.startGame}</h1>
          </button>
        </div>

        <div className={classes.gameComponent} ref={gameComponent} >
          <Game></Game>
        </div>
      </MainComponent>
    </Auth>
  )
}

export default Home