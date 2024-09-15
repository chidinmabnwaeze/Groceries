import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/content'
import Practice from './components/Practice'
import Facebook from './components/facebook'
import LocalStorage from './components/localStorage'


function App() {


  return (
    <>
<Practice/>
  <Content/>
    <Facebook/>
    <LocalStorage/>
    </>
  )
}

export default App
