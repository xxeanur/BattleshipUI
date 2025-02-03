import * as yup from 'yup'

export const RegisterValidation = yup.object().shape({
    username: yup.string().required("Kullanıcı Adı boş bırakılamaz.").min(4, "Kullanıcı Adı en az 4 karakter içermelidir."),
    email: yup.string().email("Geçerli bir E-posta adresi giriniz.").required("E-posta boş bırakılamaz."),
    password: yup.string().required("Parola boş bırakılamaz.").min(6, "Parola en az 6 karakter içermelidir."),
    passwordAgain: yup.string().required("Parola boş bırakılamaz.").oneOf([yup.ref("password")], "Parolalar uyuşmuyor.")
})