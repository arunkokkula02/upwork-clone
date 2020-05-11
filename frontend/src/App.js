import React from 'react';
import logo from './logo.svg';
import User from './components/User';
import UserContextProvider from './context/UserConext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <User/>
      </UserContextProvider>
     
    </div>
  );
}

export default App;
