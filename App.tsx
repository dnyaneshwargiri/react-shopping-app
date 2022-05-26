import * as React from "react";
import "./style.css";
import Header from "./src/containers/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./src/containers/ProductListing";
import ProductDetails from "./src/containers/ProductDetails";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </div>
  );
}
