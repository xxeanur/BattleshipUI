import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
})


axiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("JWT");
        if (token)
            config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    async (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    async (response) => {

        return response;
    },
    async (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("JWT");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
)



export { axiosInstance }