import React from 'react';

import TypographyComponent from './components/TypographyComponent';

const App: React.FC = () => {
  return (
    <>
      <TypographyComponent variant='h1'>Hello1</TypographyComponent>
      <TypographyComponent variant='h2'>Hello2</TypographyComponent>
      <TypographyComponent variant='h3'>Hello2</TypographyComponent>
      <TypographyComponent variant='h4'>Hello2</TypographyComponent>
      <TypographyComponent variant='h5'>Hello2</TypographyComponent>
      <TypographyComponent variant='h6'>Hello2</TypographyComponent>
      <TypographyComponent variant='subtitle1'>Hello2</TypographyComponent>
      <TypographyComponent variant='subtitle2'>Hello2</TypographyComponent>
      <TypographyComponent variant='body1'>Hello2</TypographyComponent>
      <TypographyComponent variant='body2'>Hello2</TypographyComponent>
    </>
  );
};

export default App;
