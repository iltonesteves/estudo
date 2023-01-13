import React, { FunctionComponent } from 'react'

type CheckIconProps = {
  backgroundColor: string
}

export const CheckIcon: FunctionComponent<CheckIconProps> = ({ backgroundColor }) => {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1825 0L4.45473 6.83323L1.79519 4.12496L0.644531 5.29168L4.45473 9.16667L12.3331 1.16672L11.1825 0ZM7.88852 7.5786L9.45473 9.16667L17.3331 1.16672L16.1825 0L9.45473 6.83323L9.03834 6.41104L7.88852 7.5786Z"
        fill={backgroundColor}
      />
    </svg>
  )
}
