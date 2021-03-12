import React from 'react';
import { Helmet } from "react-helmet";
import Banner from '../Components/Banner';
import Client from "../Components/Client";
import Collapese from '../Components/Collapese';

class FaqPage extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Faq</title>
                </Helmet>

                <Banner title={'Faq'} discription={'Faq Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />

                <Collapese />

                <Client />
            </>
        )
    }
}
export default FaqPage;