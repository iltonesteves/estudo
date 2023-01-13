import type { RootState } from 'models/store'

export const whitelabelResources = (state: RootState) => state.whitelabel.data
export const whitelabelTheme = (state: RootState) => state.whitelabel.data?.theme
export const whitelabelBackgroundDesktop = (state: RootState) => state.whitelabel.data?.backgroundDesktop

export const whitelabelScreenAbout = (state: RootState) =>
  state.whitelabel.data?.screens.find(screen => screen.id === 'cover')
export const whitelabelScreenMetrics = (state: RootState) =>
  state.whitelabel.data?.screens.find(screen => screen.id === 'metrics')
export const whitelabelScreenLinks = (state: RootState) =>
  state.whitelabel.data?.screens.find(screen => screen.id === 'links')
export const whitelabelScreenJobs = (state: RootState) =>
  state.whitelabel.data?.screens.find(screen => screen.id === 'jobs')
export const whitelabelScreenDeals = (state: RootState) =>
  state.whitelabel.data?.screens.find(screen => screen.id === 'deals')
export const whitelabelScreenContact = (state: RootState) =>
  state.whitelabel.data?.screens.find(screen => screen.id === 'contact')
