import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Home from './pages/Home';
import View from './pages/View';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Auth from './pages/Auth';
import { useState } from 'react';

function App() {

  const [ogd,setogd] = useState([]);

  return (
    <div className="App">
      
       <BrowserRouter>
       <Header />
      <Routes>
        <Route path="/" element={<Home  />} />
          <Route path="create" element={<Create originald = {ogd} setogd = {setogd}/>}/>
          <Route path="view" element={<View originald = {ogd} setogd = {setogd} />} />
          <Route path="edit" element={<Edit originald = {ogd} setogd = {setogd} />} />
          <Route path = "authorize" element = {<Auth originald = {ogd} />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
