import styles from './styles.module.css'

import { Bank, CreditCard, Money } from '@phosphor-icons/react'

export function PaymentForm() {
  return (
    <div className={styles.paymentForm}>
      <div className={styles.radioInput}>
        <input type="radio" name="payment" value="credit" id="credit" />
        <label htmlFor="credit">
          <CreditCard size={16} className={styles.icon} />
          Cartão de crédito
        </label>
      </div>

      <div className={styles.radioInput}>
        <input type="radio" name="payment" value="debit" id="debit" />
        <label htmlFor="debit">
          <Bank size={16} className={styles.icon} />
          Cartão de débito
        </label>
      </div>

      <div className={styles.radioInput}>
        <input type="radio" name="payment" value="cash" id="cash" />
        <label htmlFor="cash">
          <Money size={16} className={styles.icon} />
          Dinheiro
        </label>
      </div>
    </div>
  )
}
