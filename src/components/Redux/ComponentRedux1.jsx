import React from 'react'
import { useSelector } from 'react-redux';


const ComponentRedux1 = () => {
  const userState = useSelector(store => store.user);

  return (
    <div>
      El state del user es: {JSON.stringify(userState)}
    </div>
  )
}

export default ComponentRedux1