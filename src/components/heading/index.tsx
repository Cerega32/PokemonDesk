import React from 'react';

interface HeadingProps {
  heading: number;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ children, heading, className }) => {
  const head = `h${heading}`;

  return React.createElement(head, { className }, children);
};

export default Heading;
