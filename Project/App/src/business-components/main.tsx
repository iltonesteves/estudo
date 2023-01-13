import React, { useEffect, useState } from 'react'
import { For, If } from 'react-extras'
import { useSelector } from 'react-redux'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'

import { WhitelabelSelectors } from 'store/whitelabel'
import styled from 'styled-components'

import { NotFound } from '.'
import {
  AboutInProgressIcon,
  AboutViewIcon,
  ContactIcon,
  ContactInProgressIcon,
  ContactViewIcon,
  GiftsIcon,
  GiftsInProgressIcon,
  GiftsViewIcon,
  JobsIcon,
  JobsInProgressIcon,
  JobsViewIcon,
  LinksIcon,
  MetricsIcon,
  MetricsInProgressIcon,
  MetricsViewIcon,
  ShareIcon
} from '../assets'
import { LinksInProgressIcon, LinksViewIcon } from '../assets/icons/links'
import { ButtonTransparent, Menu, Share } from '../components'
import MainLayout from '../layouts/Main'
import { Container } from '../theme'
import { About } from './about'
import { Contact } from './contact'
import { Deals } from './deals'
import { Jobs } from './jobs'
import { Links } from './links'
import { Metrics } from './metrics'

const Grid = styled.div`
  display: flex;
  gap: 19px;
  margin: 0px 0px;
  padding: 20px;
  overflow-x: scroll;
  z-index: 10;
  min-height: 60px;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const ButtonsWrapper = styled.div`
  display: grid;
  gap: 18px;
  grid-template-columns: 66px 180px;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding-top: 40px;
  position: absolute;
  right: 0;
  top: 0;
`

interface Options {
  view: boolean
  inProgress: boolean
}

export interface MenuView {
  about: Options
  metrics: Options
  links: Options
  jobs: Options
  deals: Options
  contact: Options
}

export const Main = () => {
  const history = useHistory()
  const { innerWidth: width } = window
  const visible = width > 505

  const location = useLocation()
  const theme = useTheme()
  const { palette } = theme

  const [menuView, setMenuView] = useState<MenuView>({
    about: { view: false, inProgress: true },
    metrics: { view: false, inProgress: false },
    links: { view: false, inProgress: false },
    jobs: { view: false, inProgress: false },
    deals: { view: false, inProgress: false },
    contact: { view: false, inProgress: false }
  })
  const [visibleShare, setVisibleShare] = useState(false)
  const whitelabelResources = useSelector(WhitelabelSelectors.whitelabelResources)!

  const dictionaryIcons = {
    about: {
      view: <AboutViewIcon primaryColor={palette.primary.main} />,
      inProgress: <AboutInProgressIcon primaryColor={palette.primary.main} secondaryColor={palette.secondary.main} />,
      default: null
    },
    metrics: {
      view: <MetricsViewIcon primaryColor={palette.primary.main} />,
      inProgress: <MetricsInProgressIcon primaryColor={palette.primary.main} secondaryColor={palette.secondary.main} />,
      default: <MetricsIcon primaryColor={palette.primary.main} />
    },
    links: {
      view: <LinksViewIcon primaryColor={palette.primary.main} />,
      inProgress: <LinksInProgressIcon primaryColor={palette.primary.main} secondaryColor={palette.secondary.main} />,
      default: <LinksIcon primaryColor={palette.primary.main} />
    },
    jobs: {
      view: <JobsViewIcon primaryColor={palette.primary.main} />,
      inProgress: <JobsInProgressIcon primaryColor={palette.primary.main} secondaryColor={palette.secondary.main} />,
      default: <JobsIcon primaryColor={palette.primary.main} />
    },
    deals: {
      view: <GiftsViewIcon primaryColor={palette.primary.main} />,
      inProgress: <GiftsInProgressIcon primaryColor={palette.primary.main} secondaryColor={palette.secondary.main} />,
      default: <GiftsIcon primaryColor={palette.primary.main} />
    },
    contact: {
      view: <ContactViewIcon primaryColor={palette.primary.main} />,
      inProgress: <ContactInProgressIcon primaryColor={palette.primary.main} secondaryColor={palette.secondary.main} />,
      default: <ContactIcon primaryColor={palette.primary.main} />
    }
  }

  const returnIcon = (conditionals: Options, label: keyof MenuView) => {
    const conditional = Object.keys(conditionals).filter(key => conditionals[key as keyof Options]) as Array<
      keyof Options
    >

    const key: 'view' | 'inProgress' | 'default' = conditional.length ? conditional[0] : 'default'

    return dictionaryIcons[label][key]
  }

  const pageDictionary = whitelabelResources.screens.reduce((acc: any, curr) => {
    const screenName: keyof MenuView = curr.id === 'cover' ? 'about' : (curr.id as keyof MenuView)

    return {
      ...acc,
      [screenName]: {
        icon: returnIcon(menuView[screenName], screenName),
        ...curr
      }
    }
  }, {})

  const { about } = pageDictionary
  const { metrics } = pageDictionary
  const { links } = pageDictionary
  const { jobs } = pageDictionary
  const { deals } = pageDictionary

  const onPressKey = (event: KeyboardEvent) => {
    const currentLocation = location.pathname.replace('/', '') || 'about'

    if (event.key === 'ArrowRight') {
      const { nextPage } = pageDictionary[currentLocation]
      history.push(nextPage)
      return
    }

    if (event.key === 'ArrowLeft') {
      const { prevPage } = pageDictionary[currentLocation]
      history.push(prevPage)
    }
  }

  const [hasScroll, setScroll] = useState(false)
  const [visibleScroll, setVisibleScroll] = useState(true)
  const [st, setSt] = React.useState(new Date().toString())

  useEffect(() => {
    document.addEventListener('keydown', onPressKey)
    const contentHeight = document.getElementById('content')?.clientHeight
    const bodyHeight = document.getElementById('contentBody')?.clientHeight
    const date = new Date().toString()

    return () => {
      document.removeEventListener('keydown', onPressKey)
      if (contentHeight && bodyHeight) {
        setScroll(contentHeight > bodyHeight)
        if (st !== date) {
          setSt(new Date().toString())
          setVisibleScroll(true)
        }
      }
    }
  })

  function hideScroll() {
    const bodyHeight = document.getElementById('contentBody')
    if (bodyHeight && bodyHeight.scrollTop > 0) {
      setVisibleScroll(false)
    }
  }

  return (
    <MainLayout>
      <If condition={visible}>
        <ButtonsWrapper>
          <ButtonTransparent title={<ShareIcon />} onClick={() => setVisibleShare(true)} />
          <ButtonTransparent title="Entre em contato" onClick={() => history.push('/contact')} />
        </ButtonsWrapper>
        <If condition={visibleShare}>
          <Share link="sadasd" setVisible={() => setVisibleShare(false)} />
        </If>
      </If>
      <Container background={theme.palette.background.default} mobile={!visible} id="body">
        <Grid>
          <For
            of={Object.keys(pageDictionary)}
            render={screenName => {
              const { id, icon, label, menuActive } = pageDictionary[screenName]
              return (
                <Menu
                  icon={icon}
                  title={label}
                  active={menuActive}
                  key={label}
                  onClick={() => {
                    if (location.pathname === '/' && id === 'cover') {
                      return window.location.reload()
                    }

                    if (id === 'cover') {
                      return history.push('/')
                    }
                    return history.push(`/${id}`)
                  }}
                />
              )
            }}
          />
        </Grid>
        <div id="contentBody" style={{ overflow: 'scroll' }} onScroll={hideScroll}>
          <div id="content">
            <Switch>
              <Route
                path="/metrics"
                render={() => (
                  <Metrics
                    menuView={menuView}
                    setMenuView={setMenuView}
                    visible={visible}
                    main={metrics?.data.main}
                    details={metrics?.data.details}
                    nextPage={metrics?.nextPage}
                    prevPage={metrics?.prevPage}
                    scrollBar={hasScroll}
                    visibleScroll={visibleScroll}
                  />
                )}
                exact
              />
              <Route
                path="/links"
                render={() => (
                  <Links
                    menuView={menuView}
                    visible={visible}
                    links={links?.data.links}
                    setMenuView={setMenuView}
                    nextPage={links?.nextPage}
                    prevPage={links?.prevPage}
                    scrollBar={hasScroll}
                    visibleScroll={visibleScroll}
                  />
                )}
                exact
              />
              <Route
                path="/jobs"
                render={() => (
                  <Jobs
                    menuView={menuView}
                    visible={visible}
                    setMenuView={setMenuView}
                    jobs={jobs?.data.jobs}
                    nextPage={jobs?.nextPage}
                    prevPage={jobs?.prevPage}
                    scrollBar={hasScroll}
                    visibleScroll={visibleScroll}
                  />
                )}
                exact
              />
              <Route
                path="/deals"
                render={() => (
                  <Deals
                    menuView={menuView}
                    visible={visible}
                    setMenuView={setMenuView}
                    deals={deals?.data.deals}
                    nextPage={deals?.nextPage}
                    prevPage={deals?.prevPage}
                    scrollBar={hasScroll}
                    visibleScroll={visibleScroll}
                  />
                )}
                exact
              />
              <Route
                path="/contact"
                render={() => <Contact menuView={menuView} visible={visible} setMenuView={setMenuView} />}
                exact
              />

              <Route
                path="/"
                render={() => (
                  <About
                    menuView={menuView}
                    name={about?.data.name}
                    gender={about?.data.gender}
                    visible={visible}
                    nextPage={about?.nextPage}
                    setMenuView={setMenuView}
                  />
                )}
                exact
              />
              <Route path="*">
                <NotFound visible={visible} />
              </Route>
            </Switch>
          </div>
        </div>
      </Container>
    </MainLayout>
  )
}
