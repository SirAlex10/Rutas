import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./App.css";
import "./assets/necolas.github.io_normalize.css_8.0.1_normalize.css"
import 'react-toastify/dist/ReactToastify.css'; 

//Layouts
import { AuthLayout } from './Layouts/AuthLayouts'

//Pages Auth 
import { Login } from './pages/Login'
import { Error404 } from './pages/Error404'
import {Register} from './pages/Register'
//import Pages
import { Home } from './pages/Home';
function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path='/Register' element={<Register/>}/>
        </Route>
          <Route path='/home' element={<Home />} />
        <Route path='*' element={<Error404 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
