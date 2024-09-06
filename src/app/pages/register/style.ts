import { createUseStyles } from 'react-jss'

export const style = createUseStyles({
    container: {
        width: '1000px',
        height: '600px',
        display: "flex",
        borderRadius: '5px',
        backgroundColor: 'white',
    },
    registerBox: {
        width: '50%',
        height: '100%',
        backgroundColor: (theme:any)=>theme.BackgroundColor,
        borderRadius: '0px 5px 5px 0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imgBox: {
        width: '50%',
        height: '100%',
        borderRadius: '5px 0px 0px 5px',
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '5px 0px 0px 5px',
        }
    },
    title: {
        marginTop: '50px',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            width: 50,
            height: 50,
            filter: "drop-shadow(0px 0px 1px #ffffff)",
        },
        '& h3': {
            paddingLeft: '10px',
            fontSize: '25px',
            fontFamily: 'fantasy',
            letterSpacing: '3px',
            fontWeight: 'bolder',
            color:(theme:any)=>theme.fontColor,
        }
    },
    inputForm: {
        height: '280px',
        fontFamily: 'sans-serif',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        marginBottom: '20px',
        fontSize: '20px',
        color:(theme:any)=>theme.fontColor,
       
        '& input': {
            height: '25px',
            borderRadius: '8px',
            fontSize: '18px',
            filter: "drop-shadow(0px 0px 1px #ffffff)",
            border: '2px solid #CECECE',
            padding: '5px',
            color:(theme:any)=>theme.fontColor,
            backgroundColor:(theme:any)=>theme.inputBackgroundColor,
            '&:focus': {
                borderColor: 'gray',
                outline: 'none'
            }
        }
    },
    errorMessage:{
        fontSize:"small",
        color:(theme:any)=>theme.fontColor,
    },
    submitButton: {
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& button': {
            width: '300px',
            height: '35px',
            borderRadius: '10px',
            borderColor: 'white',
            backgroundColor: (theme:any)=>theme.buttonBackgroundColor,
            color:(theme:any)=>theme.fontColor,
            filter: "drop-shadow(2px 2px 0px #b5b5b5)",
            fontWeight: '1000',
            fontSize: 'medium'
        }
    },

    "@media(max-width:1000px)":{
        imgBox:{
           display:'none',
        },
        container: {
            width: '100%',
            height: '100%',
        },
        inputForm:{
            width:"100%"
        },
        
        registerBox: {
            width: '100%',
            height: '100%',
        },
    }
})