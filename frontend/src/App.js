import React from 'react'
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App