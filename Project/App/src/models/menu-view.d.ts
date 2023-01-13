// Arquivo criado apenas para resolver cycle-dependecy

export type Options = {
  view: boolean
  inProgress: boolean
}

export type MenuView = {
  about: Options
  metrics: Options
  links: Options
  jobs: Options
  deals: Options
  contact: Options
}
