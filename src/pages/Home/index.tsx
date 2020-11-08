import React from 'react';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Heading from '../../components/heading';
import Parallax from '../../components/parallax';

import './Home.scss';

interface HomePageProps {
  history: {
    push: Function;
  };
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const {
    history: { push },
  } = props;
  return (
    <div className="home">
      <Header />
      <div className="content">
        <div>
          <Heading heading={2}>Find all your favorite Pokemon</Heading>
          <Heading heading={3}>You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button
            // eslint-disable-next-line no-console
            onClick={() => push('/pokedex')}
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
