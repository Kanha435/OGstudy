import React from 'react';
import ReactDOM from 'react-dom';
import Content from './component/content';
import Footer from './component/footer';
import Header from './component/header';
import "./index.css";
ReactDOM.render(
  <>
    <Header />
    <Content />
    <Footer />
    </>,
  document.getElementById('root')
);

