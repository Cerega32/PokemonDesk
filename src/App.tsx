import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <>
      <Header />
      <div className={cn(s.header, 'color')}>YES, This is App Component!</div>
      <Footer />
    </>
  );
};

export default App;
