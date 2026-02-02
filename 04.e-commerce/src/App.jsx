
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails'
import Carts from './pages/Carts'
import Checkout from './pages/Checkout'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
function App() {
  return <>
  <Router>
    <div className='min-h-screen bg-gray-950 font-sans'>
<NavBar/>
   
    <Routes>
      <Route path='/' element={ <ProductList/> } />
      <Route path='/product/:id' element={<ProductDetails/>} />
      <Route path='/cart' element={<Carts />} />
      <Route path='/checkout' element={<Checkout />} />
      {/* <Route path='/order' element={<OrderConfirmation />} /> */}

    </Routes>
    <Footer/>
     </div>
  </Router>
  </>;
}

export default App;
