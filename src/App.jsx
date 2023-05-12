import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//  Components
import NavbarComponent from './components/navbar';
import Home from  './components/Home';
import DataComponent from './components/DataComponent';

function App() {

  return (
    <>  
      <NavbarComponent/>
      <Home/>
      <DataComponent />
    </>
  )
}

export default App
