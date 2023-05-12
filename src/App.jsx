import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//  Components
import NavbarComponent from './components/navbar';
import Home from  './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <NavbarComponent/>
      <Home/>
    </>
  )
}

export default App
