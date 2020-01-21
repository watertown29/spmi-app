import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from "./pages/Error";
import Content from "./pages/Content";
import Syllabus from "./pages/Syllabus";
import{BrowserRouter,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Switch>      
        <Route exact path="/" component={Home}/>
        <Route exact path="/Content" component={Content}/>
        <Route exact path="/Syllabus" component={Syllabus}/>
        <Route component={Error} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;