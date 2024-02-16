import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Join from "./pages/join/Join";
import ProdDetail from "./pages/prodDetail/ProdDetail";
import Cart from "./pages/cart/Cart";
import Header from "./component/header/Header";
import Order from "./pages/order/Order";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/prod" element={<ProdDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>

  );
}
export default App;
