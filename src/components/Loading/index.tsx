import React from 'react'

import Loading from 'assets/loading.gif';

import { Background } from './styles'
import Image from 'next/image';

export function LoadingComponent() {
  return (
    <Background>
      <Image src={Loading} width={200} height={200} alt="Loading..." />
    </Background>
  )
}
