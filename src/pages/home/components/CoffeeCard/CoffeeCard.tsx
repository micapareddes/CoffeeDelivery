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

  function onSetQuantity(num: number) {
    setQuantity(num)
  }

  function handleAddCoffeeToCart() {
    addCoffeeToCart({
      id,
      image,
      name,
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
              onSetQuantity={onSetQuantity}
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
