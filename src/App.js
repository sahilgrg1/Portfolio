import React from 'react'
import Header from './components/Header.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import './App.css'

function App() {
  return (<>
    <div>
      <Router>
      <Header/>
      <About/>
      <Skills/>
      <Contact/>

      </Router>
    </div>
 </> );
}

export default App
