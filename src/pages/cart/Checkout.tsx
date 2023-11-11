import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { CartCoffee } from './components/CartCoffeeCard/CartCoffee'
import { AdressForm } from './components/AdressForm'

import styles from './Checkout.module.css'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { PaymentForm } from './components/PaymentForm'
import { NavLink } from 'react-router-dom'

const checkoutFormValidationSchema = zod.object({
  cep: zod.number().refine((data) => data.toString().length === 8, {
    message: 'O número deve ter exatamente 8 dígitos.',
  }),
  street: zod.string().min(1),
  number: zod.number().min(1),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().refine((data) => data.length === 2, {
    message: 'Insira apenas as siglas do seu estado.',
  }),
})

type checkoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const shippingPrice = 350
  let totalPrice = 0

  const adressForm = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })

  const { handleSubmit, reset } = adressForm

  const { coffeesAddedToCart, formatPrice } = useContext(CoffeeContext)

  function handleCheckout(data: checkoutFormData) {
    console.log(data)
    reset()
  }

  return (
    <div className={styles.wrapper}>
      <form id="form" onSubmit={handleSubmit(handleCheckout)}>
        <h2>Complete seu pedido</h2>
        <div className={styles.deliveryAdress}>
          <header className={styles.cardHeader}>
            <MapPinLine size={22} className={styles.iconYellow} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <FormProvider {...adressForm}>
            <AdressForm />
          </FormProvider>
        </div>

        <div className={styles.payment}>
          <header className={styles.cardHeader}>
            <CurrencyDollar size={22} className={styles.iconPurple} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <PaymentForm />
        </div>
      </form>
      <section>
        <h2>Cafés selecionados</h2>
        <div className={styles.selectedCoffees}>
          {coffeesAddedToCart.map((coffee) => {
            totalPrice = totalPrice + coffee.price * coffee.quantity
            return (
              <CartCoffee
                key={coffee.id}
                id={coffee.id}
                image={coffee.image}
                name={coffee.name}
                price={coffee.price}
                quantity={coffee.quantity}
              />
            )
          })}
          <footer>
            {coffeesAddedToCart.length > 0 ? (
              <>
                <div className={styles.textPrices}>
                  <p>
                    Total de itens <span>R$ {formatPrice(totalPrice)}</span>
                  </p>
                  <p>
                    Entrega <span>R$ {formatPrice(shippingPrice)}</span>
                  </p>
                  <strong>
                    <p>
                      Total{' '}
                      <span>R$ {formatPrice(totalPrice + shippingPrice)}</span>
                    </p>
                  </strong>
                </div>
                <button type="submit" form="form">
                  Confirmar Pedido
                </button>
              </>
            ) : (
              <div className={styles.emptyCart}>
                <p className={styles.emptyCartSadFace}>:(</p>
                <p>Ops! Parece que você ainda não escolheu nenhum café.</p>
                <NavLink to="/" title="Home">
                  <button>Ver cafés</button>
                </NavLink>
              </div>
            )}
          </footer>
        </div>
      </section>
    </div>
  )
}
