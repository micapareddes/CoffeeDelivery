import { MapPin, Money, Timer } from '@phosphor-icons/react'
import successIlustration from '../../assets/Illustration.svg'
import styles from './Succsess.module.css'

export function Success() {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>

        <div className={styles.infoBoxWrapper}>
          <ul className={styles.infoBox}>
            <li>
              <div className={styles.iconWrapper + ' ' + styles.purple}>
                <MapPin size={16} />
              </div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </li>
            <li>
              <div className={styles.iconWrapper + ' ' + styles.yellow}>
                <Timer size={16} />
              </div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </li>
            <li>
              <div className={styles.iconWrapper + ' ' + styles.orange}>
                <Money size={16} />
              </div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </li>
          </ul>
        </div>
      </div>
      <img
        src={successIlustration}
        alt="Motoboy carregando um Coffee Delivery"
      />
    </div>
  )
}
