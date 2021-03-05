import React from 'react';
import { Helmet } from "react-helmet";
import Banner from '../Components/Banner';
import Testimonials from "../Components/Testimonials";
import Client from "../Components/Client";
import DomainNamePrice from '../Components/DomainNamePrice';
import HostingPlan from '../Components/HostingPlan';


class PricingPage extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Pricing</title>
                </Helmet>

                <Banner title={'Pricing'} discription={'Pricing Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />

                <HostingPlan />

                <DomainNamePrice />

                <Testimonials />

                <Client />
            </>
        )
    }
}
export default PricingPage;