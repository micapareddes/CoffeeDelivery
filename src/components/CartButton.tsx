import { useContext } from 'react'
import styles from './CartButton.module.css'
import { ShoppingCart } from '@phosphor-icons/react'
import { CoffeeContext } from '../contexts/CoffeeContext'

export function CartButton() {
  const { coffeesAddedToCart } = useContext(CoffeeContext)
  const itemsInCart = coffeesAddedToCart.length

  return (
    <div className={styles.cartWrapper}>
      <button>
        <ShoppingCart weight="fill" className={styles.cartIcon} />
      </button>
      {itemsInCart > 0 && (
        <span className={styles.cartCounter}>{itemsInCart}</span>
      )}
    </div>
  )
}
