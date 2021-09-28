import React from 'react';
import './App.css';
import Home  from './components/Home';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/all" component={AllUsers} />
     <Route exact path="/add" component={AddUser} />
     </Switch>
     </BrowserRouter>
    </>
  );
}

export default App;
