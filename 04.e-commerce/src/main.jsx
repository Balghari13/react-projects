
import { createRoot } from 'react-dom/client'
import './index.css'
import { CartProvider } from './context/CardContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>,
)
