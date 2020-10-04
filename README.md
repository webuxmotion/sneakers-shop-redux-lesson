Этот проект был сделан при помощи [Create React App](https://github.com/facebook/create-react-app).

# Sneakers Shop Redux Lesson - Пошаговое руководство по использованию REDUX в проекте на ReactJS

1. Устанавливаем node_modules

### `yarn`

2. Устанавливем redux и две другие зависимости

### `yarn add redux react-redux redux-logger`

3. Запускаем проект в браузере

### `yarn start`

4. В файле src/index.js оборачиваем BrowserRouter в Provider

Для этого нужно импортировать Provider

`import { Provider } from 'react-redux';`

Затем обернуть с помощью него BrowserRouter.

Было:

```html
<React.StrictMode>
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
</React.StrictMode>,
```
```html
<React.StrictMode>
  <Provider> // <- наш провайдер
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider> // <- а здесь он закрывается))
</React.StrictMode>,
```

Теперь нужно в Provider передать наш store.

Переходим к пункту 5.

5. В папке src создаем папку redux

6. В папке src/redux создаем файл store.js

Вот его содержимое:

```jsx
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
```

7. В папку src/redux создаем файл root-reducer.jsx

Вот его содержимое. Копируем и вставляем.

```jsx
import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducer';

export default combineReducers({
  cart: cartReducer
});
```

8. В нашей папке redux создаем папки cart

9. В папке src/redux/cart создаем файл cart.reducer.js

```jsx
import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }

    default:
      return state;
  }
}

export default cartReducer;
```

10. Рядом с ним создаем файл cart.utils.js

```js
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}
```

11. Создаем файл cart.types.js

```js
const CartActionTypes = {
  ADD_ITEM: 'ADD_ITEM',
}

export default CartActionTypes;
```

12. Создаем файл cart.actions.js

```js
import CartActionTypes from './cart.types';

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
```

13. Подготовка нашего стора окончена. А нет, теперь нужно передать store в Provider

Открываем файл src/index.js

Импортируем store

`import store from './redux/store';`

И передаем его как параметр в Provider

Было:
```js
<Provider>
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
</Provider>
```

Стало:
```
<Provider store={store}>
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
</Provider>
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
