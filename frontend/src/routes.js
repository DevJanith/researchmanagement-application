import { useState } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import Blog from './pages/Blog';
import DashboardApp from './pages/DashboardApp';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Cart from './pages/Project/Cart';
import Item from './pages/Project/Item';
import ItemCreate from './pages/Project/ItemCreate';
import ItemUpdate from './pages/Project/ItemUpdate';
import ProductList from './pages/Project/ProductList';
import ProductsView from './pages/Project/Products';
import Register from './pages/Register';
import User from './pages/User';
import PaymentManagement from "./pages/Project/PaymentManagement/PaymentManagement"
import ShopManagement from "./pages/Project/ShopManagement/ShopManagement"
import ItemManagement from "./pages/Project/ItemManagement/ItemManagement"
import UserManagement from "./pages/Project/UserManagement/UserManagement"


import TabPage from "./pages/Project/TabPage"

export default function Router() {

  // const [cart, setCart] = useState([])

  // const handleClickCartButton = (item) => {
  //   cart.push(item)
  //   console.log(cart)
  //   sessionStorage.setItem("cartData", cart)
  // }

  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'item', element: <Item /> },
        { path: 'item-create', element: <ItemCreate /> },
        { path: 'item-update/:id', element: <ItemUpdate /> },
        { path: 'product', element: <ProductsView /> },
        { path: 'productList', element: <ProductList /> },
        { path: 'payment-management', element: <PaymentManagement /> },
        { path: 'shop-management', element: <ShopManagement /> },
        { path: 'item-management', element: <ItemManagement /> },
        { path: 'user-management', element: <UserManagement /> },

        // { path: 'cart', element: <Cart cart={cart} setCart={setCart} /> },
        { path: 'blog', element: <Blog /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
