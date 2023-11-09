import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { CartCoffee } from './components/CartCoffeeCard/CartCoffee'

import styles from './Checkout.module.css'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'

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
  const shippingPrice = 7.5
  let totalPrice = 0

  const { cartCoffees } = useContext(CoffeeContext)

  const { register, handleSubmit, reset, formState } =
    useForm<checkoutFormData>({
      resolver: zodResolver(checkoutFormValidationSchema),
    })

  function handleCheckout(data: checkoutFormData) {
    console.log(data)
    reset()
  }
  console.log(formState.errors)
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
          <div className={styles.adressForm}>
            <input
              type="number"
              id="cep"
              placeholder="CEP"
              autoComplete="postal-code"
              {...register('cep', { valueAsNumber: true })}
            />

            <input
              type="text"
              id="street"
              className={styles.street}
              placeholder="Rua"
              autoComplete="address-line1"
              {...register('street')}
            />

            <input
              type="number"
              id="number"
              placeholder="Número"
              autoComplete="address-line2"
              {...register('number', { valueAsNumber: true })}
            />

            <div className={styles.complementDiv}>
              <input
                type="text"
                id="complement"
                className={styles.complement}
                placeholder="Complemento"
                {...register('complement')}
              />
              <span className={styles.adressComplement}>Opcional</span>
            </div>

            <input
              type="text"
              id="neighborhood"
              placeholder="Bairro"
              autoComplete="address-level3"
              {...register('neighborhood')}
            />

            <input
              type="text"
              id="city"
              placeholder="Cidade"
              autoComplete="address-level2"
              {...register('city')}
            />

            <input
              type="text"
              id="uf"
              placeholder="UF"
              autoComplete="address-level1"
              {...register('uf')}
            />
          </div>
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
        </div>
      </form>
      <section>
        <h2>Cafés selecionados</h2>
        <div className={styles.selectedCoffees}>
          {cartCoffees.map((coffee) => {
            totalPrice = totalPrice + coffee.price
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
            <div className={styles.textPrices}>
              <p>
                Total de itens <span>R$ {totalPrice}</span>
              </p>
              <p>
                Entrega <span>R$ {shippingPrice}</span>
              </p>
              <strong>
                <p>
                  Total <span>R$ {totalPrice + shippingPrice}</span>
                </p>
              </strong>
            </div>
            <button type="submit" form="form">
              Confirmar Pedido
            </button>
          </footer>
        </div>
      </section>
    </div>
  )
}
