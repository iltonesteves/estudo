import styled from 'styled-components'

export const ChartWrapper = styled.div<{ secondaryColor: string }>`
  border: 1px solid ${props => props.secondaryColor};
  border-radius: 10px;
  padding: 12px 16px;
  width: fit-content;
  margin: 20px 0;
`
