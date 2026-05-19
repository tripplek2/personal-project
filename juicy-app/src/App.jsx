import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import AdminPage from "./pages/AdminPage"
import NavBar from "./components/NavBar";
import "./App.css"
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
       <NavBar />
       
       <div className="page-container">
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/shop" element={<ShopPage />} />
         <Route path="/admin" element={<AdminPage />} />
       </Routes>
       </div>

       <Footer />
    </BrowserRouter>
  );
}

export default App;