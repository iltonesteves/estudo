import styled from 'styled-components'

import { Subtitle } from '../../theme'

export const Block = styled.div<{ margin: string }>`
  margin: ${props => props.margin};
`

export const Cards = styled.div<{ gridTemplateColumns: number; padding?: string }>`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(${props => props.gridTemplateColumns}, 1fr);
  overflow: scroll;
  padding: ${props => props.padding};

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const SubtitleText = styled(Subtitle)`
  margin-bottom: 16px;
  margin: 10px 20px;
`
