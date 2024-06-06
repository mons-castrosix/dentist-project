import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'




import logo from './mape_morena.png'
import menu from './menu.png'
function Header() {
    return (

       <div>
<header className="header header-01 header-sticky is-sticky">
      <div className="main-header">
        <div className="container">
          <nav className="navbar navbar-static-top navbar-expand-lg">
            <a className="navbar-brand mr-0" href="index.html">
              <img className="img-fluid" src="images/logo.svg" alt="logo"/>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
            <div className="navbar-collapse collapse justify-content-center">
              <ul className="nav navbar-nav">
                <li className="nav-item dropdown active">
                  <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home<i className="fas fa-angle-down"></i></a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="active"><a className="dropdown-item" href="index.html">Home 01</a></li>
                    <li><a className="dropdown-item" href="index-02.html">Home 02</a></li>
                    <li><a className="dropdown-item" href="index-03.html">Home 03</a></li>
                  </ul>
                </li>
                <li className="dropdown nav-item">
                  <a className="nav-link" href="#" data-toggle="dropdown">Pages<i className="fas fa-angle-down"></i></a>
                  <ul className="dropdown-menu megamenu dropdown-menu-lg">
                    <li>
                      <div className="row">
                        <div className="col-sm-4">
                          <h6 className="mb-3 nav-title">Pages</h6>
                          <ul className="list-unstyled mt-lg-3">
                            <li><a className="dropdown-item" href="about-us.html">About Us</a></li>
                            <li><a className="dropdown-item" href="about-me.html">About Me</a></li>
                            <li><a className="dropdown-item" href="team.html">Team</a></li>
                            <li><a className="dropdown-item" href="team-single.html">Team Single</a></li>
                            <li><a className="dropdown-item" href="gallery.html">Gallery</a></li>
                            <li><a className="dropdown-item" href="before-after.html">Before After</a></li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <h6 className="mb-3 nav-title">Pages</h6>
                          <ul className="list-unstyled mt-lg-3">
                            <li><a className="dropdown-item" href="pricing.html">Pricing</a></li>
                            <li><a className="dropdown-item" href="faqs.html">Faqs</a></li>
                            <li><a className="dropdown-item" href="appointment.html">Appointment</a></li>
                            <li><a className="dropdown-item" href="cost-calculator.html">Cost Calculator</a></li>
                            <li><a className="dropdown-item" href="timetable.html">Timetable</a></li>
                            <li><a className="dropdown-item" href="working-hours.html">Working Hours</a></li>
                          </ul>
                        </div>
                        <div className="col-sm-4">
                          <h6 className="mb-3 nav-title">Pages</h6>
                          <ul className="list-unstyled mt-lg-3">
                            <li><a className="dropdown-item" href="login.html">Login</a></li>
                            <li><a className="dropdown-item" href="register.html">Register</a></li>
                            <li><a className="dropdown-item" href="error-404.html">Error 404</a></li>
                            <li><a className="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                            <li><a className="dropdown-item" href="terms-and-conditions.html">T&amp;C</a></li>
                            <li><a className="dropdown-item" href="privacy-policy.html">Privacy Policy</a></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown nav-item">
                  <a href="properties.html" className="nav-link" data-toggle="dropdown">Services<i className="fas fa-angle-down"></i></a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="service.html">Service</a></li>
                    <li><a className="dropdown-item" href="departments.html">Departments</a></li>
                    <li><a className="dropdown-item" href="service-detail.html">Service Detail</a></li>
                  </ul>
                </li>
                 <li className="dropdown nav-item">
                  <a href="#" className="nav-link" data-toggle="dropdown">Blog<i className="fas fa-angle-down"></i></a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                    <li><a className="dropdown-item" href="blog-detail.html">Blog Detail</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Shop <i className="fas fa-angle-down"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="shop.html">Shop</a></li>
                    <li><a className="dropdown-item" href="shop-single.html">Shop Single</a></li>
                    <li><a className="dropdown-item" href="shop-cart.html">Shop Cart</a></li>
                    <li><a className="dropdown-item" href="shop-checkout.html">Shop Checkout</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact-us.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="add-listing d-none d-sm-block">
              <a className="btn btn-primary" href="#"><i className="fa fa-address-book"></i>Monse</a>
            </div>
          </nav>
        </div>
      </div>
    </header>




       </div>


    );
}








export default Header;