import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/Main'
import Header from './components/header/Header';
import Footer from './components/footer/Footer'


import './style/css/reset.css'
import './style/css/base.css'
import './style/css/dark-theme.css'
import './style/css/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
  </React.StrictMode>
);

