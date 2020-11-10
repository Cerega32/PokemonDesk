import React from 'react';

import { Link } from 'react-router-dom';

import './style.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Link to="/">
          <PokemonLogoSvg />
        </Link>
        <nav className="header__links">
          {MENU.map(({ id, value, link }) => (
            <Link to={link} key={id} className="header__link">
              {value}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
