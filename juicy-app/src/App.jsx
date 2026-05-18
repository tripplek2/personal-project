import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import AdminPage from "./pages/AdminPage"

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/shop" element={<ShopPage />} />
         <Route path="/admin" element={<AdminPage />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;