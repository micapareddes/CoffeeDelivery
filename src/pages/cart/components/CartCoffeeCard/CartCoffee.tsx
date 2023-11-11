import { useContext, useState } from 'react'
import { QuantitySelectorButton } from '../../../../components/QuantitySelectorButton'

import styles from './CartCoffee.module.css'
import { Trash } from '@phosphor-icons/react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface CartCoffeeData {
  id: number
  image: string
  name: string
  price: number
  quantity: number
}

export function CartCoffee({
  id,
  image,
  name,
  price,
  quantity,
}: CartCoffeeData) {
  const { deleteCoffeeFromCart, alterCartCoffeeQuantity, formatPrice } =
    useContext(CoffeeContext)

  function handleDeleteCoffeeFromCart() {
    deleteCoffeeFromCart(id)
  }

  const [cartCoffeeQuantity, setCartCoffeeQuantity] = useState(quantity)

  function onSetCartCoffeeQuantity(num: number) {
    setCartCoffeeQuantity(num)
    alterCartCoffeeQuantity(id, num)
  }

  return (
    <div className={styles.cartCoffee}>
      <div className={styles.interactive}>
        <img src={image} alt="Coffee Image" width={64} height={64} />
        <div>
          <h3>{name}</h3>
          <div className={styles.buttons}>
            <QuantitySelectorButton
              quantity={cartCoffeeQuantity}
              onSetQuantity={onSetCartCoffeeQuantity}
              style={{ height: '2rem' }}
            />
            <button
              className={styles.remove}
              onClick={handleDeleteCoffeeFromCart}
            >
              <Trash size={16} className={styles.icon} />
              Remover
            </button>
          </div>
        </div>
      </div>
      <p>R${formatPrice(price)}</p>
    </div>
  )
}
