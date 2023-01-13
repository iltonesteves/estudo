import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux'

import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { WhitelabelSelectors } from 'store/whitelabel'

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: (props: { bg: string }) => `url(${props.bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflowY: 'hidden',
    justifyContent: 'center'
  }
}))

const MainLayout: FunctionComponent = ({ children }) => {
  const whitelabelBackgroundDesktop = useSelector(WhitelabelSelectors.whitelabelBackgroundDesktop)!
  const classes = useStyles({ bg: whitelabelBackgroundDesktop })

  return <Box className={classes.root}>{children}</Box>
}

export default MainLayout
