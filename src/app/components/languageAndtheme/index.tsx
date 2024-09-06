import React, { ChangeEvent } from 'react'
import { style } from './style'
import { useThemeContext } from '../../context/theme/theme';
import { useLanguageContext } from '../../context/localization/localization';

function LanguageAndTheme() {

  const {language,changeLanguage}=useLanguageContext();
  const { theme, changeTheme } = useThemeContext();



  const changeThemeSection = (event: ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value);
  }
  const changeLanguageSection=(event:ChangeEvent<HTMLSelectElement>)=>{
    changeLanguage(event.target.value);
  }
  

  const classes = style();
  return (
    <div className={classes.container}>
      <div className={classes.selectBox}>
        <h2>{language.theme}</h2>
        <select onChange={changeLanguageSection}>
          <option value='tr'>Türkçe</option>
          <option value='en'>English</option>
        </select>
      </div>
      <div className={classes.selectBox}>
        <h2>{language.language}</h2>
        <select onChange={changeThemeSection}>
          <option value={"true"}>{language.lightTheme}</option>
          <option value={"false"}>{language.darkTheme}</option>
        </select>
      </div>
    </div>
  )
}

export default LanguageAndTheme