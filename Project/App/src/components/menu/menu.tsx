import React from 'react'

import { useTheme } from '@mui/material/styles'

import { Content, Title } from './styles'

interface MenuProps {
  icon?: JSX.Element
  title: string
  active?: boolean
  onClick: (value: any) => void
}

export const Menu = (props: MenuProps) => {
  const { icon, title, active, onClick } = props
  const { palette } = useTheme()

  return (
    <Content onClick={onClick}>
      {icon}
      <Title primaryColor={palette.primary.main} active={active}>
        {title}
      </Title>
    </Content>
  )
}
