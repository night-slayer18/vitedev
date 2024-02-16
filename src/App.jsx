import './App.css'
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Product from './components/Product';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/props" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
