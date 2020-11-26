import React, { useState } from 'react';
import Footer from '../../components/footer';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';

import s from './Pokedex.module.scss';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    // eslint-disable-next-line no-shadow
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div>
      <div className={s.pokedex}>
        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>
        {!isLoading &&
          data.pokemons.map((pokemon) => (
            <PokemonCard
              name={pokemon.name_clean}
              attack={pokemon.stats.attack}
              defense={pokemon.stats.defense}
              types={pokemon.types}
              img={pokemon.img}
              key={pokemon.name_clean}
            />
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default PokedexPage;
