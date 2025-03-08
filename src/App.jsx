import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="box-border  font-roboto1 ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail />} />
        </Routes>
      </Router>

      {/* <Home /> */}
    </div>
  );
}

export default App;
