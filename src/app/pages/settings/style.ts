import { createUseStyles } from 'react-jss'

export const style = createUseStyles({

     container: {
          width: '880px',
     },
     title: {
          position: 'relative',
          width: '100%',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#707070',
          color: 'white',
          fontSize: '25px',
          fontFamily: 'monospace',
          borderRadius: '10px 10px 0px 0px',
          '& button': {
               backgroundColor: '#4A4A4A',
               height: '70px',
               width: '70px',
               position: "absolute",
               right: '0px',
               top: '0px',
               borderRadius: '10px 10px 10px 10px',
               cursor: 'pointer',
               border: 'none',
               '&:hover': {
                    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.3)',
                    backgroundColor: '#3F3F3F',
               }
          },
          '& svg': {
               width: '30px',
               height: '30px'
          }

     },

     contentAndMenuBox: {
          display: 'flex',
          backgroundColor: '#969696',
          borderRadius: '0px 0px 10px 10px',
          width: '100%',
     },
     content:{
          width:'100%',
     },

     menu: {
          backgroundColor: '#454545',
          width: '200px',
          height: '450px',
          borderRadius: '0px 0px 0px 10px',
          '& button': {
               marginTop: '10px',
               backgroundColor: '#454545',
               width: '100%',
               height: '50px',
               fontSize: 'large',
               color: 'white',
               fontFamily: 'sans-serif',
               letterSpacing: '2px',
               border: 'none',
               boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
               cursor: 'pointer',
               '&:hover': {
                    boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.3)',
                    backgroundColor: '#3F3F3F',

               }

          }
     },
     "@media(max-width:1000px)": {
          container: {
               width: '90%',
          },
          menu: {
               backgroundColor: '#454545',
               width: '30%',
               '& button': {
                    fontSize: 'medium',
                    height:'60px'
               },
          },
     },
})