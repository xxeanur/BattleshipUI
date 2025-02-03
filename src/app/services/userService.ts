import {axiosInstance} from '../services/HttpCustomService'

export const userUpdatePassword=async(data:{
    currentPassword:string;
    newPassword:string;
    newPasswordAgain:string;
})=>{
    try{
        const response=await axiosInstance.post("settings/updatePassword",data);
        console.log(response.data);
        return response.data;
    }catch(error:any){
        throw new Error(error.response?.data.message||"şifre değiştirme işlemi başarısız.");
    }

}