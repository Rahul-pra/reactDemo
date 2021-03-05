import React from 'react';

class Calculation extends React.Component {
    render() {
        return (
            <>
                <div className="section cl">
                    <div className="container">
                        <div className="row text-left stat-wrap">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i
                                    className="flaticon-hosting"></i></span>
                                <p className="stat_count">12000</p>
                                <h3>Hosted Sites</h3>
                            </div>
                            {/* <!-- end col --> */}

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i
                                    className="flaticon-domain-registration"></i></span>
                                <p className="stat_count">24000</p>
                                <h3>Sold Domains</h3>
                            </div>
                            {/* <!-- end col --> */}

                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <span data-scroll className="global-radius icon_wrap effect-1 alignleft"><i
                                    className="flaticon-mail"></i></span>
                                <p className="stat_count">5000</p>
                                <h3>Email Accounts</h3>
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
export default Calculation;