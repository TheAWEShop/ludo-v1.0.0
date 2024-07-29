import Header from '@/components/Header/Header'
import LudoBoard from '@/components/LudoBoard'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='flex flex-col items-center
    justify-center w-screen h-screen'>
        hello world!
        <Header/>

        <LudoBoard/>
    </main>
  )
}

export default page