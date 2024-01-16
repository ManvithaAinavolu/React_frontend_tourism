import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Insert from './Insert/Insert.js';
// import Conn from './Connection';
import Login from './Login/Login.js';
import Register from './Register/Register.js';
import Home from './Home/Home.js';
import Tours from './Tours/Tours.js';
import Plan from './Plan/Plan.js';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/reg" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/Tours" element={<Tours/>}/>
          <Route path="/plan" element={<Plan/>}/>

         </Routes>
      </Router>
    </>
  );
}

export default App;
