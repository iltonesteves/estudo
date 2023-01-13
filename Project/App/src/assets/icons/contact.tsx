import React, { FunctionComponent } from 'react'

type ContactIconProps = {
  primaryColor: string
}

export const ContactIcon: FunctionComponent<ContactIconProps> = ({ primaryColor }) => {
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.5" cy="24.5" r="24" stroke={primaryColor} />
      <circle cx="24.5" cy="24.5" r="19.5" fill={primaryColor} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0625 21.3404C17.0625 20.2274 17.9725 19.3209 19.0899 19.3209H29.9101C31.0231 19.3209 31.9287 20.2274 31.9287 21.3404V24.0152C30.4911 24.9086 28.8339 25.5342 27.0891 25.8414C26.6096 24.8727 25.6121 24.2375 24.4912 24.2375C23.38 24.2375 22.3781 24.8701 21.8846 25.8335C20.1504 25.5281 18.4992 24.9051 17.0625 24.0152V21.3404ZM23.366 17.0625H25.6252C26.2132 17.0625 26.7059 17.4659 26.852 18.0084H22.1384C22.2854 17.4659 22.7771 17.0625 23.366 17.0625ZM22.211 27.2134C22.5435 27.2598 22.8471 27.055 22.9346 26.7365C23.1297 26.026 23.7554 25.55 24.4912 25.55C25.2192 25.55 25.851 26.0365 26.0278 26.733C26.103 27.027 26.3672 27.2283 26.6639 27.2283C26.6936 27.2283 26.7242 27.2265 26.754 27.2221C29.0019 26.9106 31.143 26.1153 32.9472 24.9218C33.131 24.7993 33.2412 24.5945 33.2412 24.374V21.3404C33.2412 19.5029 31.7467 18.0084 29.9101 18.0084H28.1802C28.0166 16.7388 26.9395 15.75 25.6252 15.75H23.366C22.0518 15.75 20.9755 16.7379 20.811 18.0084H19.0899C17.248 18.0084 15.75 19.5029 15.75 21.3404V24.374C15.75 24.5945 15.8603 24.8001 16.0449 24.9218C17.8465 26.11 19.9789 26.9019 22.211 27.2134ZM23.8395 27.4611V28.5933C23.8395 28.9556 24.1335 29.2496 24.4957 29.2496C24.858 29.2496 25.152 28.9556 25.152 28.5933V27.4611C25.152 27.0988 24.858 26.8048 24.4957 26.8048C24.1335 26.8048 23.8395 27.0988 23.8395 27.4611ZM31.945 27.4898C31.9713 27.1538 32.2452 26.886 32.589 26.886C32.9504 26.886 33.2435 27.1792 33.2435 27.5405C33.2435 27.5461 33.2331 27.6809 33.2176 27.8809C33.1798 28.3686 33.112 29.2443 33.0922 29.5819C33.0423 30.4027 32.7238 31.24 32.2399 31.8228C31.5662 32.6348 30.7078 33.0145 29.5405 33.0172C28.9989 33.018 26.7607 33.0189 24.5215 33.0189C22.2833 33.0189 20.0441 33.018 19.5034 33.0172C18.3353 33.0145 17.4769 32.6348 16.8031 31.8219C16.3201 31.24 16.0008 30.4027 15.9518 29.5819C15.9316 29.2493 15.8653 28.3939 15.8271 27.9024C15.8107 27.6906 15.7995 27.5463 15.7995 27.5405C15.7995 27.1792 16.0926 26.886 16.454 26.886C16.7979 26.886 17.0718 27.1538 17.098 27.4898C17.098 27.4898 17.2328 29.0202 17.2616 29.5032C17.294 30.0378 17.511 30.6197 17.8138 30.9837C18.2425 31.5008 18.7168 31.7029 19.5052 31.7047C20.5867 31.7064 28.4555 31.7064 29.5379 31.7047C30.3272 31.7029 30.8014 31.5008 31.2293 30.9845C31.5329 30.6197 31.7499 30.0378 31.7823 29.5032C31.8103 29.0202 31.945 27.4898 31.945 27.4898Z"
        fill="white"
      />
    </svg>
  )
}

type ContactViewIconProps = {
  primaryColor: string
}

export const ContactViewIcon: FunctionComponent<ContactViewIconProps> = ({ primaryColor }) => {
  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24.5" cy="24.5" r="24" stroke={primaryColor} />
      <circle cx="24.5" cy="24.5" r="19.5" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0625 21.3404C17.0625 20.2274 17.9725 19.3209 19.0899 19.3209H29.9101C31.0231 19.3209 31.9287 20.2274 31.9287 21.3404V24.0152C30.4911 24.9086 28.8339 25.5342 27.0891 25.8414C26.6096 24.8727 25.6121 24.2375 24.4912 24.2375C23.38 24.2375 22.3781 24.8701 21.8846 25.8335C20.1504 25.5281 18.4992 24.9051 17.0625 24.0152V21.3404ZM23.366 17.0625H25.6252C26.2132 17.0625 26.7059 17.4659 26.852 18.0084H22.1384C22.2854 17.4659 22.7771 17.0625 23.366 17.0625ZM22.211 27.2134C22.5435 27.2598 22.8471 27.055 22.9346 26.7365C23.1297 26.026 23.7554 25.55 24.4912 25.55C25.2192 25.55 25.851 26.0365 26.0278 26.733C26.103 27.027 26.3672 27.2283 26.6639 27.2283C26.6936 27.2283 26.7242 27.2265 26.754 27.2221C29.0019 26.9106 31.143 26.1153 32.9472 24.9218C33.131 24.7993 33.2412 24.5945 33.2412 24.374V21.3404C33.2412 19.5029 31.7467 18.0084 29.9101 18.0084H28.1802C28.0166 16.7388 26.9395 15.75 25.6252 15.75H23.366C22.0518 15.75 20.9755 16.7379 20.811 18.0084H19.0899C17.248 18.0084 15.75 19.5029 15.75 21.3404V24.374C15.75 24.5945 15.8603 24.8001 16.0449 24.9218C17.8465 26.11 19.9789 26.9019 22.211 27.2134ZM23.8395 27.4611V28.5933C23.8395 28.9556 24.1335 29.2496 24.4957 29.2496C24.858 29.2496 25.152 28.9556 25.152 28.5933V27.4611C25.152 27.0988 24.858 26.8048 24.4957 26.8048C24.1335 26.8048 23.8395 27.0988 23.8395 27.4611ZM31.945 27.4898C31.9713 27.1538 32.2452 26.886 32.589 26.886C32.9504 26.886 33.2435 27.1792 33.2435 27.5405C33.2435 27.5461 33.2331 27.6809 33.2176 27.8809C33.1798 28.3686 33.112 29.2443 33.0922 29.5819C33.0423 30.4027 32.7238 31.24 32.2399 31.8228C31.5662 32.6348 30.7078 33.0145 29.5405 33.0172C28.9989 33.018 26.7607 33.0189 24.5215 33.0189C22.2833 33.0189 20.0441 33.018 19.5034 33.0172C18.3353 33.0145 17.4769 32.6348 16.8031 31.8219C16.3201 31.24 16.0008 30.4027 15.9518 29.5819C15.9316 29.2493 15.8653 28.3939 15.8271 27.9024C15.8107 27.6906 15.7995 27.5463 15.7995 27.5405C15.7995 27.1792 16.0926 26.886 16.454 26.886C16.7979 26.886 17.0718 27.1538 17.098 27.4898C17.098 27.4898 17.2328 29.0202 17.2616 29.5032C17.294 30.0378 17.511 30.6197 17.8138 30.9837C18.2425 31.5008 18.7168 31.7029 19.5052 31.7047C20.5867 31.7064 28.4555 31.7064 29.5379 31.7047C30.3272 31.7029 30.8014 31.5008 31.2293 30.9845C31.5329 30.6197 31.7499 30.0378 31.7823 29.5032C31.8103 29.0202 31.945 27.4898 31.945 27.4898Z"
        fill={primaryColor}
      />
    </svg>
  )
}

type ContactInProgressIconProps = {
  primaryColor: string
  secondaryColor: string
}

export const ContactInProgressIcon: FunctionComponent<ContactInProgressIconProps> = ({
  primaryColor,
  secondaryColor
}) => {
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
        d="M18.0625 22.3404C18.0625 21.2274 18.9725 20.3209 20.0899 20.3209H30.9101C32.0231 20.3209 32.9287 21.2274 32.9287 22.3404V25.0152C31.4911 25.9086 29.8339 26.5342 28.0891 26.8414C27.6096 25.8727 26.6121 25.2375 25.4912 25.2375C24.38 25.2375 23.3781 25.8701 22.8846 26.8335C21.1504 26.5281 19.4992 25.9051 18.0625 25.0152V22.3404ZM24.366 18.0625H26.6252C27.2132 18.0625 27.7059 18.4659 27.852 19.0084H23.1384C23.2854 18.4659 23.7771 18.0625 24.366 18.0625ZM23.211 28.2134C23.5435 28.2598 23.8471 28.055 23.9346 27.7365C24.1297 27.026 24.7554 26.55 25.4912 26.55C26.2192 26.55 26.851 27.0365 27.0278 27.733C27.103 28.027 27.3672 28.2283 27.6639 28.2283C27.6936 28.2283 27.7242 28.2265 27.754 28.2221C30.0019 27.9106 32.143 27.1153 33.9472 25.9218C34.131 25.7993 34.2412 25.5945 34.2412 25.374V22.3404C34.2412 20.5029 32.7467 19.0084 30.9101 19.0084H29.1802C29.0166 17.7388 27.9395 16.75 26.6252 16.75H24.366C23.0518 16.75 21.9755 17.7379 21.811 19.0084H20.0899C18.248 19.0084 16.75 20.5029 16.75 22.3404V25.374C16.75 25.5945 16.8603 25.8001 17.0449 25.9218C18.8465 27.11 20.9789 27.9019 23.211 28.2134ZM24.8395 28.4611V29.5933C24.8395 29.9556 25.1335 30.2496 25.4957 30.2496C25.858 30.2496 26.152 29.9556 26.152 29.5933V28.4611C26.152 28.0988 25.858 27.8048 25.4957 27.8048C25.1335 27.8048 24.8395 28.0988 24.8395 28.4611ZM32.945 28.4898C32.9713 28.1538 33.2452 27.886 33.589 27.886C33.9504 27.886 34.2435 28.1792 34.2435 28.5405C34.2435 28.5461 34.2331 28.6809 34.2176 28.8809C34.1798 29.3686 34.112 30.2443 34.0922 30.5819C34.0423 31.4027 33.7238 32.24 33.2399 32.8228C32.5662 33.6348 31.7078 34.0145 30.5405 34.0172C29.9989 34.018 27.7607 34.0189 25.5215 34.0189C23.2833 34.0189 21.0441 34.018 20.5034 34.0172C19.3353 34.0145 18.4769 33.6348 17.8031 32.8219C17.3201 32.24 17.0008 31.4027 16.9518 30.5819C16.9316 30.2493 16.8653 29.3939 16.8271 28.9024C16.8107 28.6906 16.7995 28.5463 16.7995 28.5405C16.7995 28.1792 17.0926 27.886 17.454 27.886C17.7979 27.886 18.0718 28.1538 18.098 28.4898C18.098 28.4898 18.2328 30.0202 18.2616 30.5032C18.294 31.0378 18.511 31.6197 18.8138 31.9837C19.2425 32.5008 19.7168 32.7029 20.5052 32.7047C21.5867 32.7064 29.4555 32.7064 30.5379 32.7047C31.3272 32.7029 31.8014 32.5008 32.2293 31.9845C32.5329 31.6197 32.7499 31.0378 32.7823 30.5032C32.8103 30.0202 32.945 28.4898 32.945 28.4898Z"
        fill={primaryColor}
      />
    </svg>
  )
}
