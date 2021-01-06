import React from 'react';
  
class Footer extends React.Component { 

    render(){
        return (
            <>
                <footer class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-xs-12">
                                <div class="widget clearfix">
                                    <div class="widget-title">
                                        <h3>About US</h3>
                                    </div>
                                    <p> Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
                                    <p>Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-xs-12">
                                <div class="widget clearfix">
                                    <div class="widget-title">
                                        <h3>Information Link</h3>
                                    </div>
                                    <ul class="footer-links">
                                        <li><a href="/home">Home</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                        <li><a href="/pricing">Pricing</a></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/faq">Faq</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-lg-4 col-md-4 col-xs-12">
                                <div class="widget clearfix">
                                    <div class="widget-title">
                                        <h3>Contact Details</h3>
                                    </div>

                                    <ul class="footer-links">
                                        <li><a href="mailto:info@yopmail.com">info@yopmail.com</a></li>
                                        <li><a href="https://www.google.com/">www.google.com</a></li>
                                        <li>PO Box 16122 Collins Street West Victoria 8007 Australia</li>
                                        <li>+61 3 8376 6284</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </footer>

                <div class="copyrights">
                    <div class="container">
                        <div class="footer-distributed">
                            <div class="footer-left">                   
                                <p class="footer-company-name">All Rights Reserved. &copy; 2021 <a href="https://www.google.com/">QuickCloud</a> Design By : <a href="https://html.design/">html design</a></p>
                            </div>

                            <div class="footer-right">
                                <ul class="footer-links-soi">
                                    <li><a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a></li>
                                    {/* <li><a href="#"><i class="fa fa-github"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/home" id="scroll-to-top" class="dmtop global-radius"><i class="fa fa-angle-up"></i></a>
            </>
        );
      }
}   
  
export default Footer;