import React, { useEffect } from 'react'
import { For, If } from 'react-extras'
import { useHistory } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'

import { MenuView } from 'models/menu-view'

import { BackIcon, NextIcon } from '../../assets'
import { ButtonSlide, Card, Charts } from '../../components'
import { ArrowNext, ArrowPrevious, Content, H2 } from '../../theme'
import { Block, Cards, SubtitleText } from './styles'

interface ValuesProps {
  x: string
  y: string
}

interface DetailsProps {
  label: string
  desc: string
  type: string
  values: ValuesProps[]
}

interface MainProps {
  label: string
  value: number | string
}

interface MetricsProps {
  menuView: MenuView
  visible: boolean
  main?: MainProps[]
  details?: DetailsProps[]
  nextPage?: string
  prevPage?: string
  setMenuView: (value: MenuView) => void
  scrollBar: boolean
  visibleScroll: boolean
}

export const Metrics = (props: MetricsProps) => {
  const { menuView, visible, main, details, nextPage, prevPage, setMenuView, scrollBar, visibleScroll } = props

  const { palette } = useTheme()
  const history = useHistory()

  useEffect(() => {
    setMenuView({
      about: { view: true, inProgress: false },
      metrics: {
        view: (menuView.metrics.view || menuView.metrics.inProgress) ?? false,
        inProgress: !menuView.metrics.view
      },
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
      <Content>
        <H2 primaryColor={palette.primary.main}>Métricas</H2>
        <Block margin="0">
          <Cards gridTemplateColumns={2} padding="0 20px 0 0">
            <For of={main as MainProps[]} render={x => <Card title={x.value} subtitle={x.label} key={x.label} />} />
          </Cards>
        </Block>
        <Block margin="20px">
          <For
            of={details as DetailsProps[]}
            render={detail => (
              <Charts
                title={detail.label}
                subtitle={detail.desc}
                data={detail.values}
                key={detail.label}
                typeChart="circle"
              />
            )}
          />
        </Block>
        <Block margin="20px">
          <For
            of={details as DetailsProps[]}
            render={detail => (
              <Charts
                title={detail.label}
                subtitle={detail.desc}
                data={detail.values}
                key={detail.label}
                typeChart="line"
              />
            )}
          />
        </Block>
        <If condition={scrollBar && visibleScroll}>
          <ButtonSlide title="Deslize para mais" visible={visible} />
        </If>
      </Content>
      <If condition={visible}>
        <ArrowNext onClick={() => history.push(nextPage as string)}>
          <NextIcon />
        </ArrowNext>
      </If>
    </>
  )
}
