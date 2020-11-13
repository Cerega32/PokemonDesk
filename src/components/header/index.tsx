import React from 'react';

import cn from 'classnames';

import { A, usePath } from 'hookrouter';

import './style.scss';

import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

import { GENERAL_MENU } from '../../routes';

const Header = () => {
  const path = usePath();
  return (
    <header className="header">
      <div className="header__wrapper">
        <A href="/">
          <PokemonLogoSvg />
        </A>
        <nav className="header__links">
          {GENERAL_MENU.map(({ title, link }) => (
            <A
              href={link}
              key={title}
              className={cn('header__link', {
                ['header__link--active']: link === path,
              })}>
              {title}
            </A>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
