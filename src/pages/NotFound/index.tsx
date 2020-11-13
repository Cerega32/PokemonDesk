import React from 'react';
import { navigate } from 'hookrouter';

import teamRocketPng from './assets/teamRocket.png';
import Heading from '../../components/heading';
import Button from '../../components/button';

import s from './NotFound.module.scss';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <img src={teamRocketPng} alt="Not found" />
      <Heading heading={3}>
        The rocket team <span className={s.root__text}>has won this time.</span>
      </Heading>
      <Button color="#F2CB07" onClick={() => navigate('/')}>
        Return
      </Button>
    </div>
  );
};

export default NotFoundPage;
