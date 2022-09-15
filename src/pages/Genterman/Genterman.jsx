import React from 'react'
import ComponentContext1 from './components/ComponentContext1'
import ComponentContext2 from './components/ComponentContext2'
import ComponentRedux2 from './components/ComponentRedux2'
import { GentermanProvider } from './context/Geterman.context'

const Genterman = () => {
  return (
    <GentermanProvider>
      <ComponentContext1/>
      <ComponentContext2/> 
      <ComponentRedux2/>
    </GentermanProvider>
  )
}

export default Genterman;