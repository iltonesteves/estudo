import styled from 'styled-components'

import { BodyTiny } from '../../theme'

export const Content = styled.div`
  cursor: pointer;
  text-align: center;
`

export const Title = styled(BodyTiny)<{ active?: boolean; primaryColor: string }>`
  color: ${props => props.primaryColor};
  margin-top: 8px;
  white-space: nowrap;
`
