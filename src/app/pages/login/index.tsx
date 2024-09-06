import React from 'react'
import { style } from './style'
import Logo from '../../assets/shipping-logo.png'
import { Container } from '../../components';
import { useThemeContext } from '../../context/theme/theme';
import { useLanguageContext } from '../../context/localization/localization';
import { FormikConfig, FormikValues, useFormik } from 'formik';
import { loginValidation } from '../../validations/loginValidations';


function Login() {//companentin içine html elementi göndermek için children kullanılır

  const { theme } = useThemeContext();
  const classes = style(theme);
  const {language}=useLanguageContext();

  const {values,handleChange,errors,handleSubmit}=useFormik({
    initialValues:{
      username:"",
      password:"",
    },
    onSubmit:(values)=>{
      //form gönderildiğinde yapılacak işlem
      console.log(values);
    },
    validationSchema:loginValidation
  } );

// changeTheme("dark")
  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.title}>
          <img src={Logo} alt="" />
          <h3>{language.login}</h3>
        </div>

        <div className={classes.form}>

          <form  onSubmit={handleSubmit}>
          <div className={classes.inputGroup}>
            <label htmlFor="">{language.username}</label>
            <input type="text"  name="username" value={values.username} onChange={handleChange} />
            {errors.username && <label className={classes.errorMessage}>{errors.username}</label>}
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="">{language.password}</label>
            <input type="password" name="password" value={values.password} onChange={handleChange}/>
            {errors.password && <label className={classes.errorMessage}>{errors.password}</label>}
          </div>

          <div className={classes.submitButton}>
            <button type='submit'>{language.loginButton}</button>
          </div>
          </form>
        </div>

        <div className={classes.registerlink}>
          <span>{language.loginAccountWarning}</span><a href="/register">{language.registerLink}</a>
        </div>
      </div>
    </Container>
  )
}

export default Login