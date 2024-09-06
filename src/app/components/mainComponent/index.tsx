import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router';
import { style } from './style';
import { useThemeContext } from '../../context/theme/theme';

interface MainProps {
    children: React.ReactNode;//bileşenin içindeki html ögelerini tesil eder
}

function MainComponent({ children }: MainProps) {
    const navigate = useNavigate();
    const {theme}=useThemeContext();
    const classes = style(theme);


    const logout = () => {

        localStorage.removeItem("JWT");
        navigate("/Login");
    }
    return (
        <div className={classes.container}>
            <div className={classes.settingsBox}>
                <button onClick={logout} className={classes.logoutButton}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
                <button className={classes.settingsButton} onClick={() => navigate('/settings')} >
                    <FontAwesomeIcon icon={faGear} />
                </button>
            </div>
            <div className={classes.content}>
                {children} 
            </div>
        </div>
    )
}


export default MainComponent

