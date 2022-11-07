import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {

    return (
        <div>
            <div className="header-area">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="menu-wrapper">
                            {/* Logo */}
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt /></a>
                            </div>
                            {/* Main-menu */}
                            <div className="main-menu d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li>
                                            <NavLink to={"/"}>Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/shop"}>Shop</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={"/About"}>About</NavLink>
                                        </li>
                                        <li className="hot">
                                            <NavLink to={"/Latest"}>Latest</NavLink>
                                            <ul className="submenu">
                                                <li>
                                                    <NavLink to={"/ProductList"}>Product list</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/ProductDetails"}> Product Details</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to={"/Blog"}>Blog</NavLink>
                                            <ul className="submenu">
                                                {/* <li>
                                                    <NavLink to={"/Blog"}>Blog</NavLink>
                                                </li> */}
                                                <li>
                                                    <NavLink to={"BlogDetails"}>Blog Details</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to={"/Pages"}>Pages</NavLink>
                                            <ul className="submenu">
                                                <li>
                                                    <NavLink to={"/Login"}>Login</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/Cart"}>Cart</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/Elemnt"}>Element</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/Conformation"}>Confirmation</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/ProductCheckout"}>Product Checkout</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink to={"/Contact"}>Contact</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* Header Right */}
                            <div className="header-right">
                                <ul>
                                    <li>
                                        <div className="nav-search search-switch">
                                            <span className="flaticon-search" />
                                        </div>
                                    </li>
                                    <li> <a href="login.html"><span className="flaticon-user" /></a></li>
                                    <li><a href="cart.html"><span className="flaticon-shopping-cart" /></a> </li>
                                </ul>
                            </div>
                        </div>
                        {/* Mobile Menu */}
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;