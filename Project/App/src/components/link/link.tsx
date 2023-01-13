import React from 'react'

import { useTheme } from '@mui/material/styles'

import { ArrowRight } from '../../assets'
import { BodySmall, H4 } from '../../theme'
import { Content } from './styles'

interface LinksProps {
  backgroundColor: string
  title: string
  label: string
  href: string
}

export const Link = (props: LinksProps) => {
  const { backgroundColor, title, label, href } = props
  const { palette } = useTheme()

  return (
    <Content primaryColor={palette.primary.main} backgroundColor={backgroundColor} href={href} target="_blank">
      <div>
        <BodySmall primaryColor={palette.primary.main}>{title}</BodySmall>
        <H4 primaryColor={palette.primary.main}>{label}</H4>
      </div>
      <ArrowRight primaryColor={palette.primary.main} />
    </Content>
  )
}
