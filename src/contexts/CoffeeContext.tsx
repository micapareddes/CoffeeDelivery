import { ReactNode, createContext, useState } from 'react'

import expressoTradicional from '../../assets/coffees-images/expresso.svg'

interface CoffeeData {
  id: number
  image: string
  labels: string[]
  name: string
  description: string
  price: number
  quantity: number
}

const coffees: CoffeeData[] = [
  {
    id: 0,
    image: expressoTradicional,
    label: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 10,
    quantity: 1,
  },
  {
    id: 1,
    image: expressoTradicional,
    label: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 5,
    quantity: 1,
  },
  {
    id: 2,
    image: expressoTradicional,
    label: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 8,
    quantity: 1,
  },
  {
    id: 3,
    image: expressoTradicional,
    label: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 7,
    quantity: 1,
  },
  {
    id: 4,
    image: expressoTradicional,
    label: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 5,
    quantity: 1,
  },
]

interface CoffeeContextData {
  cartCoffees: CoffeeData[]
  coffees: CoffeeData[]
  addCoffeeToCart: (coffee: CoffeeData) => void
  deleteCoffeeFromCart: (id: number) => void
}

export const CoffeeContext = createContext({} as CoffeeContextData)

interface CoffeeContextProviderData {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeContextProviderData) {
  const [cartCoffees, setCartCoffees] = useState<CoffeeData[]>([])

  function addCoffeeToCart(coffee: CoffeeData) {
    setCartCoffees((state) => {
      return [...state, coffee]
    })
  }

  function deleteCoffeeFromCart(id: number) {
    setCartCoffees((state) => state.filter((coffee) => coffee.id !== id))
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        cartCoffees,
        addCoffeeToCart,
        deleteCoffeeFromCart,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
