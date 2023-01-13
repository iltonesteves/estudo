import React from 'react'

import { useTheme } from '@mui/material/styles'

import { Ticket as TicketIcon } from '../../assets/icons'
import { BodySmall, H5 } from '../../theme'
import { BodySmallBold, Content, Divider, Flex, FlexBorder, Wrapper } from './styles'

interface TicketProps {
  value: string
  image: string
  desc: string
  title: string
  link: string
}

export const Ticket = (props: TicketProps) => {
  const { value, image, desc, title, link } = props
  const { palette } = useTheme()

  return (
    <Content primaryColor={palette.primary.main} href={`${link}`} target="_blank">
      <TicketIcon primaryColor={palette.primary.main} backgroundColor={palette.background.default} />
      <Wrapper>
        <FlexBorder>
          <img src={image} alt={title} width="100%" />
          <div>
            <H5 primaryColor={palette.primary.main}>{title}</H5>
            <BodySmall primaryColor={palette.primary.main}>{desc}</BodySmall>
          </div>
        </FlexBorder>
        <Divider secondaryColor={palette.secondary.main} />
        <Flex>
          <BodySmall primaryColor={palette.primary.main}>Valor mínimo:</BodySmall>
          <BodySmallBold primaryColor={palette.primary.main}>{`R$ ${value}`}</BodySmallBold>
        </Flex>
      </Wrapper>
    </Content>
  )
}
