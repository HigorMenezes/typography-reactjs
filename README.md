# Typography-reactjs

Crate typography with reactjs, typescript, and styled-component.

## Steps

### Create the app;

```bash
yarn create react-app typography-reactjs --typescript 
```

### Delete useless files, imposts and comments;

Your folder structure should look like this:

```
--node_modules
--public
	--index.html
--src
	--App.tsx
	--index.css
	--index.tsx
--.gitignore
--package.json
--README.md
--tsconfig.json
--yarn.lock
```

### Setup index.css to reset style

We will use the Roboto Font to build this project

```css
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #777;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  box-sizing: border-box;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

```

### Component Typography

Create folder src/components/TypographyComponent. inside that folder we need to create 3 files:

- index.tsx: component
- styles.ts: component's styles
- types.d.ts: component's types

The folder look like:

```
...
--src
	--components
		--TypographyComponent
			--index.tsx
			--styles.ts
			--types.d.ts
	...
...
```

### Start code

To start code, we need to create our style first, the lib styled-component return to us a react component and we just to return this component in index.tsx.

To use styled component we need to import the lib in our project.

```bash
yarn add styled-components @types/styled-components
```



**styles.ts**:

For now, we well styled our component a little, we just use it like a h1 HTML tag.

```ts
import styled from 'styled-components';

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 3.2rem;
`;

```

**index.tsx**:

```tsx
import React from 'react';

import { H1 } from './styles';

const TypographyComponent: React.FC = () => <H1 />;

export default TypographyComponent;
```

**App.tsx**

Now, in App.tsx we need import our component and used it.

```tsx
import React from 'react';

import TypographyComponent from './components/TypographyComponent';

const App: React.FC = () => {
  return <TypographyComponent />;
};

export default App;
```

If we run this project we will see a title "Hello World" in our page. For now we need to create a dynamic text with dynamic props and more... For that, we need to create types and styles.





## Quote

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
