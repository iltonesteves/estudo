import styled from 'styled-components'

export const CardWrapper = styled.div<{ secondaryColor: string }>`
  border: 1px solid ${props => props.secondaryColor};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 20px 16px;
  margin: 0px -10px 0 20px;

  p {
    height: inherit;
  }
`
