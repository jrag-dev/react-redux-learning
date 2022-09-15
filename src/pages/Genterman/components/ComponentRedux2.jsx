import React from 'react'
import { useDispatch } from 'react-redux';
import { createUser, modifyUser, resetUser } from '../../../redux/states/user';


const ComponentRedux2 = () => {
  const dispactcher = useDispatch();
  
  const handleClick = () => {
    dispactcher(createUser({ name: 'Jose', email: 'jose@gmail.com' }));
  }

  const handleClickModify = () => {
    dispactcher(modifyUser({ name: 'Jose Alvarado'}))
  }

  const handleClickReset = () => {
    dispactcher(resetUser())
  }

  return (
    <div>
      <button onClick={handleClick} >Enviar información Redux, createUser</button>
      <button onClick={handleClickModify} >Enviar información Redux, modifyUser</button>
      <button onClick={handleClickReset} >Enviar información Redux, resetUser</button>
    </div>
  )
}

export default ComponentRedux2