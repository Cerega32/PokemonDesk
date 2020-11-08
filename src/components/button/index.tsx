import React from 'react';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  widthAll: boolean;
  color: string;
  height: number;
  sizeFont: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  widthAll = false,
  color = '#73D677',
  height = '66',
  sizeFont = 'small',
}) => {
  const buttonStyle = {
    width: widthAll ? '100%' : 'auto',
    background: color,
    height: `${height}px`,
    fontSize: sizeFont,
  };

  return (
    <button type="button" className={s.root} onClick={onClick} style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
