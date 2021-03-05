import React from 'react';
import { Helmet } from 'react-helmet';
import About from '../Components/About';
import Banner from '../Components/Banner';
import Client from '../Components/Client';
import Testimonials from '../Components/Testimonials';

class AboutUs extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>About Us</title>
                </Helmet>
                <Banner title={'About Us'} discription={'About Us Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />

                <About />

                <Testimonials />

                <Client />
            </>
        )
    }
}
export default AboutUs;