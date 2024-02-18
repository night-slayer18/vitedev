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
import Forms from './components/Forms';
import Home from './components/Home';
import Component1 from './components/childs/Component1';
import Component2 from './components/childs/Component2';
import Component3 from './components/childs/Component3';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/home" element={<Home/>}>
            <Route exact path="component1" element={<Component1/>} />
            <Route exact path="component2" element={<Component2/>} />
            <Route exact path="component3" element={<Component3/>} />
          </Route>
          <Route exact path="/props" element={<Product/>} />
          <Route exact path="/user" element={<User/>} />
          <Route exact path="/country" element={<Country/>} />
          <Route exact path="/useeffect" element={<Effect/>} />
          <Route exact path="/api" element= {<ApiCall/>} />
          <Route exact path="/form" element = {<Forms/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
