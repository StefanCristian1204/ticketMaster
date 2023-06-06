import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import Footer from "./components/footer/Footer.jsx";
import React from "react";
import Favorites from "./pages/Favorites/Favorites.jsx";
import History from "./pages/History/History.jsx";
import User from "./pages/user/User.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/hotels/:id" element={<Hotel/>}/>
            <Route path="/favorites" element={[<Navbar/>,<Sidebar/>,<Favorites/>]}/>
            <Route path="/history" element={<History/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/user/info" element={<User/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
