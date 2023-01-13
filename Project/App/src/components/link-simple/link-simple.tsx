import React from 'react'

import { useTheme } from '@mui/material/styles'

import { Href } from './styles'

interface LinksSimpleProps {
  href: string
  title: string
}

export const LinkSimple = (props: LinksSimpleProps) => {
  const { href, title } = props
  const { palette } = useTheme()

  return (
    <Href primaryColor={palette.primary.main} href={href}>
      {title}
    </Href>
  )
}
