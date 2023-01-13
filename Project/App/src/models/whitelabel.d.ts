export type WhitelabelResources = {
  theme: 'green' | 'yellow' | 'pink' | 'orange'
  backgroundDesktop: string
  screens: Screens
}

type Screens = Array<{
  id: string
  label: string
  menuActive: boolean
  nextPage: string
  prevPage?: string
  data: {
    name?: string
    gender?: string
    image?: string
    main?: Array<{
      label: string
      value: string | number
    }>
    details?: Details
    links?: Links
    jobs?: Jobs
    deals?: Deals
  }
  vids?: string[]
}>

type Details = Array<{
  label: string
  type: string
  desc: string
  values: Array<{
    x: string
    y: string
  }>
}>

type Links = Array<{
  title: string
  label: string
  url: string
  bgColor: string
}>

type Jobs = Array<{
  name: string
  description: string
  image: string
  result: {
    likes?: number
    comments?: number
  }
}>

type Deals = Array<{
  name: string
  title: string
  desc: string
  image: string
  kind: string
  value: string
  link: string
}>
