import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from './screens/authScreens/loginScreen';
import SignupScreen from './screens/authScreens/signupScreen';
import ForgotPassword from './screens/authScreens/forgotPassword';
import VerifyCode from './screens/authScreens/verifyCode';
import ResetPassword from './screens/authScreens/resetPassword';
import HomeScreen from './screens/mainScreens/home';
import ProductDetails from './screens/mainScreens/productDetails/productDetails';
import Cart from './screens/mainScreens/cart';
import ProductDetailPage from './screens/TestScreen';
import Checkout from './screens/mainScreens/checkout';


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
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
