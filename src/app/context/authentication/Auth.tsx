import React, { createContext, useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router';
import { axiosInstance } from '../../services/HttpCustomService';

interface props {
    children: React.ReactNode
}

const authContext = createContext({
});

const useAuthContext = () => useContext(authContext);

function Auth(props: props) {
    const location = useLocation();

    useEffect(() => {
        const tokenValidation = async () => {
            await axiosInstance.get("/tokenVerify");
        }
        tokenValidation();
    }, [location.pathname])


    return (
        <authContext.Provider value={{}}>
            {props.children}
        </authContext.Provider>
    )
}

export default Auth