import React from 'react'
import { If } from 'react-extras'

import { useTheme } from '@mui/material/styles'

import { Arrow, CheckIcon } from '../../assets'
import { BodyNormal, BodySmall, ButtonNormal } from '../../theme'
import {
  ButtonArrowWrapper,
  ButtonColoredWrapper,
  ButtonLargeWrapper,
  ButtonRoundedWrapper,
  ButtonSlideWrapper,
  ButtonTransparentWrapper,
  ButtonWrapper
} from './styles'

export { ButtonSmall } from '../../theme/theme'

interface ButtonArrowProps {
  onClick: (value: any) => void
}

export const ButtonArrow = (props: ButtonArrowProps) => {
  const { onClick } = props
  const { palette } = useTheme()

  return (
    <ButtonArrowWrapper background={palette.background.default} primaryColor={palette.primary.main} onClick={onClick}>
      <Arrow primaryColor={palette.primary.main} />
    </ButtonArrowWrapper>
  )
}

type ButtonProps = {
  title: string
  active?: boolean
  onClick: (value: any) => void
}

export const Button = (props: ButtonProps) => {
  const { title, active = false, onClick } = props
  const { palette } = useTheme()

  return (
    <ButtonWrapper
      background={palette.background.default}
      primaryColor={palette.primary.main}
      active={active}
      onClick={onClick}
    >
      {title}
    </ButtonWrapper>
  )
}

export const ButtonLarge = (props: ButtonProps) => {
  const { title, active = false, onClick } = props
  const { palette } = useTheme()

  return (
    <ButtonLargeWrapper
      background={palette.background.default}
      primaryColor={palette.primary.main}
      secondaryColor={palette.secondary.main}
      active={active}
      onClick={onClick}
    >
      <ButtonNormal primaryColor={palette.primary.main}>{title}</ButtonNormal>
    </ButtonLargeWrapper>
  )
}

interface ButtonTransparentProps {
  title: JSX.Element | string
  onClick: (value: any) => void
}

export const ButtonTransparent = (props: ButtonTransparentProps) => {
  const { title, onClick } = props
  const { palette } = useTheme()

  return (
    <ButtonTransparentWrapper
      background={palette.background.default}
      primaryColor={palette.primary.main}
      onClick={onClick}
    >
      {title}
    </ButtonTransparentWrapper>
  )
}

export const ButtonRounded = (props: ButtonArrowProps) => {
  const { onClick } = props
  const { palette } = useTheme()

  return (
    <ButtonRoundedWrapper background={palette.background.default} primaryColor={palette.primary.main}>
      <BodyNormal primaryColor={palette.primary.main} onClick={onClick}>
        x Fechar
      </BodyNormal>
    </ButtonRoundedWrapper>
  )
}

interface ButtonColoredProps {
  backgroundColor: string
  color: string
  title: string
  checked?: boolean
  onClick: (value: any) => void
}

export const ButtonColored = (props: ButtonColoredProps) => {
  const { backgroundColor, checked = false, color, title, onClick } = props
  const { palette } = useTheme()

  return (
    <ButtonColoredWrapper
      primaryColor={palette.primary.main}
      backgroundColor={backgroundColor}
      color={color}
      onClick={onClick}
    >
      <If condition={checked}>
        <CheckIcon backgroundColor={palette.background.default} />
      </If>
      {title}
    </ButtonColoredWrapper>
  )
}

interface ButtonSlideProps {
  title: string
  visible: boolean
}

export const ButtonSlide = (props: ButtonSlideProps) => {
  const { title, visible } = props
  const { palette } = useTheme()

  return (
    <ButtonSlideWrapper primaryColor={palette.primary.main} mobile={visible}>
      <BodySmall primaryColor={palette.primary.main}>{title}</BodySmall>
    </ButtonSlideWrapper>
  )
}
