import { QuantitySelectorButton } from '../../../../components/QuantitySelectorButton'
import styles from './CoffeeCard.module.css'
import { CoffeeLabel } from '../CofeeLabel/CoffeeLabel'
import { ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface CoffeeProps {
  id: number
  image: string
  labels: string[]
  name: string
  description: string
  price: number
  quantity: number
}

export function CoffeeCard({
  id,
  image,
  labels,
  name,
  description,
  price,
  quantity,
}: CoffeeProps) {
  const { addCoffeeToCart, sumQuantity, subtractQuantity, onAddCoffeToCart } =
    useContext(CoffeeContext)

  function handleSumQuantity() {
    sumQuantity(id)
  }

  function handleSubtractQuantity() {
    subtractQuantity(id)
  }

  function handleAddCoffeeToCart() {
    addCoffeeToCart(id)
    onAddCoffeToCart()
  }

  return (
    <>
      <div className={styles.itemOfCoffee}>
        <header>
          <img src={image} alt="coffee" />
          <div className={styles.labels}>
            {labels.map((label) => {
              return <CoffeeLabel key={label} labelName={label} />
            })}
          </div>
          <h3>{name}</h3>
          <p>{description}</p>
        </header>
        <footer>
          <p className={styles.price}>
            <span>R$</span>
            {price}
          </p>
          <div className={styles.action}>
            <QuantitySelectorButton
              quantity={quantity}
              onSumQuantity={handleSumQuantity}
              onSubtractQuantity={handleSubtractQuantity}
            />
            <button className={styles.cart} onClick={handleAddCoffeeToCart}>
              <ShoppingCart weight="fill" className={styles.icon} />
            </button>
          </div>
        </footer>
      </div>
    </>
  )
}
