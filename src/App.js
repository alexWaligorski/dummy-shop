import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ShopHomePage from "./features/ShopHomePage";
import SingleProductPage from "./features/SingleProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/home" element={<ShopHomePage />} />
          <Route
            exact
            path="/products/:productId"
            element={<SingleProductPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
