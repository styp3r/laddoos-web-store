import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import ErrorPage from './components/ErrorPage.js';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <div className = "header"></div>
    <div className = "navbar">
      <Link to = "/">Home</Link>
      <Link to = "about">About</Link>
      <Link to = "contact">Contact</Link>
    </div>
      <Routes>
        <Route path = "/" index element = {<Home />}/>
        <Route path = "about" element = {<About />}/>
        <Route path = "contact" element = {<Contact />}/>
        <Route path = "*" element = {<ErrorPage />}/> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
