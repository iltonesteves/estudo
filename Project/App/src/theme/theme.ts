import styled from 'styled-components'

export const theme = {
  fontSizes: {
    tiny: '10px',
    small: '12px',
    normal: '14px',
    medium: '16px',
    large: '18px',
    xLarge: '24px',
    xxLarge: '28px',
    xxxLarge: '48px'
  },
  fontWeight: {
    extrabold: '800',
    bold: '700',
    semibold: '600',
    medium: '500',
    regular: '400'
  },
  lineHeight: {
    tiny: '18px',
    small: '20px',
    normal: '22px',
    medium: '24px',
    large: '26px',
    xLarge: '32px',
    xxLarge: '36px',
    xxxLarge: '56px'
  },
  height: {
    tiny: '26px',
    small: '28px',
    normal: '30px',
    medium: '32px',
    large: '34px',
    xLarge: '40px',
    xxLarge: '44px',
    xxxLarge: '64px'
  },
  spacing: {
    tiny: '0.5px',
    small: '1px'
  },
  colors: {
    lightGreen: '#00DB70',
    darkGreen: '#1C321F',
    lightBrown: '#F0F4E4',
    darkBrown: '#D8DDCC',
    white: '#fff'
  }
}

export const H1 = styled('h1')<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.xxxLarge};
  font-weight: ${theme.fontWeight.extrabold};
  line-height: ${theme.lineHeight.xxxLarge};
  height: ${theme.height.xxxLarge};
  letter-spacing: ${theme.spacing.small};
  margin: 0;
`

export const H2 = styled('h2')<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.xxLarge};
  font-weight: ${theme.fontWeight.extrabold};
  line-height: ${theme.lineHeight.xxLarge};
  // height: ${theme.height.xxLarge};
  letter-spacing: ${theme.spacing.small};
  margin: 28px 20px;
`

export const H3 = styled('h3')<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.xLarge};
  font-weight: ${theme.fontWeight.extrabold};
  line-height: ${theme.lineHeight.xLarge};
  height: ${theme.height.xLarge};
  letter-spacing: ${theme.spacing.small};
  margin: 0;
`

export const H4 = styled('h4')<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.large};
  font-weight: ${theme.fontWeight.extrabold};
  line-height: ${theme.lineHeight.large};
  // height: ${theme.height.large};
  letter-spacing: ${theme.spacing.small};
  margin: 0;
`

export const H5 = styled('h5')<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.medium};
  // height: ${theme.height.medium};
  letter-spacing: ${theme.spacing.small};
  margin: 0;
`

export const Href = styled('a')<{ primaryColor: string; link: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.medium};
  letter-spacing: ${theme.spacing.small};
  margin: 0;
`

export const Subtitle = styled.p<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.normal};
  font-weight: ${theme.fontWeight.semibold};
  line-height: ${theme.lineHeight.normal};
  // height: ${theme.height.normal};
  letter-spacing: ${theme.spacing.small};
  margin: 0;
`

export const BodyNormal = styled.p<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.normal};
  font-weight: ${theme.fontWeight.regular};
  line-height: ${theme.lineHeight.normal};
  // height: ${theme.height.normal};
  letter-spacing: ${theme.spacing.tiny};
  margin: 20px 0;
`

export const BodySmall = styled.p<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.small};
  font-weight: ${theme.fontWeight.regular};
  line-height: ${theme.lineHeight.small};
  // height: ${theme.height.small};
  letter-spacing: ${theme.spacing.tiny};
  margin: 0;
`

export const BodyTiny = styled.p<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.tiny};
  font-weight: ${theme.fontWeight.regular};
  line-height: ${theme.lineHeight.tiny};
  // height: ${theme.height.tiny};
  letter-spacing: ${theme.spacing.tiny};
  margin: 0;
`

export const ButtonNormal = styled.span<{ primaryColor: string }>`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.medium};
  font-weight: ${theme.fontWeight.medium};
  line-height: ${theme.lineHeight.medium};
  letter-spacing: ${theme.spacing.small};
  margin: 0;
`

export const ButtonSmall = styled.button<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.normal};
  font-weight: ${theme.fontWeight.semibold};
  line-height: ${theme.lineHeight.normal};
  height: ${theme.height.normal};
  letter-spacing: ${theme.spacing.small};
`

export const ButtonTiny = styled.button<{ primaryColor: string }>`
  color: ${props => props.primaryColor};
  font-size: ${theme.fontSizes.small};
  font-weight: ${theme.fontWeight.medium};
  line-height: ${theme.lineHeight.small};
  height: ${theme.height.small};
  letter-spacing: ${theme.spacing.small};
`

export const Flex = styled.div<{ alignItem?: string; justifyContent?: string }>`
  align-items: ${props => props.alignItem ?? 'center'};
  box-sizing: border-box;
  display: flex;
  justify-content: ${props => props.justifyContent ?? 'center'};
  width: 100%;
`

export const Container = styled.div<{ mobile?: boolean; background: string }>`
  background-color: ${props => props.background};
  border-radius: ${props => (props.mobile ? 'none' : '10px')};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: ${props => (props.mobile ? '100%' : '682px')};
  margin: 0 auto;
  max-width: ${props => (props.mobile ? '100%' : '394px')};
  position: relative;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

export const BlockContent = styled.div`
  margin-top: 28px;
`

export const ArrowNext = styled.div`
  cursor: pointer;
  position: fixed;
  right: calc(45% - 225px);
  top: 50%;
`

export const ArrowPrevious = styled.div`
  cursor: pointer;
  left: calc(45% - 225px);
  position: fixed;
  top: 50%;
`

export const Content = styled.div<{ paddingBottom?: boolean }>`
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
export const ContentAlign = styled.div<{ margin?: string; display?: string }>`
  margin: ${props => props.margin ?? '0 20px'};
  display: ${props => props.display ?? ''};
`
