
import './App.css'
import Facebook from './components/facebook'
import Login from "./components/login"
import { BrowserRouter, Routes ,Route} from 'react-router-dom'


function App() {
 

  return (
<>
    <BrowserRouter>
<Routes>
  <Route path='/login' index element ={<Login/>}>

  </Route>
  </Routes>
    </BrowserRouter>
    </> 
  )
}

export default App
