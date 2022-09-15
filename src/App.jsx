import { useState } from 'react'
import { Provider } from 'react-redux';

import './App.css'
import ComponentRedux1 from './components/Redux/ComponentRedux1';
import Component1 from './components/RxJS/Component1'
import Component2 from './components/RxJS/Component2'
import Genterman from './pages/Genterman/Genterman'
import { store } from './redux/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Provider store={store}>
        <h2>Redux</h2>
        <ComponentRedux1/>
        <h2>Context</h2>
        <Genterman/>
        <h2>RxJS</h2>
        <Component1/>
        <Component2/>
      </Provider>
    </div>
  )
}

export default App
