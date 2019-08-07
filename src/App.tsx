import React from 'react';

import TypographyComponent from './components/TypographyComponent';

const App: React.FC = () => {
  return (
    <>
      <TypographyComponent theme={{ color: '#777' }} variant='h1'>
        Hello1
      </TypographyComponent>
      <TypographyComponent theme={{ fontWeight: 900 }} variant='h2'>
        Hello2
      </TypographyComponent>
      <TypographyComponent theme={{ letterSpacing: 2 }} variant='h3'>
        Hello2
      </TypographyComponent>
      <TypographyComponent theme={{ lineHeight: 2 }} variant='h4'>
        Hello2
      </TypographyComponent>
      <TypographyComponent theme={{ fontSize: 4 }} variant='h5'>
        Hello2
      </TypographyComponent>
      <TypographyComponent variant='h6'>Hello2</TypographyComponent>
      <TypographyComponent variant='subtitle1'>Hello2</TypographyComponent>
      <TypographyComponent variant='subtitle2'>Hello2</TypographyComponent>
      <TypographyComponent theme={{ display: 'inline-block' }} variant='body1'>
        Hello2
      </TypographyComponent>
      <TypographyComponent theme={{ display: 'inline-block' }} variant='body2'>
        Hello2
      </TypographyComponent>
    </>
  );
};

export default App;
