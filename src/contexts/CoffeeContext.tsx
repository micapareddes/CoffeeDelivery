import { ReactNode, createContext, useState } from 'react'

import expressoTradicional from '../assets/coffees-images/expresso.svg'

interface CoffeeData {
  id: number
  image: string
  labels: string[]
  name: string
  description: string
  price: number
}

interface CartCoffeeData {
  id: number
  image: string
  name: string
  price: number
  quantity: number
}

const coffeesArray: CoffeeData[] = [
  {
    id: 0,
    image: expressoTradicional,
    labels: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 350,
  },
  {
    id: 1,
    image: expressoTradicional,
    labels: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 300,
  },
  {
    id: 2,
    image: expressoTradicional,
    labels: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 400,
  },
  {
    id: 3,
    image: expressoTradicional,
    labels: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 350,
  },
  {
    id: 4,
    image: expressoTradicional,
    labels: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 525,
  },
]

interface CoffeeContextData {
  coffees: CoffeeData[]
  coffeesAddedToCart: CartCoffeeData[]
  addCoffeeToCart: (coffee: CartCoffeeData) => void
  deleteCoffeeFromCart: (id: number) => void
  alterCartCoffeeQuantity: (id: number, newQuantity: number) => void
  formatPrice: (cents: number) => string
}

export const CoffeeContext = createContext({} as CoffeeContextData)

interface CoffeeContextProviderData {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeContextProviderData) {
  const [coffees, setCoffees] = useState<CoffeeData[]>(coffeesArray)
  const [coffeesAddedToCart, setCoffeesAddedToCart] = useState<
    CartCoffeeData[]
  >([])

  function formatPrice(cents: number) {
    const reais = cents / 100
    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(reais)
    return formatted.replace(/R\$\s?/, '')
  }

  function addCoffeeToCart(coffee: CartCoffeeData) {
    setCoffeesAddedToCart((state) => {
      return [...state, coffee]
    })
  }

  function alterCartCoffeeQuantity(id: number, newQuantity: number) {
    setCoffeesAddedToCart((state) =>
      state.map((cartCoffee) => {
        if (cartCoffee.id === id) {
          return { ...cartCoffee, quantity: newQuantity }
        } else {
          return cartCoffee
        }
      }),
    )
  }

  function deleteCoffeeFromCart(id: number) {
    setCoffeesAddedToCart((state) => state.filter((coffee) => coffee.id !== id))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        alterCartCoffeeQuantity,
        coffeesAddedToCart,
        addCoffeeToCart,
        deleteCoffeeFromCart,
        formatPrice,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
