import {Routes, Route} from "react-router-dom"
import About from "./components/About"
import Catering from "./components/Catering"
import Location from "./components/Location"
import Menu from "./components/Menu"
import Reservations from "./components/Reservations"
import Order from "./components/Order"
import Layout from "./Layout/Layout"
import Home from "./components/Home"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/about" element={<Layout />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/location" element={<Location />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
