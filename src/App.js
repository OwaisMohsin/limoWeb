import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/authScreens/loginScreen";
import SignupScreen from "./screens/authScreens/signupScreen";
import ForgotPassword from "./screens/authScreens/forgotPassword";
import VerifyCode from "./screens/authScreens/verifyCode";
import ResetPassword from "./screens/authScreens/resetPassword";
import HomeScreen from "./screens/mainScreens/home";
import ProductDetails from "./screens/mainScreens/productDetails/productDetails";
import Cart from "./screens/mainScreens/cart";
import ProductDetailPage from "./screens/TestScreen";
import Checkout from "./screens/mainScreens/checkout";
import FavScreen from "./screens/mainScreens/favList";
import LandingScreen from "./screens/mainScreens/landing";
import OurServices from "./screens/mainScreens/our-services";
import About from "./screens/mainScreens/about";
import ContactUs from "./screens/mainScreens/contact";
import FleetPage from "./screens/mainScreens/fleet";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verifyCode" element={<VerifyCode />} />
          <Route path="/resetPassword" element={<ResetPassword />} />

          {/* mains */}
          <Route path="/main" element={<LandingScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/favorites" element={<FavScreen />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/fleet" element={<FleetPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
