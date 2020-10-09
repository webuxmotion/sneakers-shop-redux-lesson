# Видео 3. Чтение данных из стора. Счетчик товаров и вывод товаров в корзине, удаление товара из корзины

## 1. Счетчик товаров

В файле src/components/cart-button/**cart-button.component.js** делаем шаги:

1.1 Импортируем функцию connect
```js
import { connect } from 'react-redux';
```

1.2 Создаем функцию mapStateToProps внизу файла (перед экспортом)
```js
const mapStateToProps = state => ({
  itemsCount: state.cart.cartItems.reduce((acc, item) => acc += item.quantity, 0)
});
```

1.3 Оборачиваем CartButton в функцию connect в экспорте, передаем в connect mapStateToProps
```js
export default connect(mapStateToProps)(CartButton);
```

1.4 Добавляем itemsCount в список принимаемых параметров функции CartButton
```js
const CartButton = ({ onClick, theme, itemsCount }) => {
```

1.5 Выводим количество товаров в кнопке корзины
```js
<span className="cart-button__counter">{itemsCount}</span>
```

## 2. Вывод товаров в корзине

В файле src/components/cart/**cart.component.js** делаем шаги:

2.1 Импортируем функцию connect
```js
import { connect } from 'react-redux';
```

2.2 Создаем функцию mapStateToProps внизу файла (перед экспортом)
```js
const mapStateToProps = ({ cart: { cartItems }}) => ({
  items: cartItems,
  total: cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
});
```

2.3 Оборачиваем Cart в функцию connect в экспорте, передаем в connect mapStateToProps
```js
export default withRouter(
  connect(mapStateToProps)(Cart)
);
```

2.4 Добавляем items и total в список принимаемых параметров функции Cart
```js
const Cart = ({ open, setIsOpenCart, history, items, total }) => {
```

2.5 Выводим items и total в нужных компонентах
```js
<div className='cart__list'>
  {
    items.map(item => <CartItem key={item.id} item={item} />)
  }
</div>

...

<span className="cart__total-value">${total}.00</span>
```

2.6 Удаляем ненужный импорт

```js
import CART_ITEMS, { total } from '../../data/cart-items.data';
```

## 3. Удаление товаров из корзины

В файле src/components/cart-item/**cart-item.component.js** делаем шаги:

3.1 Импортируем функцию connect
```js
import { connect } from 'react-redux';
```

3.2 Создаем функцию mapDispatchToProps внизу файла (перед экспортом)
```js
const mapDispatchToProps = dispatch => ({
  removeItem: id => dispatch(removeItemById(id))
});
```

3.3 Оборачиваем CartItem в функцию connect в экспорте, передаем в connect первым аргументом *null*, а вторым аргументом mapDispatchToProps
```js
export default connect(null, mapDispatchToProps)(CartItem);
```

3.4 Импортируем removeItemById из файла cart.actions.js
```js
import { removeItemById } from '../../redux/cart/cart.actions';
```

3.5 Добавляем removeItem в список принимаемых параметров функции CartItem
```js
const CartItem = ({ item, counter, removeItem }) => {
```

3.6 Добавляем обработчик события для кнопки DeleteIcon
```js
<DeleteIcon className="cart-item__delete-icon" onClick={() => removeItem(item.id)} />
```

Теперь работаем с файлом src/redux/cart/**cart.actions.js**:

3.7 Добавляем action removeItemById
```js
export const removeItemById = id => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: id
});
```

Теперь работаем с файлом src/redux/cart/**cart.types.js**:

3.8 Добавляем свойство REMOVE_ITEM
```js
const CartActionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
}
```

## Готово!

Мы молодцы:) Попрактиковались с чтением данных из стора, выводом данных и удалением данных из стора.
