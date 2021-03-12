import React from 'react';
import { Helmet } from "react-helmet";
import Banner from '../Components/Banner';
import HostingPackage from '../Components/HostingPackage';
import Feature from '../Components/Feature';
import HostingPlan from '../Components/HostingPlan';
import Testimonials from "../Components/Testimonials";
import Client from "../Components/Client";

class CloudServer extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Cloude Server</title>
                </Helmet>

                <Banner title={'Cloude Server'} discription={'Cloude Server Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />

                <HostingPlan />

                <Feature />

                <HostingPackage />

                <Testimonials />

                <Client />
            </>
        )
    }
}
export default CloudServer;