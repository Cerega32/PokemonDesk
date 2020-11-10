import React from 'react';

import { useRoutes } from 'hookrouter';
import NotFoundPage from './pages/NotFound';
// import cn from 'classnames';

// import s from './App.module.scss';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match || <NotFoundPage />;
};

export default App;
