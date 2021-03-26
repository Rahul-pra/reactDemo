import React from 'react';
import { withTranslation } from 'react-i18next';


class Banner extends React.Component {

    render() {
        const { t } = this.props;

        console.log("t ==>", t)

        return (
            <>
                <div className="all-title-box">
                    <div className="container text-center">
                        <h1>{this.props.title}<span className="m_1">{this.props.discription}</span></h1>
                        {/** translate  */}
                        <span className="m_1" style={{ color: 'white' }} >{t('title')}</span>
                        <span className="m_1" style={{ color: 'white' }}>{t('description.part1')}</span>
                        <span className="m_1" style={{ color: 'white' }}>{t('description.part2')}</span>
                    </div>
                </div>
            </>
        )
    }
}
export default withTranslation()(Banner);