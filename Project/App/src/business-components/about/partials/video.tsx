import React, { FunctionComponent } from 'react'

import Box from '@material-ui/core/Box'

type Props = {
  src: string
  nextPage: () => void
  prevPage: () => void
}

export const Video: FunctionComponent<Props> = ({ src, nextPage, prevPage }) => {
  return (
    <>
      <video
        loop
        autoPlay
        style={{
          borderRadius: '10px',
          position: 'absolute',
          zIndex: 100,
          height: '100%',
          width: '100%',
          backgroundColor: '#000'
        }}
        src={src}
      >
        <track default kind="captions" srcLang="pt-BR" />
        Your browser does not support the video tag.
      </video>
      <Box position="absolute" zIndex={100} height="100%" width="30%" left={0} top={0} onClick={prevPage} />
      <Box position="absolute" zIndex={100} height="100%" width="70%" right={0} top={0} onClick={nextPage} />
    </>
  )
}
