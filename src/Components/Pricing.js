import React from 'react';

class Pricing extends React.Component {
    render() {
        return (
            <>
                <div id="pricing" className="section lb">
                    <div className="container">
                        <div className="section-title text-center">
                            <h3>Ready to get started?</h3>
                            <p>
                                Lorem ipsum dolor sit aet, consectetur adipisicing lit sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua.
                            </p>
                        </div>
                        {/* <!-- end title --> */}

                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="message-box">
                                    <ul className="nav nav-pills nav-stacked" id="myTabs">
                                        <li><a className="active" href="#tab1" data-toggle="pill">Monthly Subscription</a></li>
                                        <li><a href="#tab2" data-toggle="pill">Yearly Subscription</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- end col --> */}
                        </div>

                        <hr className="invis" />

                        <div className="row">
                            <div className="col-md-12">
                                <div className="tab-content">
                                    <div className="tab-pane active fade show" id="tab1">
                                        <div className="row text-center">
                                            <div className="col-md-4">
                                                <div className="pricing-table pricing-table-highlighted">
                                                    <div className="pricing-table-header grd1">
                                                        <h2>Shared Hosting</h2>
                                                        <h3>$85/month</h3>
                                                    </div>
                                                    <div className="pricing-table-space"></div>
                                                    <div className="pricing-table-features">
                                                        <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                                        <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                                        <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                                        <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                                        <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support
                                            </p>
                                                    </div>
                                                    <div className="pricing-table-sign-up">
                                                        <a href="#" className="hover-btn-new"><span>Order Now</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="pricing-table pricing-table-highlighted">
                                                    <div className="pricing-table-header grd1">
                                                        <h2>WordPress Hosting</h2>
                                                        <h3>$59/month</h3>
                                                    </div>
                                                    <div className="pricing-table-space"></div>
                                                    <div className="pricing-table-features">
                                                        <p><i className="fa fa-envelope-o"></i> <strong>150</strong> Email Addresses</p>
                                                        <p><i className="fa fa-rocket"></i> <strong>65GB</strong> of Storage</p>
                                                        <p><i className="fa fa-database"></i> <strong>60</strong> Databases</p>
                                                        <p><i className="fa fa-link"></i> <strong>30</strong> Domains</p>
                                                        <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support
                                            </p>
                                                    </div>
                                                    <div className="pricing-table-sign-up">
                                                        <a href="#" className="hover-btn-new"><span>Order Now</span></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="pricing-table pricing-table-highlighted">
                                                    <div className="pricing-table-header grd1">
                                                        <h2>Reseller Hosting</h2>
                                                        <h3>$85/month</h3>
                                                    </div>
                                                    <div className="pricing-table-space"></div>
                                                    <div className="pricing-table-features">
                                                        <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                                        <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                                        <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                                        <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                                        <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support
                                            </p>
                                                    </div>
                                                    <div className="pricing-table-sign-up">
                                                        <a href="#" className="hover-btn-new"><span>Order Now</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end row --> */}
                                    </div>
                                    {/* <!-- end pane --> */}

                                    <div className="tab-pane fade" id="tab2">
                                        <div className="row text-center">
                                            <div className="col-md-4">
                                                <div className="pricing-table pricing-table-highlighted">
                                                    <div className="pricing-table-header grd1">
                                                        <h2>Shared Hosting</h2>
                                                        <h3>$85/Year</h3>
                                                    </div>
                                                    <div className="pricing-table-space"></div>
                                                    <div className="pricing-table-features">
                                                        <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                                        <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                                        <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                                        <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                                        <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                                    </div>
                                                    <div className="pricing-table-sign-up">
                                                        <a href="#" className="hover-btn-new"><span>Order Now</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="pricing-table pricing-table-highlighted">
                                                    <div className="pricing-table-header grd1">
                                                        <h2>WordPress Hosting</h2>
                                                        <h3>$59/Year</h3>
                                                    </div>
                                                    <div className="pricing-table-space"></div>
                                                    <div className="pricing-table-features">
                                                        <p><i className="fa fa-envelope-o"></i> <strong>150</strong> Email Addresses</p>
                                                        <p><i className="fa fa-rocket"></i> <strong>65GB</strong> of Storage</p>
                                                        <p><i className="fa fa-database"></i> <strong>60</strong> Databases</p>
                                                        <p><i className="fa fa-link"></i> <strong>30</strong> Domains</p>
                                                        <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                                    </div>
                                                    <div className="pricing-table-sign-up">
                                                        <a href="#" className="hover-btn-new"><span>Order Now</span></a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-4">
                                                <div className="pricing-table pricing-table-highlighted">
                                                    <div className="pricing-table-header grd1">
                                                        <h2>Reseller Hosting</h2>
                                                        <h3>$85/Year</h3>
                                                    </div>
                                                    <div className="pricing-table-space"></div>
                                                    <div className="pricing-table-features">
                                                        <p><i className="fa fa-envelope-o"></i> <strong>250</strong> Email Addresses</p>
                                                        <p><i className="fa fa-rocket"></i> <strong>125GB</strong> of Storage</p>
                                                        <p><i className="fa fa-database"></i> <strong>140</strong> Databases</p>
                                                        <p><i className="fa fa-link"></i> <strong>60</strong> Domains</p>
                                                        <p><i className="fa fa-life-ring"></i> <strong>24/7 Unlimited</strong> Support</p>
                                                    </div>
                                                    <div className="pricing-table-sign-up">
                                                        <a href="#" className="hover-btn-new"><span>Order Now</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- end row --> */}
                                    </div>
                                    {/* <!-- end pane --> */}
                                </div>
                                {/* <!-- end content --> */}
                            </div>
                            {/* <!-- end col --> */}
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container --> */}
                </div>
                {/* <!-- end section --> */}
            </>
        )
    }
}
export default Pricing;