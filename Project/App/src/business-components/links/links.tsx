import React, { useEffect } from 'react'
import { For, If } from 'react-extras'
import { useHistory } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'

import { MenuView } from 'models/menu-view'

import { BackIcon, NextIcon } from '../../assets'
import { ButtonSlide, Link } from '../../components'
import { ArrowNext, ArrowPrevious, H2 } from '../../theme'
import { ContentBox, LinksWrapper } from './styles'

interface LinkProps {
  title: string
  label: string
  url: string
  bgColor: string
}

interface LinksProps {
  menuView: MenuView
  visible: boolean
  links?: LinkProps[]
  nextPage?: string
  prevPage?: string
  setMenuView: (value: MenuView) => void
  scrollBar: boolean
  visibleScroll: boolean
}

export const Links = (props: LinksProps) => {
  const { menuView, visible, links, nextPage, prevPage, setMenuView, scrollBar, visibleScroll } = props
  const theme = useTheme()

  const history = useHistory()

  useEffect(() => {
    setMenuView({
      about: { view: true, inProgress: false },
      metrics: { view: (menuView.metrics.view || menuView.metrics.inProgress) ?? false, inProgress: false },
      links: {
        view: (menuView.links.view || menuView.links.inProgress) ?? false,
        inProgress: !menuView.links.view
      },
      jobs: {
        view: (menuView.jobs.view || menuView.jobs.inProgress) ?? false,
        inProgress: false
      },
      deals: {
        view: (menuView.deals.view || menuView.deals.inProgress) ?? false,
        inProgress: false
      },
      contact: {
        view: (menuView.contact.view || menuView.contact.inProgress) ?? false,
        inProgress: false
      }
    })
  }, [])

  return (
    <>
      <If condition={visible}>
        <ArrowPrevious onClick={() => history.push(prevPage as string)}>
          <BackIcon />
        </ArrowPrevious>
      </If>
      <ContentBox>
        <H2 primaryColor={theme.palette.primary.main}>Meus links</H2>
        <LinksWrapper>
          <For
            of={links as LinkProps[]}
            render={link => (
              <Link
                backgroundColor={link.bgColor}
                title={link.title}
                label={link.label}
                href={link.url}
                key={link.label}
              />
            )}
          />
        </LinksWrapper>
        <If condition={scrollBar && visibleScroll}>
          <ButtonSlide title="Deslize para mais" visible={visible} />
        </If>
      </ContentBox>
      <If condition={visible}>
        <ArrowNext onClick={() => history.push(nextPage as string)}>
          <NextIcon />
        </ArrowNext>
      </If>
    </>
  )
}
