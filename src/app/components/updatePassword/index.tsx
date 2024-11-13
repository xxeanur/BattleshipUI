import React from 'react'
import { style } from './style'
import { useThemeContext } from '../../context/theme/theme';
import { useLanguageContext } from '../../context/localization/localization';
import { useFormik } from 'formik';
import {updatePasswordValidation} from '../../validations/updatePasswordValidation'
function UpdatePassword() {
  const { language } = useLanguageContext();
  const { theme } = useThemeContext();
  const classes = style(theme);
  const {values,errors, handleChange,handleSubmit} = useFormik({
    initialValues: {
      password: "",
      newPassword:"",
      newPasswordRetype:""
    },
    onSubmit: (values) => {
      //form gönderildiğinde çalışacak olan fonksiyon
    },
validationSchema:updatePasswordValidation
  })

  return (

    <div className={classes.container}>

      <form action="" onSubmit={handleSubmit}>
        <div className={classes.Form}>
          <div className={classes.inputForm}>
            <label htmlFor="">{language.currentPassword}</label>
            <input type="password" name='password'  value={values.password} onChange={handleChange}/>
            {errors.password && <label className={classes.errorMessage}>{errors.password}</label>}
          </div>
          <div className={classes.inputForm}>
            <label >{language.newPassword}</label>
            <input type="password" name='newPassword' value={values.newPassword} onChange={handleChange}/>
            {errors.newPassword && <label className={classes.errorMessage}>{errors.newPassword}</label>}
          </div>
          <div className={classes.inputForm}>
            <label htmlFor="">{language.passwordRetype}</label>
            <input type="password" name='newPasswordRetype' value={values.newPasswordRetype} onChange={handleChange}/>
            {errors.newPasswordRetype && <label className={classes.errorMessage}>{errors.newPasswordRetype}</label>}
          </div>
          <div className={classes.submitButton}>
            <button>{language.changePasswordButton}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdatePassword;