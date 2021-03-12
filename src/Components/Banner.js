import React from 'react';

class Banner extends React.Component {

    render() {
        return (
            <>
                <div className="all-title-box">
                    <div className="container text-center">
                        <h1>{this.props.title}<span className="m_1">{this.props.discription}</span></h1>
                    </div>
                </div>
            </>
        )
    }
}
export default Banner;