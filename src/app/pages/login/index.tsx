import React from 'react'
import { style } from './style'
import Logo from '../../assets/shipping-logo.png'
import { Container } from '../../components';
import { useThemeContext } from '../../context/theme/theme';
import { useLanguageContext } from '../../context/localization/localization';
import { useFormik } from 'formik';
import { loginValidation } from '../../validations/loginValidations';
import { login } from '../../services/loginService';
import { useNavigate } from 'react-router';
import { useNotificationContext } from '../../context/notification/notificationContext';


function Login() {

  const { theme } = useThemeContext();
  const classes = style(theme);
  const { language } = useLanguageContext();
  const navigate = useNavigate();
  const {showNotification}=useNotificationContext();

  const { values, handleChange, errors, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async (values) => {
      try {
        const { username, password } = values;
        const result = await login({ username, password });

        if (result && result.success) {
          navigate("/Home");
        }

      } catch (error: any) {
        // console.log(error.message);
        showNotification("Kullanıcı adı veya şifre hatalı.","error");
      }
    }
  });


  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.title}>
          <img src={Logo} alt="" />
          <h3>{language.login}</h3>
        </div>

        <div className={classes.form}>

          <form onSubmit={handleSubmit}>
            <div className={classes.inputGroup}>
              <label htmlFor="">{language.username}</label>
              <input type="text" name="username" value={values.username} onChange={handleChange} />
              {errors.username && <label className={classes.errorMessage}>{errors.username}</label>}
            </div>
            <div className={classes.inputGroup}>
              <label htmlFor="">{language.password}</label>
              <input type="password" name="password" value={values.password} onChange={handleChange} />
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