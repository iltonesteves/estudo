import React from 'react'
import { If } from 'react-extras'
import { useHistory } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'

import { BackIcon, RefreshIcon } from '../../assets'
import { ButtonLarge } from '../../components'
import { ArrowNext, ArrowPrevious, H2 } from '../../theme'
import { Content, Text } from './styles'

interface NotFoundProps {
  visible: boolean
}

export const NotFound = (props: NotFoundProps) => {
  const { visible } = props
  const { palette } = useTheme()
  const history = useHistory()

  return (
    <>
      <If condition={visible}>
        <ArrowPrevious>
          <BackIcon />
        </ArrowPrevious>
      </If>
      <Content background={palette.background.default}>
        <H2 primaryColor={palette.primary.main}>Oh não!</H2>
        <Text primaryColor={palette.primary.main}>Parece que a conexão falhou, tente novamente!</Text>
        <ButtonLarge title="Recarregar página" active onClick={() => history.push('/')} />
      </Content>
      <If condition={visible}>
        <ArrowNext onClick={() => history.push('/')}>
          <RefreshIcon />
        </ArrowNext>
      </If>
    </>
  )
}
