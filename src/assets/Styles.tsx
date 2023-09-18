import {
    createTheme
  } from '@mui/material'

export const theme = createTheme({
    typography: {
      fontFamily: '"Libre Franklin", sans-serif'
    },
    palette: {
      primary: {
        main: '#CE7DEF',
        light: '#E6C7F2',
        dark: '#613A70'
      },
      secondary: {
        main: '#65F0B2',
        light: '#AEF2D4',
        dark: '#2F7053'
      },
    }
  })