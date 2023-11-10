import { NavLink } from 'react-router-dom'

import styles from './Header.module.css'
import logo from '../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" title="Home">
        <img src={logo} alt="Coffe Delivery Logo" />
      </NavLink>
      <div className={styles.menuWraper}>
        <div className={styles.locationWraper}>
          <MapPin size={16} weight="fill" className={styles.mapIcon} />
          <p>Porto Alegre, RS</p>
        </div>
        <NavLink to="/checkout" title="Checkout">
          <button>
            <ShoppingCart weight="fill" className={styles.cartIcon} />
          </button>
        </NavLink>
      </div>
    </header>
  )
}
