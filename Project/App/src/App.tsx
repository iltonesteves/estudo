import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { Theme, ThemeProvider } from '@mui/material/styles'

import { WhitelabelActions, WhitelabelSelectors } from 'store/whitelabel'
import { themeDefault } from 'theme/mui-theme'

import { Main } from './business-components/main'

function App() {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState<Theme>()

  const whitelabelTheme = useSelector(WhitelabelSelectors.whitelabelTheme)

  useEffect(() => {
    dispatch(WhitelabelActions.getWhitelabel())
  }, [dispatch])

  useEffect(() => {
    if (whitelabelTheme) {
      const newTheme = themeDefault(whitelabelTheme)
      setTheme(newTheme)
    }
  }, [whitelabelTheme])

  if (!whitelabelTheme) {
    return (
      <Backdrop style={{ color: '#fff' }} open>
        <CircularProgress color="inherit" />
      </Backdrop>
    )
  }

  if (theme) {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </ThemeProvider>
    )
  }

  return null
}

export default App
