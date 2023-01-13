import React, { FunctionComponent } from 'react'

type ArrowProps = {
  primaryColor: string
}

export const Arrow: FunctionComponent<ArrowProps> = ({ primaryColor }) => (
  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.75 7.72607L0.75 7.72607"
      stroke={primaryColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.7002 1.70149L15.7502 7.72549L9.7002 13.7505"
      stroke={primaryColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
