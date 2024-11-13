import React from 'react'
import { style } from './style'
import { MainComponent } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Outlet, useNavigate } from 'react-router';
import { useLanguageContext } from '../../context/localization/localization';

function Settings() {
  const { language } = useLanguageContext();
  const navigate = useNavigate();
  const classes = style();

  return (
    <MainComponent>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>{language.settings}</h2>
          <div>
            <button onClick={() => { navigate("/Home") }}><FontAwesomeIcon icon={faLeftLong} /></button>
          </div>
        </div>
        <div className={classes.contentAndMenuBox}>
          <div className={classes.menu}>
            <div>
              <button onClick={() => { navigate("UpdatePassword") }}>{language.changePasswordSettings}</button>
            </div>
            <div>
              <button onClick={() => { navigate("displaysettings") }}>{language.LanguageAndThemeSettings}</button>
            </div>
          </div>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </MainComponent>
  )
}

export default Settings