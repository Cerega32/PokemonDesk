import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer';
import PokemonCard from '../../components/PokemonCard';

import s from './Pokedex.module.scss';

const UsePokemons = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=100');
        const result = await response.json();

        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const { data, isLoading, isError } = UsePokemons();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something wrong!</div>;
  }

  return (
    <div>
      <div className={s.pokedex}>
        {data.pokemons.map((pokemon) => (
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
