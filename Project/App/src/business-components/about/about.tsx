import React, { useEffect, useState } from 'react'
import { Choose, If } from 'react-extras'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { useTheme } from '@mui/material/styles'

import { MenuView } from 'models/menu-view'
import { WhitelabelSelectors } from 'store/whitelabel'

import { NextIcon } from '../../assets'
import { ArrowNext } from '../../theme'
import { Home, Video } from './partials'
import { Container, Shadow, ShadowBottom } from './styles'

interface AboutProps {
  menuView: MenuView
  name?: string
  gender?: string
  visible: boolean
  nextPage?: string
  setMenuView: (value: MenuView) => void
}

export const About = (props: AboutProps) => {
  const { menuView, name, gender, visible, nextPage, setMenuView } = props
  const [showVideo, setShowVideo] = useState(false)
  const history = useHistory()
  const { palette } = useTheme()
  const whitelabelScreenAbout = useSelector(WhitelabelSelectors.whitelabelScreenAbout)

  const shadowGradient = {
    first: palette.gradient[900],
    last: palette.gradient[800]
  }

  useEffect(() => {
    setShowVideo(false)
  }, [])

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
      <Shadow gradient={shadowGradient} mobile={visible} />
      <Container mobile={visible}>
        <Choose>
          <Choose.When condition={showVideo}>
            <Video
              src={whitelabelScreenAbout?.vids?.[0] || ''}
              nextPage={() => history.push(nextPage as string)}
              prevPage={() => setShowVideo(false)}
            />
          </Choose.When>
          <Choose.Otherwise>
            <Home
              imgSrc={whitelabelScreenAbout?.data?.image || ''}
              name={name}
              gender={gender}
              onClick={() => setShowVideo(true)}
            />
          </Choose.Otherwise>
        </Choose>
      </Container>
      <If condition={visible}>
        <ArrowNext onClick={() => history.push(nextPage as string)}>
          <NextIcon />
        </ArrowNext>
      </If>

      <ShadowBottom gradient={shadowGradient} mobile={visible} />
    </>
  )
}
