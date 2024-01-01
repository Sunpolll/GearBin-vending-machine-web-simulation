import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Complete from "./pages/complete/Complete";
import FoodDetail from "./pages/detail/FoodDetail";
import MainMenu from "./pages/mainMenu/MainMenu";
import Payment from "./pages/payment/Payment";
// import Bottledrink from "./pages/bottleDrink/bottleDrink";
import SnackDetail from "./pages/detail/SnackDetail";
import RTDDetail from "./pages/detail/RTDDetail";
import DispenserDrink from "./pages/detail/DispenserDrink";
import ChooseFoodType from "./pages/food/ChooseFoodType";
import ChooseSnackType from "./pages/snackChoose/ChooseSnackType";
import ChooseDrinkType from "./pages/drink/ChooseDrinkType";
import ChooseCafeDrink from "./pages/cafeDrink/ChooseCafeDrink";
import DrinkDetail from "./pages/detail/DrinkDetail";
import ChooseBottleDrink from "./pages/bottleDrink/ChooseBottleDrink";
import RTEDetail from "./pages/RTEDetail/RTEDetail";
import Bakery from "./pages/bakery/Bakery";
import Appetizer from "./pages/appetizer/Appetizer";
import Dryfood from "./pages/dryfood/Dryfood";
import Sweet from "./pages/sweet/Sweet";
import Presswater from "./pages/press/Presswater";
import NormalDetail from "./pages/detail/NormalDetail";
import SweetDeatail from "./pages/detail/SweetDetail";
import HomeZoom from "./pages/home/HomeZoom";
// import TestModal from "./component/Number";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/complete/:price", element: <Complete /> },
  { path: "/fooddetail/:key", element: <FoodDetail /> },
  { path: "/mainmenu", element: <MainMenu /> },
  { path: "/payment/:key", element: <Payment /> },
  { path: "/payment/:key/:pirce", element: <Payment /> },
  { path: "/bakery", element: <Bakery /> },
  { path: "/appetizer", element: <Appetizer /> },
  { path: "/dryfood", element: <Dryfood /> },
  { path: "/sweet", element: <Sweet /> },
  { path: "/snackdetail/:key", element: <SnackDetail /> },
  { path: "/drinkdetail/:key", element: <DrinkDetail /> },
  { path: "/rtddetail/:key", element: <RTDDetail /> },
  { path: "/rtedetail", element: <RTEDetail /> },
  { path: "/normaldetail/:key", element: <NormalDetail /> },
  { path: "/sweetdetail/:key", element: <SweetDeatail /> },
  { path: "/dispenserdrink/:key", element: <DispenserDrink /> },
  { path: "/choosefoodtype", element: <ChooseFoodType /> },
  { path: "/choosebottledrink", element: <ChooseBottleDrink /> },
  { path: "/choosecafedrink", element: <ChooseCafeDrink /> },
  { path: "/choosesnacktype", element: <ChooseSnackType /> },
  { path: "/choosedrinktype", element: <ChooseDrinkType /> },
  { path: "/press", element: <Presswater /> },
  { path: "/zoom", element: <HomeZoom /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
