import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core'
import * from 'react-bootstrap';

import 'bootstrap/dist/js/bootstrap.bundle'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import logo from './dentist.jpg'
import menu from './menu.png'
function Header() {
    return (

       <div>
<div className="container-fluid">
    <div className="row">
        <div className="col-2 collapse show d-md-flex bg-light pt-2 pl-0 min-vh-100" id="sidebar">
            <ul className="nav flex-column flex-nowrap overflow-hidden">
                <li className="nav-item">
                    <a className="nav-link text-truncate" href="#"><i className="fa fa-home"></i> <span className="d-none d-sm-inline">Inicio</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link collapsed text-truncate" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i className="fa fa-table"></i> <span className="d-none d-sm-inline">Pacientes</span></a>
                    <div className="collapse" id="submenu1" aria-expanded="false">
                        <ul className="flex-column pl-2 nav">
                            <li className="nav-item"><a className="nav-link py-0" href="#"><span>Orders</span></a></li>
                            <li className="nav-item">
                                <a className="nav-link  text-truncate collapsed py-1" href="#submenu1sub1" data-toggle="collapse" data-target="#submenu1sub1"><span>Citas</span></a>
                                <div className="collapse" id="submenu1sub1" aria-expanded="false">
                                    <ul className="flex-column nav pl-4">
                                        <li className="nav-item">
                                            <a className="nav-link p-1 text-truncate" href="#">
                                                <i className="fa fa-fw fa-clock-o"></i> Daily </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-1 text-truncate" href="#">
                                                <i className="fa fa-fw fa-dashboard"></i> Dashboard </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-1 text-truncate" href="#">
                                                <i className="fa fa-fw fa-bar-chart"></i> Charts </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link p-1 text-truncate" href="#">
                                                <i className="fa fa-fw fa-compass"></i> Areas </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="nav-item"><a className="nav-link text-truncate" href="#"><i className="fa fa-bar-chart"></i> <span className="d-none d-sm-inline">Citas</span></a></li>
                <li className="nav-item"><a className="nav-link text-truncate" href="#"><i className="fa fa-download"></i> <span className="d-none d-sm-inline">Historico</span></a></li>
            </ul>
        </div>
        <div className="col pt-2">
            <h2>
                <a href="" data-target="#sidebar" data-toggle="collapse" className="d-md-none"><i className="fa fa-bars"></i></a> Content </h2>
            <h6 className="hidden-sm-down">Shrink page width to see sidebar collapse</h6>
            <p>Codeply editor wolf moon retro jean shorts chambray sustainable roof party. Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park Godard kogi, next level irony ennui twee squid fap selvage. Meggings flannel Brooklyn literally small batch, mumblecore PBR try-hard kale chips. Brooklyn vinyl lumbersexual bicycle rights, viral fap cronut leggings squid chillwave pickled gentrify mustache. 3 wolf moon hashtag church-key Odd Future. Austin messenger bag normcore, Helvetica Williamsburg sartorial tote bag distillery Portland before they sold out gastropub taxidermy Vice.</p>
        </div>
    </div>
</div>




       </div>


    );
}








export default Header;