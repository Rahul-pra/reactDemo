import React from 'react';
import { Helmet } from "react-helmet";
import Banner from '../Components/Banner';
import Client from "../Components/Client";


class Contact extends React.Component {
    state = {
        fields: {},
        errors: {}
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //First Name
        if (!fields["first_name"]) {
            formIsValid = false;
            errors["first_name"] = "Cannot be empty";
        }

        if (typeof fields["first_name"] !== "undefined") {
            if (!fields["first_name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["first_name"] = "Only letters";
            }
        }

        //Last Name
        if (!fields["last_name"]) {
            formIsValid = false;
            errors["last_name"] = "Cannot be empty";
        }

        if (typeof fields["last_name"] !== "undefined") {
            if (!fields["last_name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["last_name"] = "Only letters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        //Phone
        if (!fields["phone"]) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }

        if (typeof fields["phone"] !== "undefined") {
            if (!fields["phone"].match(/^[0-9]+$/)) {
                formIsValid = false;
                errors["phone"] = "Only number";
            }
        }

        //Comments
        if (!fields["comments"]) {
            formIsValid = false;
            errors["comments"] = "Cannot be empty";
        }

        if (typeof fields["comments"] !== "undefined") {

            if (this.state.fields["comments"].length < 15) {
                formIsValid = false;
                errors["comments"] = "More than 15";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            alert("Form submitted");
            console.log("formdata ==>", this.state.fields)
        } else {
            alert("Form has errors.")
        }

    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }


    render() {
        return (
            <>
                <Helmet>
                    <title>Contact</title>
                </Helmet>
                <Banner title={'Contact'} discription={'Contact Lorem Ipsum Dolroin Gravida Nibh Vel Velit.'} />

                <div id="support" class="section wb">
                    <div class="container-fulid">
                        <div class="section-title text-center">
                            <h3>Need Help? Sure we are Online!</h3>
                            <p class="lead">
                                Let us give you more details about the special offer website you want us. Please fill out the form below.
                            <br />We have million of website owners who happy to work with us!
                            </p>
                        </div>
                        {/* <!-- end title --> */}

                        <div class="row">
                            <div class="col-xl-6 col-md-12 col-sm-12">
                                <div class="contact_form">
                                    <div id="message"></div>
                                    <form id="contactform" class="" onSubmit={this.contactSubmit.bind(this)} name="contactform" method="post">
                                        <fieldset class="row row-fluid">
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" name="first_name" id="first_name" class="form-control" placeholder="First Name" onChange={this.handleChange.bind(this, "first_name")} value={this.state.fields["first_name"]}></input>
                                                <span style={{ color: "red" }}>{this.state.errors["first_name"]}</span>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" name="last_name" id="last_name" class="form-control" placeholder="Last Name" onChange={this.handleChange.bind(this, "last_name")} value={this.state.fields["last_name"]}></input>
                                                <span style={{ color: "red" }}>{this.state.errors["last_name"]}</span>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <input type="email" name="email" id="email" class="form-control" placeholder="Your Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}></input>
                                                <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                <input type="text" name="phone" id="phone" class="form-control" placeholder="Your Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}></input>
                                                <span style={{ color: "red" }}>{this.state.errors["phone"]}</span>
                                            </div>
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <textarea class="form-control" name="comments" id="comments" rows="6" placeholder="Give us more details.." onChange={this.handleChange.bind(this, "comments")} value={this.state.fields["comments"]}></textarea>
                                                <span style={{ color: "red" }}>{this.state.errors["comments"]}</span>
                                            </div>
                                            <div class="text-center pd">
                                                <button type="submit" value="SEND" id="submit" class="btn btn-light btn-radius btn-brd grd1 btn-block">Get a Quote</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- end col --> */}
                            <div class="col-xl-6 col-md-12 col-sm-12">
                                <div class="map-box">
                                    {/* <div id="custom-places" class="small-map"></div> */}
                                    <iframe class="small-map" title="map" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1175&amp;height=522&amp;hl=en&amp;q=%20Collins%20Street%20West%20Victoria%20Australia+()&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=07b3097ad3ff79b249fe2fc225e0a41b77cb7ce0'></script>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container --> */}
                </div>
                {/* <!-- end section --></div> */}

                <Client />

                <Helmet>
                    <script src="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyCKjLTXdq6Db3Xit_pW_GK4EXuPRtnod4o"></script>
                    {/* <!-- Mapsed JavaScript --> */}
                    <script src="js/mapsed.js"></script>
                    <script src="js/01-custom-places-example.js"></script>
                </Helmet>
            </>
        )
    }
}
export default Contact;