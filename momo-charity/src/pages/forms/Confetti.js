import React from 'react'
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti';

const ConfettiComponent = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
    numberOfPieces={300}
    gravity={0.05}
      width={width}
      height={height*1.6}
    />
  )
}

export default ConfettiComponent;