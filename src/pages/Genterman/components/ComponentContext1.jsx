import React from 'react'
import { useGentermanContext } from '../context/Geterman.context'

const ComponentContext1 = () => {
  const { setGentermanContextValue } = useGentermanContext()

  const handleClick = () => {
    setGentermanContextValue('Aprendiendo react context!!')
  }
  return (
    <div>
      <button onClick={handleClick}>Enviar información por un context</button>
    </div>
  )
}

export default ComponentContext1