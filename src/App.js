import React from 'react';

import { Header } from './components/Header/Header';
import { Main } from './containers/Main/Main';
import { Footer } from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Footer/>
      </Main>
    </div>
  );
}

export default App;
