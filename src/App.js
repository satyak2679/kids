import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import './App.css'
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Login from './Login';
import {Navigation} from './Contact';
import React from "react";
class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
        <ul>
        <li> <Link to='/'>Home</Link></li> 
          <li><Link to='/gallery'>Gallery</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/login'>Page</Link></li>
         
        </ul>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/contact' element={<Navigation/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
export default App