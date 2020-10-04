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
```html
<Provider>
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
</Provider>
```

Стало:
```html
<Provider store={store}>
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
</Provider>
```

14. В файле src/components/product-card/product-card.component.js импортируем функцию connect

`import { connect } from 'react-redux';`

15. В конце файла перед экспортом создаем функцию mapDispatchToProps

```js
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})
```

16. Оборачиваем export в connect

Было:

```js
export default ProductCard;
```

Стало:

```js
export default connect(null, mapDispatchToProps)(ProductCard);
```

17. Прокидываем параметр addItem в аргумент функции ProductCard

Было:
```js
const ProductCard = ({ item }) => {
```

Стало:
```js
const ProductCard = ({ item, addItem }) => {
```

18. Добавляем отработчик клика на кнопку `+ Add to cart`

Было:
```html
<Button>+ Add to cart</Button>
```

Стало:
```html
<Button onClick={() => addItem(item)}>+ Add to cart</Button>
```

19. Готово. Надимаем на кнопку и смотрим в консоль. Видим, что в наш store добавляются новые товары.

