import * as yup from 'yup'

export const loginValidation=yup.object().shape({
    username:yup.string().required("Kullanıcı adı boş bırakılamaz."),
    password:yup.string().required("Parola boş bırakılamaz.")
})