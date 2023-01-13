import styled from 'styled-components'

export const Content = styled.a<{ backgroundColor: string; primaryColor: string }>`
  align-items: center;
  background-color: ${props => props.backgroundColor};
  box-sizing: border-box;
  color: ${props => props.primaryColor};
  display: flex;
  justify-content: space-between;
  padding: 24px;
  text-decoration: inherit;
`
