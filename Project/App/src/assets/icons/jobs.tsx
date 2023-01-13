import React, { FunctionComponent } from 'react'

type JobsIconProps = {
  primaryColor: string
}

export const JobsIcon: FunctionComponent<JobsIconProps> = ({ primaryColor }) => {
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.5" cy="24.5" r="24" stroke={primaryColor} />
      <circle cx="24.5" cy="24.5" r="19.5" fill={primaryColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5588 20.9121V28.0434C32.5588 30.6859 30.905 32.5496 28.2625 32.5496H20.6938C18.0513 32.5496 16.4062 30.6859 16.4062 28.0434V20.9121C16.4062 18.2696 18.06 16.4067 20.6938 16.4067H28.2625C30.905 16.4067 32.5588 18.2696 32.5588 20.9121Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6212 28.3781L19.959 26.9667C20.4412 26.4575 21.2505 26.4548 21.737 26.9597L22.5114 27.7498C23.0338 28.2827 23.9027 28.2442 24.376 27.6676L26.3264 25.2955C26.8864 24.6138 27.9137 24.5718 28.527 25.2045L30.3435 27.0787"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0243 21.9923C23.0243 22.8393 22.3366 23.527 21.4896 23.527C20.6426 23.527 19.9557 22.8393 19.9557 21.9923C19.9557 21.1453 20.6426 20.4575 21.4896 20.4575C22.3366 20.4575 23.0243 21.1453 23.0243 21.9923Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type JobsInProgressIconProps = {
  primaryColor: string
  secondaryColor: string
}

export const JobsInProgressIcon: FunctionComponent<JobsInProgressIconProps> = ({ primaryColor, secondaryColor }) => {
  return (
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25.5" cy="25.5" r="24" stroke={secondaryColor} />
      <path
        d="M49.4997 25.5C49.4997 30.3456 48.1918 34.971 45.4997 39C42.8076 43.029 38.9772 46.1457 34.5004 48C29.5004 49.5 25.7522 49.9453 20.9997 49C16.2472 48.0547 12.5 46 8.99971 43C5.57332 39.5736 2.94514 35.2525 1.99981 30.5C1.05447 25.7475 1.14596 20.9768 3.00031 16.5C4.85466 12.0232 8.47101 8.19209 12.5 5.5C16.529 2.80791 21.6547 1.5 26.5004 1.5"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="25.5" cy="25.5" r="19.5" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.5588 21.9121V29.0434C33.5588 31.6859 31.905 33.5496 29.2625 33.5496H21.6938C19.0513 33.5496 17.4062 31.6859 17.4062 29.0434V21.9121C17.4062 19.2696 19.06 17.4067 21.6938 17.4067H29.2625C31.905 17.4067 33.5588 19.2696 33.5588 21.9121Z"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.6212 29.3781L20.959 27.9667C21.4412 27.4575 22.2505 27.4548 22.737 27.9597L23.5114 28.7498C24.0338 29.2827 24.9027 29.2442 25.376 28.6676L27.3264 26.2955C27.8864 25.6138 28.9137 25.5718 29.527 26.2045L31.3435 28.0787"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.0243 22.9923C24.0243 23.8393 23.3366 24.527 22.4896 24.527C21.6426 24.527 20.9557 23.8393 20.9557 22.9923C20.9557 22.1453 21.6426 21.4575 22.4896 21.4575C23.3366 21.4575 24.0243 22.1453 24.0243 22.9923Z"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type JobsViewIconProps = {
  primaryColor: string
}

export const JobsViewIcon: FunctionComponent<JobsViewIconProps> = ({ primaryColor }) => {
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.5" cy="24.5" r="24" stroke={primaryColor} />
      <circle cx="24.5" cy="24.5" r="19.5" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5588 20.9121V28.0434C32.5588 30.6859 30.905 32.5496 28.2625 32.5496H20.6938C18.0513 32.5496 16.4062 30.6859 16.4062 28.0434V20.9121C16.4062 18.2696 18.06 16.4067 20.6938 16.4067H28.2625C30.905 16.4067 32.5588 18.2696 32.5588 20.9121Z"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6212 28.3781L19.959 26.9667C20.4412 26.4575 21.2505 26.4548 21.737 26.9597L22.5114 27.7498C23.0338 28.2827 23.9027 28.2442 24.376 27.6676L26.3264 25.2955C26.8864 24.6138 27.9137 24.5718 28.527 25.2045L30.3435 27.0787"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0243 21.9923C23.0243 22.8393 22.3366 23.527 21.4896 23.527C20.6426 23.527 19.9557 22.8393 19.9557 21.9923C19.9557 21.1453 20.6426 20.4575 21.4896 20.4575C22.3366 20.4575 23.0243 21.1453 23.0243 21.9923Z"
        stroke={primaryColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
