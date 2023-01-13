import styled from 'styled-components'

import { theme } from '../../theme/theme'

export const ButtonArrowWrapper = styled.button<{ primaryColor: string; background: string }>`
  align-items: center;
  background-color: ${props => props.background};
  border-style: inherit;
  border: 1.5px solid ${props => props.primaryColor};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: center;
  width: 76px;
`

export const ButtonWrapper = styled.button<{ active?: boolean; primaryColor: string; background: string }>`
  align-items: center;
  background-color: ${props => (props.active ? `${props.primaryColor}` : `${props.background}`)};
  border-style: inherit;
  border: 1px solid ${props => props.primaryColor};
  border-radius: 10px;
  color: ${props => (props.active ? `${theme.colors.white}` : `${props.primaryColor}`)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 10px 26px;
`

export const ButtonLargeWrapper = styled(ButtonWrapper)<{ primaryColor: string; secondaryColor: string }>`
  background-color: ${props => props.primaryColor};
  color: ${props => props.secondaryColor};
  cursor: pointer;
  padding: 16px 0;
  text-align: center;
  width: 100%;
`

export const ButtonTransparentWrapper = styled.button<{ primaryColor: string; background: string }>`
  background-color: ${props => `${props.background}66`};
  border-color: inherit;
  border-radius: 10px;
  border-style: inherit;
  color: ${theme.colors.white};
  cursor: pointer;
  padding: 16px 24px;
  width: fit-content;
`

export const ButtonRoundedWrapper = styled.button<{ primaryColor: string; background: string }>`
  align-items: center;
  background-color: ${props => props.background};
  border-color: inherit;
  border-radius: 30px;
  border-style: inherit;
  color: ${props => props.primaryColor};
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 122px;
`

export const ButtonColoredWrapper = styled.button<{ backgroundColor: string; color: string; primaryColor: string }>`
  align-items: center;
  background-color: ${props => `${props.backgroundColor}`};
  border-style: inherit;
  border: 1px solid ${props => props.primaryColor};
  border-radius: 10px;
  box-sizing: border-box;
  color: ${props => props.color};
  cursor: pointer;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 112px;
`

export const ButtonSlideWrapper = styled.button<{ mobile: boolean; primaryColor: string }>`
  align-items: center;
  background-color: ${theme.colors.white};
  border-style: inherit;
  border-radius: 30px;
  bottom: ${props => (props.mobile ? '-50px' : '0')};
  color: ${props => props.primaryColor};
  cursor: pointer;
  display: flex;
  height: 46px;
  justify-content: center;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  width: 170px;
  top: 80%;

  p {
    font-weight: ${theme.fontWeight.bold};
  }
`
