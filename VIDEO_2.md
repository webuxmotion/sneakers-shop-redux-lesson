# Видео 2. Подготовка redux и использование redux для добавления товара в корзину.

1. В файле src/index.js оборачиваем BrowserRouter в Provider

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
  <Provider> 
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
</React.StrictMode>,
```

Теперь нужно в Provider передать наш store.

Переходим к пункту 2.

2. В папке src создаем папку redux

3. В папке src/redux создаем файл store.js

Вот его содержимое:

```jsx
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
```

4. В папку src/redux создаем файл root-reducer.jsx

Вот его содержимое. Копируем и вставляем.

```jsx
import { combineReducers } from 'redux';

import cartReducer from './cart/cart.reducer';

export default combineReducers({
  cart: cartReducer
});
```

5. В нашей папке redux создаем папку cart

6. В папке src/redux/cart создаем файл cart.reducer.js

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

7. Рядом с ним создаем файл cart.utils.js

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

8. Создаем файл cart.types.js

```js
const CartActionTypes = {
  ADD_ITEM: 'ADD_ITEM',
}

export default CartActionTypes;
```

9. Создаем файл cart.actions.js

```js
import CartActionTypes from './cart.types';

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});
```

10. Подготовка нашего стора окончена. А нет, теперь нужно передать store в Provider

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

11. В файле src/components/product-card/product-card.component.js импортируем функцию connect

`import { connect } from 'react-redux';`

12. Импортируем функцию addItem из cart.actions.js

`import { addItem } from '../../redux/cart/cart.actions';`

13. В конце файла перед экспортом создаем функцию mapDispatchToProps

```js
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})
```

14. Оборачиваем export в connect

Было:

```js
export default ProductCard;
```

Стало:

```js
export default connect(null, mapDispatchToProps)(ProductCard);
```

15. Прокидываем параметр addItem в аргумент функции ProductCard

Было:
```js
const ProductCard = ({ item }) => {
```

Стало:
```js
const ProductCard = ({ item, addItem }) => {
```

16. Добавляем отработчик клика на кнопку `+ Add to cart`

Было:
```html
<Button>+ Add to cart</Button>
```

Стало:
```html
<Button onClick={() => addItem(item)}>+ Add to cart</Button>
```

17. Готово. Надимаем на кнопку и смотрим в консоль. Видим, что в наш store добавляются новые товары.
