import React from 'react';
import { Helmet } from "react-helmet";
import Banner from '../Components/Banner';
import Domain from '../Components/Domain';
import DomainName from '../Components/DomainName';
import Testimonials from "../Components/Testimonials";
import Client from "../Components/Client";
import DomainNamePrice from '../Components/DomainNamePrice';

class DomainPage extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Domain</title>
                </Helmet>

                <Banner title={'Domain'} discription={'Domain Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />


                <Domain isTitleDisplay={true} />

                <DomainName />

                <DomainNamePrice />

                <Testimonials />

                <Client />
            </>
        )
    }
}
export default DomainPage;