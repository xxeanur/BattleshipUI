import React from 'react'
import { style } from './style'
import { useThemeContext } from '../../context/theme/theme';
import { useLanguageContext } from '../../context/localization/localization';
import { useFormik } from 'formik';
import { updatePasswordValidation } from '../../validations/updatePasswordValidation'
import { userUpdatePassword } from '../../services/userService';
function UpdatePassword() {
  const { language } = useLanguageContext();
  const { theme } = useThemeContext();
  const classes = style(theme);
  const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      newPasswordAgain: ""
    }, validationSchema: updatePasswordValidation,

    onSubmit: async (values) => {
      try {
        const { currentPassword, newPassword, newPasswordAgain } = values;
        const result = await userUpdatePassword({ currentPassword, newPassword, newPasswordAgain });
        if (result && result.success) {
          alert("Şifre başarıyla değiştirildi.");
        }
      } catch (error: any) {
        console.log(error.message);
        alert(error.message);
      }
    }
  })

  return (

    <div className={classes.container}>
      <form action="" onSubmit={handleSubmit}>
        <div className={classes.Form}>
          <div className={classes.inputForm}>
            <label htmlFor="">{language.currentPassword}</label>
            <input type="password" name='currentPassword' value={values.currentPassword} onChange={handleChange} />
            {errors.currentPassword && <label className={classes.errorMessage}>{errors.currentPassword}</label>}
          </div>
          <div className={classes.inputForm}>
            <label >{language.newPassword}</label>
            <input type="password" name='newPassword' value={values.newPassword} onChange={handleChange} />
            {errors.newPassword && <label className={classes.errorMessage}>{errors.newPassword}</label>}
          </div>
          <div className={classes.inputForm}>
            <label htmlFor="">{language.passwordRetype}</label>
            <input type="password" name='newPasswordAgain' value={values.newPasswordAgain} onChange={handleChange} />
            {errors.newPasswordAgain && <label className={classes.errorMessage}>{errors.newPasswordAgain}</label>}
          </div>
          <div className={classes.submitButton}>
            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Yükleniyor..." : language.changePasswordButton}</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UpdatePassword;