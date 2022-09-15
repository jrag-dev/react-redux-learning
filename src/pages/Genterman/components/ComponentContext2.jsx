import React from 'react'
import { useGentermanContext } from '../context/Geterman.context'

const ComponentContext2 = () => {
  const { gentermanContextValue } = useGentermanContext()
  return (
    <div>
      ComponentContext2
      <br/>
      { gentermanContextValue}
    </div>
  )
}

export default ComponentContext2