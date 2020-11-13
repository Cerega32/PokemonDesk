import { navigate } from 'hookrouter';
import React from 'react';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Heading from '../../components/heading';
import Parallax from '../../components/parallax';
import { LinkEnum } from '../../routes';

import s from './Home.module.scss';

// interface HomePageProps {
//   history: {
//     push: Function;
//   };
// }

const HomePage: React.FC = () => {
  // const {
  //   history: { push },
  // } = props;
  return (
    <div className={s.root}>
      <div className={s.content}>
        <div>
          <Heading heading={2}>Find all your favorite Pokemon</Heading>
          <Heading heading={3}>You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button
            // eslint-disable-next-line no-console
            onClick={() => navigate(LinkEnum.POKEDEX)}
            color="#73D677"
            height={66}
            widthAll={false}
            sizeFont="23px">
            See pokemons
          </Button>
        </div>
        <div>
          <Parallax />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
