import React, { useState } from 'react';
import Footer from '../../components/footer';
import PokemonCard from '../../components/PokemonCard';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IPokemons, PokemonsRequest } from '../../interface/pokemons';

import s from './Pokedex.module.scss';

interface IQuery {
  name?: string;
}

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debuncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>('getPokemons', query, [debuncedValue]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    // eslint-disable-next-line no-shadow
    setQuery((state: IQuery) => ({
      ...state,
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
          data &&
          data.pokemons.map((pokemon: PokemonsRequest) => (
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
