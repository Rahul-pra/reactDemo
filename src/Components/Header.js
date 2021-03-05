import React from 'react';
import { NavLink } from 'react-router-dom';

const loader = document.querySelector('#preloader');

class Header extends React.Component {

    state = {
        links: [
            {
                id: 1,
                name: "Home",
                to: "/home",
                className: "nav-item",
                isDropdown: false
            },
            {
                id: 2,
                name: "About Us",
                to: "/about",
                className: "nav-item",
                isDropdown: false
            },
            {
                id: 3,
                name: "Features",
                to: "/features",
                className: "nav-item",
                isDropdown: false
            },
            {
                id: 4,
                name: "Hosting",
                to: "#",
                className: "nav-item dropdown",
                isDropdown: true,
                sublinks: [
                    {
                        id: 5,
                        name: "Web Hosting",
                        to: "/web-hosting",
                    },
                    {
                        id: 6,
                        name: "Cloud Server",
                        to: "/cloud-server",
                    },
                    {
                        id: 7,
                        name: "Dedicated Hosting",
                        to: "/dedicated-hosting",
                    },
                ]
            },
            {
                id: 8,
                name: "Domain",
                to: "/domain",
                className: "nav-item",
                isDropdown: false
            },
            {
                id: 9,
                name: "Pricing",
                to: "/pricing",
                className: "nav-item",
                isDropdown: false
            },
            {
                id: 10,
                name: "Contact",
                to: "/contact",
                className: "nav-item",
                isDropdown: false
            },
        ],
        activeLink: null
    };

    handleClick = id => {
        this.setState({ activeLink: id });
    };


    render() {
        return (
            <>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header tit-up">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title">Customer Login</h4>
                            </div>
                            <div className="modal-body customer-box">
                                {/* <!-- Nav tabs --> */}
                                <ul className="nav nav-tabs">
                                    <li><a className="active" href="#Login" data-toggle="tab">Login</a></li>
                                    <li><a href="#Registration" data-toggle="tab">Registration</a></li>
                                </ul>
                                {/* <!-- Tab panes --> */}
                                <div className="tab-content">
                                    {/* <!-- login Tab panes --> */}
                                    <div className="tab-pane active" id="Login">
                                        <form role="form" className="form-horizontal">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input className="form-control" id="email1" placeholder="Name" type="text"></input>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input className="form-control" id="exampleInputPassword1" placeholder="Email"
                                                        type="email"></input>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-10">
                                                    <button type="submit" className="btn btn-light btn-radius btn-brd grd1">
                                                        Submit
                                                    </button>
                                                    <a className="for-pwd" href="javascript:;">
                                                        Forgot your password?
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- Registration Tab panes --> */}
                                    <div className="tab-pane" id="Registration">
                                        <form role="form" className="form-horizontal">
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input className="form-control" placeholder="Name" type="text"></input>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input className="form-control" id="email" placeholder="Email" type="email"></input>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input className="form-control" id="mobile" placeholder="Mobile" type="email"></input>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <input className="form-control" id="password" placeholder="Password"
                                                        type="password"></input>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-10">
                                                    <button type="button" className="btn btn-light btn-radius btn-brd grd1">
                                                        Save &amp; Continue
                                                    </button>
                                                    <button type="button" data-dismiss="modal" aria-hidden="true" className="btn btn-light btn-radius btn-brd grd1">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- LOADER --> */}
                {/* <div id="preloader">
                    <div className="loader-container">
                        <div className="progress-br float shadow">
                            <div className="progress__item"></div>
                        </div>
                    </div>
                </div> */}
                {/* <!-- END LOADER -->

                <!-- Start header --> */}
                <header className="top-navbar">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html">
                                <img src="../images/logo-hosting.png" alt="" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbars-host">
                                <ul className="navbar-nav ml-auto">
                                    {this.state.links.map(link => {
                                        if (link.isDropdown === false) {
                                            return (
                                                <li
                                                    onClick={() => this.handleClick(link.id)}
                                                    className={
                                                        link.className +
                                                        (link.id === this.state.activeLink ? " active" : "")
                                                    }
                                                >
                                                    <NavLink to={link.to} className="nav-link" activeClassName="active">{link.name}</NavLink>
                                                </li>
                                            );
                                        } else {
                                            return (
                                                <li
                                                    onClick={() => this.handleClick(link.id)}
                                                    className={
                                                        link.className +
                                                        (link.id === this.state.activeLink ? " active" : "")
                                                    }
                                                >
                                                    <NavLink href="#dropdown" id="dropdown-a" data-toggle="dropdown" to={link.to} className="nav-link" activeClassName="active">{link.name}</NavLink>
                                                    <div className="dropdown-menu" aria-labelledby="dropdown-a">
                                                        {link.sublinks.map(data => {
                                                            return (
                                                                <NavLink to={data.to} className="dropdown-item" activeClassName="active">{data.name}</NavLink>
                                                            )
                                                        })}
                                                    </div>
                                                </li>
                                            );
                                        }
                                    })}
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li><a className="hover-btn-new log" href="#login" data-toggle="modal" data-target="#login"><span>Customer Login</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* <!-- End header --> */}
            </>
        );
    }
}

export default Header