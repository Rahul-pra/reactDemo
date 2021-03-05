import React from 'react';

class Domain extends React.Component {

    state = {
        isTitleDisplay: false
    }

    componentDidMount = async () => {
        if (this.props.isTitleDisplay) {
            await this.setState({ isTitleDisplay: this.props.isTitleDisplay })
        }
    }

    render() {
        return (
            <>
                <div id="domain" className="section wb">
                    <div className="container">
                        {this.state.isTitleDisplay &&
                            <div class="section-title row text-center">
                                <div class="col-md-8 offset-md-2">
                                    <h3>Domain Find</h3>
                                    <p class="lead">Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem!</p>
                                </div>
                            </div>
                            /* <!-- end title --> */
                        }
                        <div className="row text-center">

                            <div className="col-lg-12">
                                <form className="checkdomain form-inline">
                                    <div className="checkdomain-wrapper">
                                        <div className="form-group">
                                            <label className="sr-only" for="domainnamehere">Domain name</label>
                                            <input type="text" className="form-control" id="domainnamehere"
                                                placeholder="Enter domain name here.."></input>
                                            <button type="submit" className="btn btn-primary grd1"><i className="fa fa-search"></i></button>
                                        </div>
                                        <hr></hr>
                                        <div className="clearfix"></div>
                                        <div className="checkbox checkbox-warning">
                                            <input id="domaincom" type="checkbox" className="styled" checked></input>
                                            <label for="domaincom">.com</label>
                                        </div>
                                        <div className="checkbox checkbox-warning">
                                            <input id="domainnet" type="checkbox" className="styled" checked></input>
                                            <label for="domainnet">.net</label>
                                        </div>
                                        <div className="checkbox checkbox-warning">
                                            <input id="domainorg" type="checkbox" className="styled"></input>
                                            <label for="domainorg">.org</label>
                                        </div>
                                        <div className="checkbox checkbox-warning">
                                            <input id="domaintv" type="checkbox" className="styled"></input>
                                            <label for="domaintv">.tv</label>
                                        </div>
                                        <div className="checkbox checkbox-warning">
                                            <input id="domaininfo" type="checkbox" className="styled"></input>
                                            <label for="domaininfo">.info</label>
                                        </div>
                                    </div>
                                    {/* <!-- end checkdomain-wrapper --> */}
                                </form>
                            </div>
                            <div className="col-lg-12">
                                <div className="customwidget text-center">
                                    <h1>Find Your Domain</h1>
                                    <p>With our awesome domain name search form, you can search any domain names with tons of
                            extensions.</p>
                                    <p>Pursuing high quality standards, my greatest efforts are focused on producing semantic,
                                    SEO-friendly, valid and clean code. In order to stay effective and relevant in this
                                    constantly evolving sphere I always try to be in touch with the latest news and recent
                            approaches in programming.</p>
                                    <ul className="list-inline">
                                        <li><i className="fa fa-check"></i> 20k Domains Sold in 2017</li>
                                        <li><i className="fa fa-check"></i> 4k Website Created</li>
                                    </ul>
                                    {/* <!-- end list --> */}
                                    <a href="#" className="hover-btn-new"><span>Hosting Packages</span></a>
                                </div>
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
export default Domain;