import * as yup from 'yup'

export const updatePasswordValidation=yup.object().shape({
    password:yup.string().required("Mevcut parola alanı boş bırakılamaz."),
    newPassword:yup.string().required("Yeni parola alanı boş bırakılmaz.").min(6,"Parola en az 6 karakter içermelidir."),
    newPasswordRetype:yup.string().required("Yeni parola alanı boş bırakılmaz.").oneOf([yup.ref("newPassword")],"Parolalar uyuşmuyor.")
})