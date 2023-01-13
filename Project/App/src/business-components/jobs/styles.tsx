import styled from 'styled-components'

export const Buttons = styled.div<{ gridTemplateColumns: number; padding?: string }>`
  grid-template-columns: repeat(${props => props.gridTemplateColumns}, 1fr);
  display: grid;
  gap: 8px;
  margin-bottom: 24px;
  overflow: scroll;
  padding: 0 20px 0 0;
  white-space: nowrap;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  & > button {
    margin: 0px 0px 0 20px;
  }
`

export const Text = styled.div`
  margin-top: 24px;
`

export const Pages = styled.div`
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
