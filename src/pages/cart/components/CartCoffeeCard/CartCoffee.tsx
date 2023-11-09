import { useContext } from 'react'
import { QuantitySelectorButton } from '../../../../components/QuantitySelectorButton'

import styles from './CartCoffee.module.css'
import { Trash } from '@phosphor-icons/react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface CoffeeData {
  id: number
  image: string
  name: string
  price: number
  quantity: number
}

export function CartCoffee({ id, image, name, price, quantity }: CoffeeData) {
  const { deleteCoffeeFromCart } = useContext(CoffeeContext)

  function handleDeleteCoffeeFromCart(coffeeId: number) {
    deleteCoffeeFromCart(coffeeId)
  }

  return (
    <div className={styles.cartCoffee}>
      <div className={styles.interactive}>
        <img src={image} alt="Coffee Image" width={64} height={64} />
        <div>
          <h3>{name}</h3>
          <div className={styles.buttons}>
            <QuantitySelectorButton
              quantity={quantity}
              style={{ height: '2rem' }}
            />
            <button
              className={styles.remove}
              onClick={() => handleDeleteCoffeeFromCart(id)}
            >
              <Trash size={16} className={styles.icon} />
              Remover
            </button>
          </div>
        </div>
      </div>
      <p>R${price}</p>
    </div>
  )
}
