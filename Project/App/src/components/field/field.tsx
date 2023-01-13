import React from 'react'

import { useTheme } from '@mui/material/styles'

import { LinkSimple } from 'components/link-simple'

import { H5 } from '../../theme'

interface FieldProps {
  title: string
  subtitle: string
  href: string
}

export const Field = (props: FieldProps) => {
  const { title, subtitle, href } = props
  const { palette } = useTheme()

  return (
    <div>
      <H5 primaryColor={palette.primary.main} style={{ margin: 0 }}>
        {title}
      </H5>
      <LinkSimple href={href} title={subtitle} />
    </div>
  )
}
