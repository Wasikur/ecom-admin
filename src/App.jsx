import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/signin/SignIn";
import SignUp from "./components/auth/signup/SignUp";
import { AuthProvider } from "./contexts/authContext/AuthProvider";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Trending from "./pages/trending/Trending";
import Error from "./pages/error/Error";
import NewCategory from "./pages/categories/NewCategory";
import NewProduct from "./pages/products/NewProduct";
import NewTrending from "./pages/trending/NewTrending";
import Banners from "./pages/banners/Banners";
import NewBanner from "./pages/banners/NewBanner";
import Orders from "./pages/orders/Orders";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/" element={<DashboardLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/new-category" element={<NewCategory />} />
            <Route path="products" element={<Products />} />
            <Route path="products/new-product" element={<NewProduct />} />
            <Route path="trending" element={<Trending />} />
            <Route path="trending/new-trending" element={<NewTrending />} />
            <Route path="banners" element={<Banners />} />
            <Route path="banners/new-banner" element={<NewBanner />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
