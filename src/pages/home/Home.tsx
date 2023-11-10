import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { CoffeeCard } from './components/CoffeeCard/CoffeeCard'

import styles from './Home.module.css'
import { Coffee, Package, Timer } from '@phosphor-icons/react'
import { ShoppingCart } from '@phosphor-icons/react/dist/ssr/ShoppingCart'
import coffee from '../../assets/coffee-img.svg'

export function Home() {
  const { coffees } = useContext(CoffeeContext)

  return (
    <>
      <section className={styles.aboutWrapper}>
        <div className={styles.aboutContent}>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p className={styles.subtitle}>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ul className={styles.menu}>
              <li>
                <div className={styles.iconWrapper + ' ' + styles.colorOrange}>
                  <ShoppingCart
                    size={16}
                    weight="fill"
                    className={styles.icon}
                  />
                </div>
                <p>Compra simples e segura</p>
              </li>
              <li>
                <div className={styles.iconWrapper + ' ' + styles.colorGrey}>
                  <Package size={16} weight="fill" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </li>
              <li>
                <div className={styles.iconWrapper + ' ' + styles.colorYellow}>
                  <Timer size={16} weight="fill" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </li>
              <li>
                <div className={styles.iconWrapper + ' ' + styles.colorPurple}>
                  <Coffee size={16} weight="fill" />
                </div>

                <p>O café chega fresquinho até você</p>
              </li>
            </ul>
          </div>
          <img src={coffee} alt="Imagem de café do Coffee Delivery" />
        </div>
      </section>
      <section className={styles.coffeesSection}>
        <h2>Nossos cafés</h2>
        <div className={styles.coffeesList}>
          {coffees.map((coffee) => {
            return (
              <CoffeeCard
                key={coffee.id}
                id={coffee.id}
                image={coffee.image}
                labels={coffee.labels}
                name={coffee.name}
                description={coffee.description}
                price={coffee.price}
                quantity={coffee.quantity}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}
