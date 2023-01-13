import styled from 'styled-components'

export const Container = styled.div<{ mobile: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`

export const Shadow = styled.div<{ mobile: boolean; gradient: { first: string; last: string } }>`
  background: ${props => `linear-gradient(180deg, ${props.gradient.first}cc 2.5%, ${props.gradient.last}00 50%)`};
  height: 293px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`
export const ShadowBottom = styled.div<{ mobile: boolean; gradient: { first: string; last: string } }>`
  background: ${props => `linear-gradient(360deg, ${props.gradient.first}cc 2.5%, ${props.gradient.last}00 50%)`};
  bottom: 0;
  left: 0;
  height: 273px;
  position: absolute;
  width: 100%;
`
