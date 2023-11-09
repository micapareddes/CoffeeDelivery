import { QuantitySelectorButton } from '../../../../components/QuantitySelectorButton'
import styles from './CoffeeCard.module.css'
import { CoffeeLabel } from '../CofeeLabel/CoffeeLabel'
import { ShoppingCart } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'

interface CoffeeProps {
  id: number
  image: string
  labels: string[]
  name: string
  description: string
  price: number
}

export function CoffeeCard({
  id,
  image,
  labels,
  name,
  description,
  price,
}: CoffeeProps) {
  const { addCoffeeToCart } = useContext(CoffeeContext)

  const [quantity, setQuantity] = useState(1)

  function sumQuantity() {
    setQuantity(quantity + 1)
  }
  function subtractQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleAddCoffeeToCart() {
    addCoffeeToCart({
      id,
      name,
      image,
      price,
      quantity,
    })
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
              onSumQuantity={sumQuantity}
              onSubtractQuantity={subtractQuantity}
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