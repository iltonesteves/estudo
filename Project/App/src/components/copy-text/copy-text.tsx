import React, { useState } from 'react'

import { useTheme } from '@mui/material/styles'

import { ButtonColored } from '..'

import { Flex, Subtitle, theme } from '../../theme'
import { CopyTextWrapper } from './styles'

interface CopyTextProps {
  link: string
}

export const CopyText = (props: CopyTextProps) => {
  const { link } = props
  const { palette } = useTheme()

  const [copyText, setCopyText] = useState('copiar')
  const [backgroundColor, setBackgroundColor] = useState<string>(palette.secondary.main)
  const [color, setColor] = useState<string>(palette.primary.main)
  const [checked, setChecked] = useState(false)

  function updateClipboard() {
    navigator.clipboard.writeText(link).then(() => {
      setCopyText('copiado')
      setBackgroundColor(palette.primary.main)
      setColor(`${theme.colors.white}`)
      setChecked(true)
    })
  }

  function copyLink() {
    const permissionName = 'clipboard-write' as PermissionName
    navigator.permissions.query({ name: permissionName }).then(result => {
      if (result.state === 'granted' || result.state === 'prompt') {
        updateClipboard()
      }
    })
  }

  return (
    <CopyTextWrapper secondaryColor={palette.secondary.main}>
      <Flex justifyContent="space-between">
        <Subtitle primaryColor={palette.primary.main} id="link">
          {link}
        </Subtitle>
        <ButtonColored
          onClick={copyLink}
          title={copyText}
          backgroundColor={backgroundColor}
          color={color}
          checked={checked}
        />
      </Flex>
    </CopyTextWrapper>
  )
}
