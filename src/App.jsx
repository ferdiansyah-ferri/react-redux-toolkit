import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLogin from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Home from "./pages/Home";
import ProductDetail from "./productDetail/ProductDetail";
import Profil from "./pages/Profil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
