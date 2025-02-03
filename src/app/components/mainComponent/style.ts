import { createUseStyles } from 'react-jss'
// '#D9D9D9',
export const style = createUseStyles({
    container: {
        padding: "0px",
        margin: "0px",
        position: 'relative',
        width: '100%',
        minHeight: "100%",
        backgroundColor: (theme: any) => theme.BackgroundColor,
    },
    content: {
        display:"flex",
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        minHeight: "calc(100vh - 50px)"
    },
    settingsBox: {
        height: 70,
        zIndex: '5',
        display: 'flex',
        alignItems:"center",
        gap: 5,
        paddingRight: 10,
        justifyContent: "end",
        '& svg': {
            width: '35px',
            height: '35px',
        },
        '& button': {
            padding: "5px",
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
})