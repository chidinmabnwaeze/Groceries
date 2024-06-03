import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Content from './components/content'
import Practice from './components/Practice'
import AddItems from './components/AddItems'

function App() {


  return (
    <>
    <AddItems
    newSubmit ={newSubmit}
    setNewSubmit ={setNewSubmit}
    handleSubmit ={handleSubmit}
    />
<Practice/>
  <Content/>
    
    </>
  )
}

export default App
