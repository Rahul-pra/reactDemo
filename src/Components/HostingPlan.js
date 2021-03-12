import React from 'react';

class HostingPlan extends React.Component {
    render() {
        return (
            <>
                <div id="pricing" class="section lb">
                    <div class="container">
                        <div class="section-title text-center">
                            <h3>Get the Perfect Hosting</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae ipsum sed ex finibus lobortis ut suscipit arcu. Ut facilisis varius leo, id tincidunt justo. Nunc eget nisl eu urna egestas tempus ut et nunc. </p>
                        </div>
                        {/* <!-- end title --> */}

                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <div class="pricingTable">
                                    <div class="pricingTable-header">
                                        <span class="heading">
                                            <h3>Standard</h3>
                                        </span>
                                        <span class="price-value">$15<span class="month">month</span> <span>Lorem ipsum </span><span>Lorem ipsum dolor sit amet</span></span>
                                    </div>

                                    <div class="pricingContent">
                                        <i class="fa fa-adjust"></i>
                                        <ul>
                                            <li>50GB Disk Space</li>
                                            <li>50 Email Accounts</li>
                                            <li>50GB Monthly Bandwidth</li>
                                            <li>10 subdomains</li>
                                            <li>50 Domains</li>
                                        </ul>
                                    </div>
                                    {/* <!-- /  CONTENT BOX--> */}

                                    <div class="pricingTable-sign-up">
                                        <a href="#" class="hover-btn-new"><span>sign up</span></a>
                                    </div>
                                    {/* <!-- BUTTON BOX--> */}
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="pricingTable pink">
                                    <div class="pricingTable-header">
                                        <span class="heading">
                                            <h3>Business</h3>
                                        </span>
                                        <span class="price-value">$30<span class="month">month</span> <span>Lorem ipsum</span><span>Lorem ipsum dolor sit amet</span></span>
                                    </div>

                                    <div class="pricingContent">
                                        <i class="fa fa-briefcase"></i>
                                        <ul>
                                            <li>70GB Disk Space</li>
                                            <li>70 Email Accounts</li>
                                            <li>70GB Monthly Bandwidth</li>
                                            <li>30 subdomains</li>
                                            <li>70 Domains</li>
                                        </ul>
                                    </div>
                                    {/* <!-- /  CONTENT BOX--> */}

                                    <div class="pricingTable-sign-up">
                                        <a href="#" class="hover-btn-new"><span>sign up</span></a>
                                    </div>
                                    {/* <!-- BUTTON BOX--> */}
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <div class="pricingTable orange">
                                    <div class="pricingTable-header">
                                        <span class="heading">
                                            <h3>Premium</h3>
                                        </span>
                                        <span class="price-value">$45<span class="month">month</span> <span>Lorem ipsum</span><span>Lorem ipsum dolor sit amet</span></span>
                                    </div>

                                    <div class="pricingContent">
                                        <i class="fa fa-cube"></i>
                                        <ul>
                                            <li>80GB Disk Space</li>
                                            <li>80 Email Accounts</li>
                                            <li>80GB Monthly Bandwidth</li>
                                            <li>40 subdomains</li>
                                            <li>80 Domains</li>
                                        </ul>
                                    </div>
                                    {/* <!-- /  CONTENT BOX--> */}

                                    <div class="pricingTable-sign-up">
                                        <a href="#" class="hover-btn-new"><span>sign up</span></a>
                                    </div>
                                    {/* <!-- BUTTON BOX--> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- end container --> */}
                </div>
                {/* <!-- end section --> */}
            </>
        )
    }
}
export default HostingPlan;