import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import ProductDetails from "./Components/Product/ProductDetails";
import Products from "./Components/Product/Product";
import Profile from "./Components/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;