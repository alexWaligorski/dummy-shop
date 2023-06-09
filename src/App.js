import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ShopHomePage from "./features/ShopHomePage";
import SingleProductPage from "./features/SingleProductPage";
import ProductCategoryPage from "./features/ProductCategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BestOfferPage from "./features/BestOfferPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/home" element={<ShopHomePage />} />
          <Route
            exact
            path="/products/category/:category"
            element={<ProductCategoryPage />}
          />
          <Route
            exact
            path="/products/:productId"
            element={<SingleProductPage />}
          />
          <Route exact path="/offers" element={<BestOfferPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
