import React from 'react';

import TypographyComponent from './components/TypographyComponent';

const App: React.FC = () => {
  return (
    <>
      <TypographyComponent className='margin' variant='h1'>
        h1. Heading
      </TypographyComponent>
      <TypographyComponent className='margin' variant='h2'>
        h2. Heading
      </TypographyComponent>
      <TypographyComponent className='margin' variant='h3'>
        h3. Heading
      </TypographyComponent>
      <TypographyComponent className='margin' variant='h4'>
        h4. Heading
      </TypographyComponent>
      <TypographyComponent className='margin' variant='h5'>
        h5. Heading
      </TypographyComponent>
      <TypographyComponent className='margin' variant='h6'>
        h6. Heading
      </TypographyComponent>
      <TypographyComponent className='margin' variant='subtitle1'>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </TypographyComponent>
      <TypographyComponent className='margin' variant='subtitle2'>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </TypographyComponent>
      <TypographyComponent className='margin' variant='body1'>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </TypographyComponent>
      <TypographyComponent className='margin' variant='body2'>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </TypographyComponent>
    </>
  );
};

export default App;
