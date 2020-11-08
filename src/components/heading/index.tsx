import React from 'react';

interface HeadingProps {
  heading: number;
}

const Heading: React.FC<HeadingProps> = ({ children, heading }) => {
  const head = `h${heading}`;

  return React.createElement(head, null, children);
};

export default Heading;
