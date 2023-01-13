import React from 'react'

import { useTheme } from '@mui/material/styles'

import { CopyText } from '..'

import { Flex, H3 } from '../../theme'
import { ButtonRounded } from '../button'
import { Content, ShareWrapper } from './styles'

interface ShareProps {
  link: string
  setVisible: (value: boolean) => void
}

export const Share = (props: ShareProps) => {
  const { link, setVisible } = props
  const { palette } = useTheme()

  return (
    <ShareWrapper>
      <Flex justifyContent="space-between">
        <H3 primaryColor={palette.primary.main}>Compartilhar link</H3>
        <ButtonRounded onClick={() => setVisible(false)} />
      </Flex>
      <Content>
        <CopyText link={link} />
      </Content>
    </ShareWrapper>
  )
}
