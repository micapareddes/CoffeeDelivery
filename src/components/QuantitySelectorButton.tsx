import styles from './QuantitySelectorButton.module.css'
import { Minus, Plus } from '@phosphor-icons/react'

import { HtmlHTMLAttributes } from 'react'

interface QuantitySelectorButtonProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  quantity: number
  onSetQuantity: (num: number) => void
}

export function QuantitySelectorButton({
  quantity,
  onSetQuantity,
  ...rest
}: QuantitySelectorButtonProps) {
  function handleSumQuantity() {
    onSetQuantity(quantity + 1)
  }

  function handleSubtractQuantity() {
    if (quantity > 1) {
      onSetQuantity(quantity - 1)
    }
  }

  return (
    <div className={styles.quantitySelector} {...rest}>
      <button onClick={handleSubtractQuantity}>
        <Minus size={14} weight="bold" className={styles.icon} />
      </button>
      <span>{quantity}</span>
      <button onClick={handleSumQuantity}>
        <Plus size={14} weight="bold" className={styles.icon} />
      </button>
    </div>
  )
}
