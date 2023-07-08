import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./component/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import Cart from "./screens/cart/Cart";
import Signup from "./screens/sign up/Signup";
import Signin from "./screens/sign in/Signin";
import { useAuthContext } from "./hook/useAuthContext";
import Profile from "./screens/profile/Profile";

const App = () => {
  const { user, isAuthReady } = useAuthContext();
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      {isAuthReady && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
