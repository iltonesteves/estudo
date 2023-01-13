import styled from 'styled-components'

import { BodyNormal, Content } from '../../theme'

export const Text = styled(BodyNormal)`
  margin-bottom: 33px;
`

export const ContactWrapper = styled.div<{ background: string }>`
  background-color: ${props => props.background};
  display: grid;
  gap: 20px;
  padding: 24px 24px 30px 24px;
`

export const ButtonsWrapper = styled.div<{ primaryColor: string; background: string }>`
  background-color: ${props => props.background};
  display: grid;
  gap: 24px;
  padding: 20px 24px 28px 24px;

  button:last-child {
    background-color: ${props => props.background};
    color: ${props => props.primaryColor};
  }
`

export const ContentBox = styled(Content)`
  h2,
  p,
  h4,
  h5 {
    margin-left: 20px;
  }

  button {
    margin: 0 24px;
    width: calc(100% - 28px);
  }
`

export const ContainerContactInfo = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`
