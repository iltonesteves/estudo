import { createTheme } from '@mui/material/styles'
import { PaletteOptions } from '@mui/material/styles/createPalette'

export interface GradientColors {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  main: string
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    gradient: GradientColors
  }
  interface Palette {
    gradient: GradientColors
  }
}

type ThemeTypes = 'green' | 'yellow' | 'orange' | 'pink'

const palleteDicitionary: { [key in ThemeTypes]: PaletteOptions } = {
  green: {
    primary: {
      main: '#1C321F',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#D8DDCC'
    },
    background: {
      default: '#F0F4E4'
    },
    gradient: {
      900: '#2B5200',
      800: '#4D7208',
      700: '#618512',
      600: '#75981C',
      500: '#83A623',
      400: '#95B247',
      300: '#A7BF68',
      200: '#C0D192',
      100: '#D9E3BC',
      50: '#F0F4E4',
      main: '#F0F4E4'
    }
  },
  orange: {
    primary: {
      main: '#E34B2A',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FFD49D'
    },
    background: {
      default: '#FFFAEA'
    },
    gradient: {
      900: '#FF8124',
      800: '#FF9F2A',
      700: '#FFB02D',
      600: '#FFC331',
      500: '#FFD136',
      400: '#FFD846',
      300: '#FFE165',
      200: '#FFE993',
      100: '#FFF1C1',
      50: '#FFFAEA',
      main: '#FFFAEA'
    }
  },
  yellow: {
    primary: {
      main: '#1C321F',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FBC626'
    },
    background: {
      default: '#FEFDEC'
    },
    gradient: {
      900: '#F2882C',
      800: '#F7AF3D',
      700: '#FAC646',
      600: '#FDDD4F',
      500: '#F8E84E',
      400: '#FAED69',
      300: '#FCF287',
      200: '#FDD6AD',
      100: '#FEFAD1',
      50: '#FEFDEC',
      main: '#FEFDEC'
    }
  },
  pink: {
    primary: {
      main: '#F22764',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FF9DB5'
    },
    background: {
      default: '#FFF3F7'
    },
    gradient: {
      900: '#ED485D',
      800: '#FC536A',
      700: '#FF5A73',
      600: '#FF647C',
      500: '#FF677B',
      400: '#FF7A91',
      300: '#FF96A9',
      200: '#FFB5C2',
      100: '#FFDFEA',
      50: '#FFF3F7',
      main: '#FFF3F7'
    }
  }
}

export const themeDefault = (type: ThemeTypes) =>
  createTheme({
    palette: {
      primary: palleteDicitionary[type].primary,
      secondary: palleteDicitionary[type].secondary,
      background: palleteDicitionary[type].background,
      gradient: palleteDicitionary[type].gradient
    },
    typography: {
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif`
    }
  })
