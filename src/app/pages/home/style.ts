import { createUseStyles } from 'react-jss'

export const style = createUseStyles({

    gameComponent: {
        display: "none",
    },
    searchForPlayers: {
        display: "flex",
        justifyContent: "center",
        '& button': {
            cursor: "pointer",
            width: '600px',
            height: '150px',
            display: 'flex',
            borderRadius: '10px',
            border: "2px solid black",
            backgroundColor: (theme:any)=>theme.searchButtonBackgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
            '& h1': {
                color: (theme:any)=>theme.fontColor,
                fontSize: 70
            },
            '& svg': {
                paddingRight: "15px",
                width: '110px',
                height: '110px',
                color:(theme:any)=>theme.fontColor
            },
        },
    },

    "@media(max-width:1000px)": {
        searchForPlayers: {
            marginTop:"250px",
            '& button': {
                width: '100%',
                height: '80px',
                '& h1': {
                    fontSize: "x-large"
                },
                '& svg': {
                    width: '50px',
                    height: '60px',
                },
            },
        },

    }
})