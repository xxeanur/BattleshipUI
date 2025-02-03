import { axiosInstance } from './HttpCustomService';


export const login = async (data: {
    username: string;
    password: string;
}) => {
    try {
        const response = await axiosInstance.post("/login", data);

        const token = response.data.token;
        localStorage.setItem("JWT", token);
        return response.data;

    } catch (error: any) {
        throw new Error(error.response?.data.message || "Giriş başarısız.");
    }
}