import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import Join from "./pages/join/Join";
import ProdDetail from "./pages/prodDetail/ProdDetail";
import Cart from "./pages/cart/Cart";
import Header from "./component/header/Header";
import Order from "./pages/order/Order";
import SellerCenter from "./pages/seller/SellerCenter";
import AddProd from "./pages/seller/AddProd";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/prod/:num" element={<ProdDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/sellercenter" element={<SellerCenter />} />
        <Route path="/sellercenter/addprod" element={<AddProd />} />
        <Route path="/sellercenter/editprod/:num" element={<AddProd />} />
      </Routes>
    </>

  );
}
export default App;
