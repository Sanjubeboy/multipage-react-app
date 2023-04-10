import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Profile from './components/Portfolio';
import Calculator from './components/Calculator';
import Portfolio from './components/Portfolio';
import Cartoon from './components/Cartoon';


const App = () => {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route exact path="/" element={<Portfolio/>}/>
          <Route exact path="/calculator" element={<Calculator/>}/>
          <Route exact path="/cartoon" element={<Cartoon/>}/>
          
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;