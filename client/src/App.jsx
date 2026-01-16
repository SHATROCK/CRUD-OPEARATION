import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Updateuser from './components/Updateuser'
import Createuser from './components/Createuser'
import Users from './components/Users'

const App = () => {
  return (
   <>

   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Users />}></Route>
    <Route path='/create' element={<Createuser/>}></Route>
    <Route path='/update/:id' element={<Updateuser/>}></Route>



   </Routes>
   
   
   </BrowserRouter>

   
  
   
   
   
   </>
  )
}

export default App
