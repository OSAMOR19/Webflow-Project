import React from 'react';
import MyNav from './Components/Nav';
import Home from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <MyNav/>
      <Home/>
      <Services/>
      <Portfolio/>
    </React.Fragment>
  );
}

export default App;
