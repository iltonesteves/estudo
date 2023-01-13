import styled from 'styled-components'
import { theme } from 'theme'

export const Href = styled.a<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.medium};
  letter-spacing: ${theme.spacing.small};
  margin: 0;
  text-decoration: none;
`
