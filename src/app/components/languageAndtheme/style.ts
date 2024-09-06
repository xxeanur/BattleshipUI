import { faLineChart } from '@fortawesome/free-solid-svg-icons'
import { createUseStyles } from 'react-jss'

export const style = createUseStyles({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40px',
        alignItems: "center",
    },
    selectBox: {
        width: '240px',
        display: 'flex',
        marginTop: '20px',
        alignItems: "center",
        justifyContent: 'end',
        '& h2': {
            paddingRight: '20px',
            color: 'white',
            fontSize: "18px",
        },
        '& select': {
            width: '150px',
            height: '40px',
            borderRadius: '5px',
            textAlign: "center",
            fontFamily: 'sans-serif',
            fontSize: "medium",
            backgroundColor: '#454545',
            letterSpacing: '1px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',

            '&:hover': {
                boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#3F3F3F',
            }
        }
    },
})