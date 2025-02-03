import { axiosInstance } from './HttpCustomService';


export const registerUser = async (data: {
    email: string;
    username: string;
    password: string;
    passwordAgain: string;
}) => {
    try {
        const response = await axiosInstance.post("/register", data);
        return response.data;

    } catch (error: any) {
        throw new Error(error.response?.data?.message || "Kayıt işlemi başarısız.");
    }
};