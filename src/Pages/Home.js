import React from 'react';
import { Helmet } from "react-helmet";
import Carousel from "../Components/Carousel";
import About from "../Components/About";
import Testimonials from '../Components/Testimonials';
import Client from '../Components/Client';
import Calculation from '../Components/Calculation';
import History from '../Components/History';
import Pricing from '../Components/Pricing';
import Domain from '../Components/Domain';

class Home extends React.Component {
   render() {
      return (
         <>
            <Helmet>
               <title>Home</title>
            </Helmet>

            <Carousel />

            <Domain />

            <About isTitle={true} titleName={'About'} />

            <History />

            <Calculation />

            <Pricing />

            <Testimonials />

            <Client />

         </>
      )
   }
}
export default Home;