import React from 'react';

import { useRoutes } from 'hookrouter';
import NotFoundPage from './pages/NotFound';
import Header from './components/header';

// import cn from 'classnames';

// import s from './App.module.scss';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
