import { createUseStyles } from 'react-jss'

export const style = createUseStyles({
    container: {
        width: '1100px',
        height: '600px',
        backgroundColor: '#969696'
    },

    "@media(max-width:1000px)": {
        container: {
            position:"absolute",
            zIndex:'-2',
            top:0,
            left:0,
            width: '100%',
            height: '100%',
        },

    }

})