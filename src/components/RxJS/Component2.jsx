import React, { useEffect, useState } from 'react'
import { sharingInformationService } from '../../services/sharing-information.service';

const Component2 = () => {
  const [count, setCount] = useState(0);

  let subscription$ = sharingInformationService.getSubject();

  useEffect(() => {
    subscription$.subscribe((data) => { 
      if (data === true) {
        setCount(count + 1);
      } else if (data === false) {
        setCount(count - 1);
      } else if (data === 'saludo') {
        alert('Saludando...')
        return;
      } else {
        console.log('Error')
      }
    });
  })


  return (
    <div>
      { count }
    </div>
  )
}

export default Component2