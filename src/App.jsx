import './App.css'
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Product from './components/Product';
import User from './components/User';
import Country from './components/Country';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/props" element={<Product/>} />
          <Route exact path="/user" element={<User/>} />
          <Route exact path="/country" element={<Country/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
