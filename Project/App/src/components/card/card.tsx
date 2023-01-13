import React from 'react'
import { Choose } from 'react-extras'

import { useTheme } from '@mui/material/styles'

import { H3, Subtitle } from '../../theme'
import { CardWrapper } from './styles'

interface CardProps {
  subtitle: string
  title: string | number
}

export const Card = (props: CardProps) => {
  const { subtitle, title } = props
  const { palette } = useTheme()

  return (
    <CardWrapper secondaryColor={palette.secondary.main}>
      <Choose>
        <Choose.When condition={Boolean(title)}>
          <H3 primaryColor={palette.primary.main}>{title}</H3>
        </Choose.When>
        <Choose.Otherwise>
          <H3 primaryColor={palette.primary.main}>-----</H3>
        </Choose.Otherwise>
      </Choose>
      <Subtitle primaryColor={palette.primary.main}>{subtitle}</Subtitle>
    </CardWrapper>
  )
}
