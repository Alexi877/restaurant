import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

class App extends Component {

render() {

  return (
    <div className = "main container-fluid">
    <Navbar />
     <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About} />
      <Route path ="/contact" component={Contact} />
     </Switch>
    </div>
  );

  }

}

export default App;
