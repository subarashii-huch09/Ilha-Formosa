import { Routes, Route, BrowserRouter } from "react-router-dom";
// import About from "./components/About"
// import Catering from "./components/Catering"
import Location from "./components/Location"
// import Menu from "./components/Menu"
// import Reservations from "./components/Reservations"
// import Order from "./components/Order"
import Layout from "./Layout/Layout";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/location" element={<Location />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/catering" element={<Catering />} /> */}

          {/* <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
