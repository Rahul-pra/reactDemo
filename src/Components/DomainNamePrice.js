import React from 'react';

class DomainNamePrice extends React.Component {
    render() {
        return (
            <>
                <div class="section wb">
                    <div class="container">
                        <div class="section-title text-center">
                            <h3>Ready to get started?</h3>
                            <div class="dmoain-pricing">
                                <div class="table-responsive-sm">
                                    <table>
                                        <thead>
                                            <tr class="domain-head">
                                                <th scope="col">
                                                    Domain Name
									            </th>
                                                <th scope="col">
                                                    Registration Pricing
									            </th>
                                                <th scope="col">
                                                    Renewal Pricing
									            </th>
                                                <th scope="col">
                                                    Transfer Pricing
									            </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="DOMAIN NAME">.com</td>
                                                <td data-label="registration pricing">15.00 / yr</td>
                                                <td data-label="renewal pricing">$30 / yr</td>
                                                <td data-label="transfer-price">$45.00</td>
                                            </tr>
                                            <tr>
                                                <td data-label="DOMAIN NAME">.net</td>
                                                <td data-label="registration pricing">15.00 / yr</td>
                                                <td data-label="renewal pricing">$20 / yr</td>
                                                <td data-label="transfer-price">$45.00</td>
                                            </tr>
                                            <tr>
                                                <td data-label="DOMAIN NAME">.org</td>
                                                <td data-label="registration pricing">15.00 / yr</td>
                                                <td data-label="renewal pricing">$19 / yr</td>
                                                <td data-label="transfer-price">$45.00</td>
                                            </tr>
                                            <tr>
                                                <td data-label="DOMAIN NAME">.in</td>
                                                <td data-label="registration pricing">15.00 / yr</td>
                                                <td data-label="renewal pricing">$18 / yr</td>
                                                <td data-label="transfer-price">$45.00</td>
                                            </tr>
                                            <tr>
                                                <td data-label="DOMAIN NAME">.biz</td>
                                                <td data-label="registration pricing">15.00 / yr</td>
                                                <td data-label="renewal pricing">$17 / yr</td>
                                                <td data-label="transfer-price">$45.00</td>
                                            </tr>
                                            <tr>
                                                <td data-label="Acount">.info</td>
                                                <td data-label="registration pricing">15.00 / yr</td>
                                                <td data-label="renewal pricing">$16 / yr</td>
                                                <td data-label="transfer-price">$45.00</td>
                                            </tr>
                                            <tr>
                                                <td data-label="DOMAIN NAME">.co.uk</td>
                                                <td data-label="registration pricing">15.00 / yr</td>
                                                <td data-label="renewal pricing">$15 / yr</td>
                                                <td data-label="transfer-price">$45.00</td>
                                            </tr>
                                            <tr>
                                                <td data-label="DOMAIN NAME">.name</td>
                                                <td data-label="registration pricing">15.00 / yr</td>
                                                <td data-label="renewal pricing">$14 / yr</td>
                                                <td data-label="transfer-price">$45.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end title --> */}
                    </div>
                    {/* <!-- end container --> */}
                </div>
                {/* <!-- end section --> */}
            </>
        )
    }
}
export default DomainNamePrice;