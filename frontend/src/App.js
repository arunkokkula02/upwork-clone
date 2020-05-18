import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import User from './components/createuser/User';
import UserContextProvider from './context/UserConext';
import UserRegister from './components/createuser/UserRegister';
import Navbar from './components/Layout/Navbar';
import Home from './components/Layout/Home';
import UserLogin from './components/createuser/UserLogin';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
    <Navbar/>
    <UserContextProvider>
       <User/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={UserRegister} />
        <Route path="/login" component={UserLogin} />
        <Redirect to="/login" />
        </Switch>
      
      </UserContextProvider>
   
      </BrowserRouter>

    </div>
    
		
   
  );
}

export default App;
