import {use} from 'react'

import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const CartListView = () => {
  const value = use(CartContext)
  const {cartList} = value

  return (
    <ul className="cart-list">
      {cartList.length === 0 ? (
        <EmptyCartView />
      ) : (
        cartList.map(eachCartItem => (
          <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
        ))
      )}
    </ul>
  )
}

export default CartListView
