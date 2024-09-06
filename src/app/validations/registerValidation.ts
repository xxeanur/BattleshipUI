import * as yup from 'yup'
//yup formikle gelen inputların zorunluluklarını belirtmemi sağlayacak olan kütühane
//doğrulama şeması için temel bir nesne oluşturduk Object()'le. Shape ise bu nesnenin içindeki hangi alanlara doğrulama kurallarının uygulanacağını belirtir.
export const RegisterValidation=yup.object().shape({
    userName:yup.string().required("Kullanıcı Adı boş bırakılamaz.").min(4,"Kullanıcı Adı en az 4 karakter içermelidir."),
    email:yup.string().email("Geçerli bir E-posta adresi giriniz.").required("E-posta boş bırakılamaz."),
    password:yup.string().required("Parola boş bırakılamaz.").min(6,"Parola en az 6 karakter içermelidir."),
    passwordRetype:yup.string().required("Parola boş bırakılamaz.").oneOf([yup.ref("password")],"Parolalar uyuşmuyor.")
})