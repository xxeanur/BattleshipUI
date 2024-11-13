import { createUseStyles } from 'react-jss'

export const style = createUseStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '450px',
        width:"100%",
    },
    Form: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    inputForm: {     
        paddingTop: '40px',
        color: 'white',
        fontSize: '20px',
        width:"400px",
        '& input': {
            display:"block",
            width: '100%',
            height: '25px',
            borderRadius: '8px',
            fontSize: '20px',
            marginTop: '10px',
            border: '2px solid #CECECE',
            backgroundColor:(theme:any)=>theme.inputBackgroundColor,
            color:(theme:any)=>theme.fontColor,
            '&:focus': {
                border: " 2px solid #707070",
                outline: 'none'
            }
        }
    },
    errorMessage:{
        color:(theme:any)=>theme.fontColor,
        fontSize:"small"
    },
    submitButton: {
        paddingTop: '30px',
        '& button': {
            width: '300px',
            height: '35px',
            borderRadius: '10px',
            borderColor: 'white',
            backgroundColor: (theme:any)=>theme.buttonBackgroundColor,
            color:(theme:any)=>theme.fontColor,
            filter: "drop-shadow(1px 1px 0px #b5b5b5)",
            fontWeight: '1000',
            fontSize: 'medium',
            cursor: 'pointer',
        }
    },
    "@media(max-width:1000px)": {
        container: {


        },

        inputForm: {
            marginLeft:"15px",
            width:"100%",
            paddingTop: '30px',
            fontSize: '18px',
            '& input': {
                width: '90%',
                height: '25px',
                borderRadius: '8px',
                fontSize: '20px',
                marginTop: '10px',
                border: '2px solid #CECECE',
                '&:focus': {
                    border: " 2px solid #707070",
                    outline: 'none'
                }
            }
        }, submitButton: {
            paddingTop: '40px',
            '& button': {
                width: '100%',
                height: '35px',
            }
        }

    }



})