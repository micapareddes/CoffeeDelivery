import { ReactNode, createContext, useState } from 'react'

import expressoTradicional from '../assets/coffees-images/expresso.svg'

interface CoffeeData {
  id: number
  image: string
  labels: string[]
  name: string
  description: string
  price: number
  quantity: number
  isAddedToCart: boolean
}

const coffeesArray: CoffeeData[] = [
  {
    id: 0,
    image: expressoTradicional,
    labels: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 10,
    quantity: 1,
    isAddedToCart: false,
  },
  {
    id: 1,
    image: expressoTradicional,
    labels: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 5,
    quantity: 1,
    isAddedToCart: false,
  },
  {
    id: 2,
    image: expressoTradicional,
    labels: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 8,
    quantity: 1,
    isAddedToCart: false,
  },
  {
    id: 3,
    image: expressoTradicional,
    labels: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 7,
    quantity: 1,
    isAddedToCart: false,
  },
  {
    id: 4,
    image: expressoTradicional,
    labels: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 5,
    quantity: 1,
    isAddedToCart: false,
  },
]

interface CoffeeContextData {
  coffees: CoffeeData[]
  coffeeWasAdded: boolean
  addCoffeeToCart: (id: number) => void
  deleteCoffeeFromCart: (id: number) => void
  sumQuantity: (id: number) => void
  subtractQuantity: (id: number) => void
  onAddCoffeToCart: () => void
  onEmptyCart: () => void
}

export const CoffeeContext = createContext({} as CoffeeContextData)

interface CoffeeContextProviderData {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeContextProviderData) {
  const [coffeeWasAdded, setCoffeeWasAdded] = useState(false)

  const [coffees, setCoffees] = useState<CoffeeData[]>(coffeesArray)

  function onAddCoffeToCart() {
    setCoffeeWasAdded(true)
  }

  function onEmptyCart() {
    setCoffeeWasAdded(false)
  }

  function addCoffeeToCart(id: number) {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.id === id) {
          return { ...coffee, isAddedToCart: true }
        } else {
          return coffee
        }
      }),
    )
  }

  function deleteCoffeeFromCart(id: number) {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.id === id) {
          return { ...coffee, isAddedToCart: false }
        } else {
          return coffee
        }
      }),
    )
  }

  function sumQuantity(id: number) {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.id === id) {
          const newSumQuantity = coffee.quantity + 1
          return { ...coffee, quantity: newSumQuantity }
        } else {
          return coffee
        }
      }),
    )
  }

  function subtractQuantity(id: number) {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffee.id === id) {
          if (coffee.quantity > 1) {
            const newSumQuantity = coffee.quantity - 1
            return { ...coffee, quantity: newSumQuantity }
          }
          return coffee
        } else {
          return coffee
        }
      }),
    )
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        coffeeWasAdded,
        addCoffeeToCart,
        deleteCoffeeFromCart,
        sumQuantity,
        subtractQuantity,
        onAddCoffeToCart,
        onEmptyCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
