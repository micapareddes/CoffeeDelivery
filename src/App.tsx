import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import './global.css'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

function App() {
  return (
    <BrowserRouter>
      <CoffeeContextProvider>
        <Router />
      </CoffeeContextProvider>
    </BrowserRouter>
  )
}

export default App
