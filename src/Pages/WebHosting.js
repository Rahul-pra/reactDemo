import React from 'react';
import { Helmet } from "react-helmet";
import Banner from '../Components/Banner';
import HostingPackage from '../Components/HostingPackage';
import Feature from '../Components/Feature';
import HostingPlan from '../Components/HostingPlan';
import Testimonials from "../Components/Testimonials";
import Client from "../Components/Client";

class WebHosting extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Web Hosting</title>
                </Helmet>

                <Banner title={'Web Hosting'} discription={'Web Hosting Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />

                <HostingPlan />

                <Feature />

                <HostingPackage />

                <Testimonials />

                <Client />
            </>
        )
    }
}
export default WebHosting;