import styled from 'styled-components'

export const CopyTextWrapper = styled.div<{ secondaryColor: string }>`
  border: 1px solid ${props => props.secondaryColor};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 12px;
`
