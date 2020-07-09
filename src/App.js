import React from 'react';
import './App.css';
import Headers from './Component/Header/index';
import Content from './Component/Content/index';
import Footer from './Component/Footer/footer';

function App() {
  return (
   <div id="wrapper">
     <Headers />
     <Content />
     <Footer />
   </div>
  );
}

export default App;
