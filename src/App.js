
import './App.css';
import Header  from './components/Header'
import Tasks  from './components/Tasks';
import { useState } from 'react'
import Todo from './components/Todo';
import {BrowserRouter as Router   , Route , Routes as Switch} from 'react-router-dom';

import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/Home/Home';
function App() {

  

  return (

    <Home />
    // <Router>
    //   <Switch>
    //     <Route exact path='/' element={<Login  />}/>
    //     <Route exact path='/register' element={<Register  />}/>

    //   </Switch>

    //   </Router>


  );
}

export default App;
