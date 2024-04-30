import React, { useState, useContext } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FoodDelivaryLogo from '../../images/FoodDelivaryLogo.jpg';
import UserContext, { CartContext } from "../common/UserContext";
import useInternetStatus from "../customehooks/useInternetStatus";
import LoginModal from "./authentication/LoginModal";
const Header = () => {
    const onlineStatus = useInternetStatus();
    const {loggedInUser} = useContext(UserContext);
    const {cart}= useContext(CartContext);
  //  const cart = useSelector(store=>store.cart.items);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const handleLogin = () =>{
       setLoginOpen(!isLoginOpen);
    }
    const userName = useSelector((store)=>store?.users?.users[0]?.name);
    console.log("first",userName)
    return(
        <div className="header d-flex justify-content-between p-3 m-3 border">
            <div className="logo-container">
                <img src={FoodDelivaryLogo} height="64px" width="64px" alt="food delivary logo" />
            </div>
            <div className="nav-items" style={{background:"#99b195"}}>
                    <ul className="align-items-baseline d-flex " style={{listStyleType:"none"}}>
                        <li>Internet Status{onlineStatus ? "Online" :"Offline"}</li>
                        <Link to="/grocery"><li className="mt-2 text-decoration-none">Grocery</li></Link>
                        <li>Home</li>
                       <Link to="/about" className="mt-3 text-decoration-none"> <li>About Us</li></Link>
                        <li>Contact Us</li>
                       <Link to={"/cart"} className="text-decoration-none me-3"> <li className="fw-bold">cart - {Object.keys(cart).length} Items</li></Link>
                        <li className="bg-danger rounded-2 cursor-pointer" onClick={()=>{handleLogin()}}>Login</li>
                        <li className="fw-bold">{loggedInUser}</li>
                        <li>{userName}</li>
                    </ul>
            </div>
            {isLoginOpen && <LoginModal show={isLoginOpen} onHide={()=>setLoginOpen(false)}/>}
        </div>
    )
}
export default Header