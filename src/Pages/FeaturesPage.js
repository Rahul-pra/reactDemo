import React from 'react';
import { Helmet } from 'react-helmet';
import Calculation from "../Components/Calculation";
import Testimonials from "../Components/Testimonials";
import Client from "../Components/Client";
import Banner from '../Components/Banner';
import Feature from '../Components/Feature';

class FeaturesPage extends React.Component {
   render() {
      return (
         <>
            <Helmet>
               <title>Features</title>
            </Helmet>

            <Banner title={'Features'} discription={'Features Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />

            <Feature />

            <Calculation />

            <Testimonials />

            <Client />
         </>
      )
   }
}
export default FeaturesPage;