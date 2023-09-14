import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet, useNavigate } from "react-router-dom";
import "./Component/ExPath.css"

function Index(){
    return(<h1>Home Page</h1>)
}

function Button(){
    const navigate = useNavigate();
    return <button onClick={()=>navigate(-1)}>뒤로가기</button>
}

function Products(){
    const location = useLocation();
    
    return(
        <main>
            <h1>상품 리스트 페이지 입니다.</h1>
            <ul>
                <li>
                    <Link to="/products/1">Product_1</Link>
                </li>
                <li>
                    <Link to="/products/2">Product_2</Link>
                </li>
                
                <li>
                    <Link to="/products/3">Product_3</Link>
                </li>
            </ul>
        </main>
        
    )
}
    function ProductsDetail(){
        const {id} = useParams();
        return(
            <>
                <h1>{id}번 상품의 상세페이지 입니다.</h1>
                <p><Link to="notice/">Pnotice1_notice</Link></p>
            </>

        )
    }
    function Pnotice(){
        const {id} = useParams();
        return(<h1>{id}번 상품의 공지입니다</h1>)
    }

function Cart(){
    return(
        <main>
            <h1>cart</h1>
        </main>
    )
}

function Users(){
    return(
        <main>
            <h1>users</h1>
            <ul>
                <li>
                    <Link to="coupon/">coupon</Link>
                </li>
                <li>
                    <Link to="question/">QnA</Link>
                </li>
                
                <li>
                    <Link to="Unotice/">공지</Link>
                </li>
            </ul>
        </main>
    )
}
    function Coupon(){
        return(<h1>쿠폰 페이지 입니다.</h1>)
    }
    function Question(){
        return(<h1>QnA 페이지 입니다.</h1>)
    }
    function Unotice(){
        return(<h1>공지 페이지 입니다.</h1>)
    }

function ExPath() {
    return(
        <BrowserRouter>
            <ul className="menuList">
                <li><Link to="/">Home Page</Link></li>
                <li>
                    <Link to="/products">Product Detail Page</Link>
                </li>
                <li><Link to="/cart">cart</Link></li>
                <li><Link to="/users">User Page</Link></li>
            </ul>            
            <Routes>
                <Route path="/" element={<Index />}/>
                <Route path="/products" element={<Products />}/>
                <Route path="/products/:id" element={<Outlet />}>
                    <Route path="" element={<ProductsDetail />}/>
                    <Route path="notice/" element={<Pnotice/>}/>
                </Route>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/users/*" element={<Outlet />}>
                    <Route path="" element={<Users />}/>
                    <Route path="coupon/" element={<Coupon />}/>
                    <Route path="question/" element={<Question />}/>
                    <Route path="notice/" element={<Unotice />}/>
                </Route>
            </Routes>
            <Button />
        </BrowserRouter>
    )
}

export default ExPath;