import React, { useEffect } from 'react'
import { For, If } from 'react-extras'
import { useHistory } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'

import { MenuView } from 'models/menu-view'

import { BackIcon, NextIcon } from '../../assets'
import { ButtonSlide, Ticket } from '../../components'
import { ArrowNext, ArrowPrevious, ContentAlign, H2 } from '../../theme'
import { ContentBox, Grid } from './styles'

interface DealProps {
  name: string
  title: string
  desc: string
  image: string
  kind: string
  value: string
  link: string
}

interface DealsProps {
  menuView: MenuView
  visible: boolean
  deals?: DealProps[]
  nextPage?: string
  prevPage?: string
  setMenuView: (value: MenuView) => void
  scrollBar: boolean
  visibleScroll: boolean
}

export const Deals = (props: DealsProps) => {
  const { menuView, visible, deals, nextPage, prevPage, setMenuView, scrollBar, visibleScroll } = props

  const { palette } = useTheme()
  const history = useHistory()

  useEffect(() => {
    setMenuView({
      about: { view: true, inProgress: false },
      metrics: { view: (menuView.metrics.view || menuView.metrics.inProgress) ?? false, inProgress: false },
      links: {
        view: (menuView.links.view || menuView.links.inProgress) ?? false,
        inProgress: false
      },
      jobs: {
        view: (menuView.jobs.view || menuView.jobs.inProgress) ?? false,
        inProgress: false
      },
      deals: {
        view: (menuView.deals.view || menuView.deals.inProgress) ?? false,
        inProgress: !menuView.deals.view
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
        <H2 primaryColor={palette.primary.main} style={{ margin: '10px 0px 20px 20px' }}>
          Mimos para vc
        </H2>
        <ContentAlign display="table" margin="0 auto">
          <Grid>
            <For
              of={deals as DealProps[]}
              render={deal => (
                <Ticket
                  value={deal.value}
                  desc={deal.desc}
                  title={deal.title}
                  image={deal.image}
                  link={deal.link}
                  key={deal.name}
                />
              )}
            />
          </Grid>
          <If condition={scrollBar && visibleScroll}>
            <ButtonSlide title="Deslize para mais" visible={visible} />
          </If>
        </ContentAlign>
      </ContentBox>
      <If condition={visible}>
        <ArrowNext onClick={() => history.push(nextPage as string)}>
          <NextIcon />
        </ArrowNext>
      </If>
    </>
  )
}
