import React from 'react'

import { useTheme } from '@mui/material/styles'

import { ButtonArrow } from '../../../components'
import { Flex, H1, theme } from '../../../theme/theme'
import { TextWrapper } from './styles'

interface HomeProps {
  name?: string
  gender?: string
  onClick: (value: any) => void
  imgSrc: string
}

export const Home = (props: HomeProps) => {
  const { name, gender, imgSrc, onClick } = props
  const { palette } = useTheme()

  const welcomeMessage = gender === 'female' ? 'Oi, eu sou a' : 'Oi, eu sou o'

  return (
    <>
      <img src={imgSrc} alt="Izabele" style={{ borderRadius: '10px', width: '100%', height: '100%' }} />
      <TextWrapper>
        <div>{welcomeMessage}</div>
        <Flex justifyContent="space-between">
          <H1 primaryColor={palette.primary.main} style={{ color: `${theme.colors.white}` }}>
            {name}
          </H1>
          <ButtonArrow onClick={onClick} />
        </Flex>
      </TextWrapper>
    </>
  )
}
