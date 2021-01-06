import React from 'react'; 
  
class Header extends React.Component { 

    render(){
        return (
            <header class="top-navbar">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="index.html">
                            <img src="../images/logo-hosting.png" alt="" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbars-host">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active"><a class="nav-link" href="/home">Home</a></li>
                                <li class="nav-item"><a class="nav-link" href="/about">About Us</a></li>
                                <li class="nav-item"><a class="nav-link" href="/features">Features </a></li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#dropdown" id="dropdown-a" data-toggle="dropdown">Hosting </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdown-a">
                                        <a class="dropdown-item" href="hosting.html">Web Hosting </a>
                                        <a class="dropdown-item" href="hosting.html">WordPress Hosting </a>
                                        <a class="dropdown-item" href="hosting.html">Cloud Server </a>
                                        <a class="dropdown-item" href="hosting.html">Reseller Package </a>
                                        <a class="dropdown-item" href="hosting.html">Dedicated Hosting </a>
                                    </div>
                                </li>
                                <li class="nav-item"><a class="nav-link" href="domain.html">Domain</a></li>
                                <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li>
                                <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li><a class="hover-btn-new log" href="#login" data-toggle="modal" data-target="#login"><span>Customer Login</span></a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
      }
}   
  
export default Header