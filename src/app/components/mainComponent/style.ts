import { createUseStyles } from 'react-jss'
// '#D9D9D9',
export const style = createUseStyles({
    container: {
        padding: "0px",
        margin: "0px",
        position: 'relative',
        zIndex: '5',
        width: '100%',
        height: "100vh",
        backgroundColor: (theme:any)=>theme.BackgroundColor,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    settingsBox: {
        position: 'absolute',
        zIndex: '5',
        display: 'flex',
        flexDirection: 'row',
        right: 0,
        top: 0,
        paddingRight: '20px',
        paddingTop: '20px',
        '& svg': {
            width: '35px',
            height: '35px',
        },
        '& button': {
            padding: "5px",
            marginLeft: '15px',
            borderRadius: '10px',
            border: "2px solid black",
            cursor: "pointer",
        }
    },
    settingsButton: {
        backgroundColor: '#969696'
    },
    logoutButton: {
        backgroundColor: '#970000'
    },



    "@media(max-width:1000px)": {

        settingsBox: {
            paddingRight: '10px',
            paddingTop: '10px',
            '& svg': {
                width: '30px',
                height: '30px',
            },
        },
        container: {
            position: 'absolute',
            width: '100%',
            height: "100%",
            backgroundColor: '#d9d9d9',
            display: "block",
        },
        content: {
            height:'100%',
        }

    }
})