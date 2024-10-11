import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ className = '', children }) => {
  return (
    <div className={`max-w-screen-xl mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
