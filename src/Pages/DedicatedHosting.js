import React from 'react';
import { Helmet } from "react-helmet";
import Banner from '../Components/Banner';
import HostingPackage from '../Components/HostingPackage';
import Feature from '../Components/Feature';
import HostingPlan from '../Components/HostingPlan';
import Testimonials from "../Components/Testimonials";
import Client from "../Components/Client";

class DedicatedHosting extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Dedicated Hosting</title>
                </Helmet>

                <Banner title={'Dedicated Hosting'} discription={'Dedicated Hosting Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />

                <HostingPlan />

                <Feature />

                <HostingPackage />

                <Testimonials />

                <Client />
            </>
        )
    }
}
export default DedicatedHosting;