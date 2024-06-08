// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => (
  <Provider store={store}>
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:id" component={ProductDetailPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminDashboard} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
