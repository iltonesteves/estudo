import styled from 'styled-components'

import { BodySmall, theme } from '../../theme'

export const Content = styled.a<{ primaryColor: string }>`
  position: relative;
  text-decoration: inherit;
  color: ${props => props.primaryColor};
`

export const FlexBorder = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 69px 1fr;
  padding-bottom: 16px;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`

export const BodySmallBold = styled(BodySmall)`
  font-weight: ${theme.fontWeight.bold};
  text-align: right;
`

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 16px 16px 10px 25px;
  position: absolute;
  top: 0;
  width: 346px;
`

export const Divider = styled.div<{ secondaryColor: string }>`
  border-bottom: 1px dashed ${props => props.secondaryColor};
  height: 2px;
  margin-left: -9px;
  margin-top: 6px;
`
