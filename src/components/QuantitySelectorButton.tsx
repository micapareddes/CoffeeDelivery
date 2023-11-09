import styles from './QuantitySelectorButton.module.css'
import { Minus, Plus } from '@phosphor-icons/react'

import { HtmlHTMLAttributes } from 'react'

interface QuantitySelectorButtonProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  quantity: number
  onSubtractQuantity?: () => void
  onSumQuantity?: () => void
}

export function QuantitySelectorButton({
  quantity,
  onSubtractQuantity,
  onSumQuantity,
  ...rest
}: QuantitySelectorButtonProps) {
  return (
    <div className={styles.quantitySelector} {...rest}>
      <button onClick={onSubtractQuantity}>
        <Minus size={14} weight="bold" className={styles.icon} />
      </button>
      <span>{quantity}</span>
      <button onClick={onSumQuantity}>
        <Plus size={14} weight="bold" className={styles.icon} />
      </button>
    </div>
  )
}
