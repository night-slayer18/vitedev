import './App.css'
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Product from './components/Product';
import User from './components/User';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/props" element={<Product/>} />
          <Route exact path="/user" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
