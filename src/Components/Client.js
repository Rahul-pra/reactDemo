import React from 'react';
import Testimonials from './Testimonials';

class Client extends React.Component {
    render() {
        return (
            <>
                <div className="parallax section dbcolor">
                    <div className="container">
                        <div className="row logos">
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="../images/logo_01.png" alt="" className="img-repsonsive" /></a>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="../images/logo_02.png" alt="" className="img-repsonsive" /></a>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="../images/logo_03.png" alt="" className="img-repsonsive" /></a>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="../images/logo_04.png" alt="" className="img-repsonsive" /></a>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="../images/logo_05.png" alt="" className="img-repsonsive" /></a>
                            </div>
                            <div className="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                                <a href="#"><img src="../images/logo_06.png" alt="" className="img-repsonsive" /></a>
                            </div>
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
export default Client;