import React, { useEffect, useState } from 'react'
import { For, If } from 'react-extras'
import { useHistory } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'

import { MenuView } from 'models/menu-view'

import { BackIcon, NextIcon } from '../../assets'
import { Button, ButtonSlide } from '../../components'
import { ArrowNext, ArrowPrevious, BodyNormal, Content, ContentAlign, H2, H5 } from '../../theme'
import { Buttons, Pages, Text } from './styles'

interface JobProps {
  name: string
  description: string
  image: string
  result?: {
    likes?: number
    comments?: number
  }
}

interface JobsProps {
  menuView: MenuView
  visible: boolean
  jobs?: JobProps[]
  nextPage?: string
  prevPage?: string
  setMenuView: (value: MenuView) => void
  scrollBar: boolean
  visibleScroll: boolean
}

export const Jobs = (props: JobsProps) => {
  const { menuView, visible, jobs, nextPage, prevPage, setMenuView, scrollBar, visibleScroll } = props

  const { palette } = useTheme()
  const history = useHistory()

  const [active, setActive] = useState(jobs && `${jobs[0].name}`)

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
        inProgress: !menuView.jobs.view
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
      <Content style={{ position: 'relative', minHeight: '555px' }}>
        <H2 primaryColor={palette.primary.main} style={{ margin: '10px 20px' }}>
          Jobs que fiz
        </H2>

        <Buttons gridTemplateColumns={jobs?.length as number} style={{ position: 'relative' }}>
          <For
            of={jobs as JobProps[]}
            render={job => (
              <>
                <Button
                  key={job.name}
                  title={`${job.name}`}
                  onClick={() => setActive(job.name)}
                  active={active === job.name}
                />
              </>
            )}
          />
        </Buttons>
        <ContentAlign style={{ position: 'absolute', maxWidth: '354px', width: '100%' }}>
          <For
            of={jobs as JobProps[]}
            render={job => {
              return active === job.name ? (
                <Pages key={job.description}>
                  <img src={job.image} alt="Izabele" width="100%" />
                  <Text>
                    <H5 primaryColor={palette.primary.main}>Sobre este projeto</H5>
                    <BodyNormal primaryColor={palette.primary.main}>{job.description}</BodyNormal>
                  </Text>
                </Pages>
              ) : (
                ''
              )
            }}
          />
          <If condition={scrollBar && visibleScroll}>
            <ButtonSlide title="Deslize para mais" visible={visible} />
          </If>
        </ContentAlign>
      </Content>
      <If condition={visible}>
        <ArrowNext onClick={() => history.push(nextPage as string)}>
          <NextIcon />
        </ArrowNext>
      </If>
    </>
  )
}
