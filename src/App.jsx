import './App.css';
import Layout from './components/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';

import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Login from './pages/Login';
import WishList from './pages/WishList';
import Details from './pages/Details';
import ShopContext from './components/ShopContext';
import Blogs from './pages/Blogs';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <ShopContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='shop' element={<Shop />} />
              <Route path='blog' element={<Blogs />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='cart' element={<Cart />} />
              <Route path='login' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='wishlist' element={<WishList />} />
              <Route path='details' element={<Details />} />
              <Route path='checkout' element={<Checkout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ShopContext>
    </>
  );
}

export default App;
