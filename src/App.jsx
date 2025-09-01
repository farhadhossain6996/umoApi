import { useState } from 'react';

import './App.css';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop'; 
import { Routes, Route } from 'react-router-dom';
import RootLayout from './Components/LayOuts/RootLayout';
import Error from './Components/Error';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route index element={<Home/>} />
          <Route path='shop' element={<Shop/>} />
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;