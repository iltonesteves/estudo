import React, { useEffect } from 'react'
import { If } from 'react-extras'
import { useHistory } from 'react-router-dom'

import { useTheme } from '@mui/material/styles'

import { MenuView } from 'models/menu-view'

import { BackIcon, RefreshIcon } from '../../assets'
import { ButtonLarge, Field } from '../../components'
import { ArrowNext, ArrowPrevious, H2, theme } from '../../theme'
import { ButtonsWrapper, ContactWrapper, ContentBox, Text, ContainerContactInfo } from './styles'

interface ContactProps {
  menuView: MenuView
  visible: boolean
  setMenuView: (value: MenuView) => void
}

export const Contact = (props: ContactProps) => {
  const { menuView, visible, setMenuView } = props
  const history = useHistory()
  const { palette } = useTheme()

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
        inProgress: !menuView.contact.view
      }
    })
  }, [])

  return (
    <>
      <If condition={visible}>
        <ArrowPrevious onClick={() => history.push('/deals')}>
          <BackIcon />
        </ArrowPrevious>
      </If>
      <ContentBox>
        <H2 primaryColor={palette.primary.main} style={{ margin: '10px 0px 20px 20px' }}>
          Contato
        </H2>
        <Text primaryColor={palette.primary.main}>
          Somos uma empresa de tecnologia voltada para o marketing de influência
        </Text>
        <ContainerContactInfo>
          <ContactWrapper background={palette.gradient[100]}>
            <Field title="Telefone" href="tel:+5521999999999" subtitle="(55) 9 9999-9999" />
            <Field title="E-mail" href="mailto:atendimento@post2b.com" subtitle="atendimento@post2b.com" />
          </ContactWrapper>
          <ButtonsWrapper background={palette.gradient[200]} primaryColor={palette.primary.main}>
            <ButtonLarge title="Fale conosco" onClick={() => false} active />
            <ButtonLarge title="Baixe o nosso app" onClick={() => false} />
          </ButtonsWrapper>
        </ContainerContactInfo>
      </ContentBox>
      <If condition={visible}>
        <ArrowNext onClick={() => history.push('/')}>
          <RefreshIcon />
        </ArrowNext>
      </If>
    </>
  )
}
