import React from 'react'
import { sharingInformationService } from '../../services/sharing-information.service';

const Component1 = () => {
  const handleClick = () => {
    sharingInformationService.setSubject(true);
  }

  const handleClickNo = () => {
    sharingInformationService.setSubject(false);
  }

  const handleClickSaludar = () => {
    sharingInformationService.setSubject('saludo');
  }

  return (
    <div>
      <button onClick={handleClick}>Enviar Información</button>
      <button onClick={handleClickNo}>No Enviar Información</button>
      <button onClick={handleClickSaludar}>Saludo</button>
    </div>
  )
}

export default Component1