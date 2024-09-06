import { createUseStyles } from 'react-jss'



export const style = createUseStyles({
    container:  {
        width: "380px",
        height: "350px",
        backgroundColor:(theme:any)=>theme.BackgroundColor,
        borderRadius: '10px',
        fontFamily: 'sans-serif'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "& img": {
            width: 40,
            height: 40,
            filter: "drop-shadow(0px 0px 1px #ffffff)"
        },
        "& h3": {
            fontSize: 20,
            fontWeight: "bolder",
            paddingLeft: '5px',
            color:(theme:any)=>theme.fontColor
        }
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom:"10px",
        fontSize: 20,
        color:(theme:any)=>theme.fontColor,
        "& input": {
            borderRadius: '10px',
            height: "30px",
            filter: "drop-shadow(0px 0px 1px #ffffff)",
            backgroundColor:(theme:any)=>theme.inputBackgroundColor,
            color:(theme:any)=>theme.fontColor,
            border: '2px solid #CECECE',
            '&:focus': {
                borderColor: 'gray',
                outline: 'none'
            }
        },
    },
    errorMessage:{
        fontSize:"small",
        color:(theme:any)=>theme.fontColor,
    },
    submitButton: {
        display:'flex',
        justifyContent:'center',
        marginTop: '20px',
        '& button': {
            width: '320px',
            height: '45px',
            borderRadius: '10px',
            borderStyle: 'solid',
            borderColor: (theme:any)=>theme.borderColor,
            filter: "drop-shadow(2px 2px 0px #b5b5b5)",
            backgroundColor: (theme:any)=>theme.buttonBackgroundColor,
            color:(theme:any)=>theme.fontColor,
            fontSize: '18px',
            fontWeight: 'bold',
            cursor:'pointer',
            '&:hover': {
                borderColor: '#6c7b8b'
            }
        }
    },
    registerlink: {
        textAlign: 'center',
        marginTop: '20px',
        fontWeight: 'bold',
        color:(theme:any)=>theme.fontColor,
        '& a':{
            color:(theme:any)=>theme.linkColor
        }
    },
    "@media(max-width:1000px)": {
        container: {
            width:'100%',
            height:'100%',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            paddingBottom:'300px'
        },
        title:{
            flexDirection:'column',
            "& img": {
                width: 100,
                height: 100,
                paddingBottom:'30px'
            },
        }
    }

})
