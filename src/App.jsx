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
import Effect from './components/Effect';
import ApiCall from './components/ApiCall';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/props" element={<Product/>} />
          <Route exact path="/user" element={<User/>} />
          <Route exact path="/country" element={<Country/>} />
          <Route exact path="/useeffect" element={<Effect/>} />
          <Route exact path="/api" element= {<ApiCall/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
