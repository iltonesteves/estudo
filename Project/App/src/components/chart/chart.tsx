import React, { Fragment } from 'react'

import { useTheme } from '@mui/material/styles'
import {
  ChartAxis,
  ChartDonut,
  ChartGroup,
  ChartLabel,
  ChartLine,
  Chart,
  ChartVoronoiContainer,
  ChartScatter
} from '@patternfly/react-charts'

import { BodyTiny, H5 } from '../../theme'
import { ChartWrapper } from './styles'

interface DataProps {
  x: string
  y: string
}

interface ChartProps {
  title: string
  subtitle: string
  data: DataProps[]
  typeChart: string
}

export const Charts = (props: ChartProps) => {
  const { title, subtitle, data, typeChart } = props
  const { palette } = useTheme()

  const dataList = data.map(dt => ({ name: title, x: dt.x, y: dt.y }))

  const colors = [palette.secondary.main, palette.primary.main, palette.gradient[200]]

  return (
    <>
      {typeChart === 'circle' && (
        <>
          <ChartWrapper secondaryColor={palette.secondary.main}>
            <H5 primaryColor={palette.primary.main}>{title}</H5>
            <BodyTiny primaryColor={palette.primary.main}>{subtitle}</BodyTiny>
            <div style={{ height: '220px', width: '95%' }}>
              <ChartDonut
                ariaDesc={`${subtitle}`}
                constrainToVisibleArea
                colorScale={colors}
                data={dataList}
                labels={({ datum }) => `${datum.x}: ${datum.y}%`}
                legendData={dataList.map((item, index) => {
                  return { name: `${item.x} (${item.y}%)`, symbol: { fill: `${colors[index]}` } }
                })}
                legendOrientation="vertical"
                legendPosition="right"
                padding={{
                  bottom: 20,
                  left: 20,
                  right: 170,
                  top: 20
                }}
                titleComponent={
                  <ChartLabel
                    style={[
                      { fill: palette.primary.main, fontSize: 30, fontWeight: 'bold' },
                      { fill: palette.primary.main, fontSize: 22 }
                    ]}
                  />
                }
                sortOrder="descending"
                subTitle={`${dataList[0].x}`}
                title={`${dataList[0].y}%`}
                width={350}
              />
            </div>
          </ChartWrapper>
        </>
      )}
      {typeChart === 'line' && (
        <>
          <ChartWrapper secondaryColor={palette.secondary.main}>
            <H5 primaryColor={palette.primary.main}>{title}</H5>
            <BodyTiny primaryColor={palette.primary.main}>{subtitle}</BodyTiny>
            <Chart
              containerComponent={<ChartVoronoiContainer labels={({ datum }) => `${datum.name}: ${datum.y}`} />}
              legendOrientation="vertical"
              legendPosition="right"
              height={300}
              width={500}
              maxDomain={{ y: 10 }}
              minDomain={{ y: 0 }}
              name="evolucao seguidores"
              themeVariant=""
            >
              <ChartAxis tickValues={[2, 3, 4]} />
              <ChartAxis dependentAxis showGrid tickValues={[2, 5, 8]} />
              <ChartGroup>
                <ChartScatter data={dataList} />
              </ChartGroup>
              <ChartGroup>
                <ChartLine
                  data={dataList}
                  style={{
                    data: {
                      stroke: '#93EE92',
                      height: '20px',
                      strokeWidth: '6'
                    }
                  }}
                />
              </ChartGroup>
            </Chart>
          </ChartWrapper>
        </>
      )}
    </>
  )
}
