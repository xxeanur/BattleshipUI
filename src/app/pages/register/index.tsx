import React from 'react'
import { style } from './style';
import img from '../../assets/game_icons_battleship_840x840.webp'
import logo from '../../assets/shipping-logo.png'
import { Container } from '../../components';
import { useThemeContext } from '../../context/theme/theme';
import { useLanguageContext } from '../../context/localization/localization';
import { useFormik } from 'formik';
import { RegisterValidation } from '../../validations/registerValidation';
import { registerUser } from '../../services/registerService';
function Register() {
  const { language } = useLanguageContext();
  const { theme } = useThemeContext();
  const classes = style(theme);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordAgain: "",
    },
    validationSchema: RegisterValidation,
    onSubmit: async (values) => {
      try {
        const { username, email, password, passwordAgain } = values;

        const result = await registerUser({ username, email, password, passwordAgain });
        console.log('Registration successful:', result);
        alert("Kayıt başarılı.");//kullanıcıya gösterilecek mesaj
      } catch (error: any) {
        console.log(error.message);
        alert("Kayıt başarısız. Lütfen tekrar deneyin.");
      }

    },
  });

  return (
    <Container>
      <div className={classes.container}>
        <div className={classes.imgBox}><img src={img} alt="" /></div>
        <div className={classes.registerBox}>

          <div className={classes.title}>
            <img src={logo} alt="" />
            <h3>BATTLESHİP</h3>
          </div>

          <form action="" onSubmit={handleSubmit}>
            <div className={classes.inputForm}>

              <div className={classes.formGroup}>
                <label htmlFor="">{language.username}</label>
                <input type="text" name="username" value={values.username} onChange={handleChange} />
                {errors.username && <label className={classes.errorMessage}>{errors.username}</label>}
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="">Email : </label>
                <input type="text" name='email' value={values.email} onChange={handleChange} />
                {errors.email && <label className={classes.errorMessage}>{errors.email}</label>}
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="">{language.password} </label>
                <input type="password" name='password' value={values.password} onChange={handleChange} />
                {errors.password && <label className={classes.errorMessage}>{errors.password}</label>}
              </div>

              <div className={classes.formGroup}>
                <label htmlFor="">{language.password}</label>
                <input type="password" name='passwordAgain' value={values.passwordAgain} onChange={handleChange} />
                {errors.passwordAgain && <label className={classes.errorMessage}>{errors.passwordAgain}</label>}
              </div>

              <div className={classes.submitButton}>
                <button type='submit'>{language.signUp}</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </Container>
  )
}

export default Register