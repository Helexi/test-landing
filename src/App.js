import React, { useState } from 'react';
import './reset-css.css'
import './App.css';
import { Header } from './components/Header/Header';
import { UlListBurger } from './components/Header/UlListBurger/UlListBurger';

function App() {
  const [show, setShow] = useState(false);

  const showBugreg = (event) => {
    event.preventDefault()
    setShow(true);

  }
  const close = () => {
    setShow(false)
  }

  return (
    <>
      <Header showBugreg={showBugreg}/>
      {show ? <UlListBurger show={show} close={close}/> : null}</>
  );
}

export default App;
