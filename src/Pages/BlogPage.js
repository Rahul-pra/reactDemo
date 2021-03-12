import React from 'react';
import { Helmet } from "react-helmet";
import Banner from '../Components/Banner';
import About from '../Components/About';

class BlogPage extends React.Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>BlogPage</title>
                </Helmet>

                <Banner title={'BlogPage'} discription={'BlogPage Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />

                <About isTitle={false} titleName={'Blog'} />
            </>
        )
    }
}
export default BlogPage;