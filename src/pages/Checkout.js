import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import { connect } from 'react-redux';

import LottieComponents from 'react-lottie-player'
import Loading from 'assets/json/lost-screen.json'

import Header from 'parts/Header';
import Button from 'elements/Button'
import Stepper, {
    Numbering,
    Meta,
    MainContent,
    Controller,
} from 'elements/Stepper'

import BookingInformation from 'parts/CheckoutParts/BookingInformation';
import Completed from 'parts/CheckoutParts/Completed';
import Payment from 'parts/CheckoutParts/Payment';

import { submitBooking } from 'store/actions/checkout';

class Checkout extends Component {
    state = {   
        data: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            proofPayment: "",
            bankFrom: "",
            accountHolder: "",
        },
    };

    _Submit = (nextStep) => {
        const { data } = this.state
        const { checkout } = this.props

        const payload = new FormData()
        payload.append("firstName", data.firstName);
        payload.append("lastName", data.lastName);
        payload.append("email", data.email);
        payload.append("phoneNumber", data.phoneNumber);
        payload.append("itemId", checkout._id);
        payload.append("duration", checkout.duration);
        payload.append("bookingStartDate", checkout.date.startDate);
        payload.append("bookingEndDate", checkout.date.endDate);
        payload.append("accountHolder", data.accountHolder);
        payload.append("bankFrom", data.bankFrom);
        payload.append("image", data.proofPayment[0]);
        // payload.append("bankId", checkout.bankId);

        this.props.submitBooking(payload).then( ()=>{
            nextStep()
        })
    }

    onChange = (event) => {
        this.setState({
            data: {
                ...this.state.data,
                [event.target.name]: event.target.value,
            },
        });
    };

    componentDidMount() {
        document.title = "Go Explore - Checkout"
        window.scroll(0, 0);
    }

    render() {
        const { data } = this.state
        const { checkout, page } = this.props

        if(!checkout)
        return (
        <div className="container">
            <div className="row align-items-center justify-content-center text-center" style={{ height: "100vh" }}>
                <div className="col-md-3">
                    <LottieComponents 
                        loop
                        animationData={Loading}
                        play
                        style={{ width: 410, height: 300, marginLeft: "-70px" }}
                    />
                    <h3 className="error-title">Oops! We're lost</h3>
                    <p className="error-desc">
                        The page that you requested is not found in our system.
                    </p>
                    <div>
                        <Button className="btn mt-2" type="button" onClick={() => this.props.history.goBack()} isLight>
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        
        )

        const steps = {
            bookingInformation: {
                title: "Booking Information",
                description: "Please fill up the blank field below",
                content: (
                    <BookingInformation
                        data={data}
                        checkout={checkout}
                        ItemDetails={page[checkout?._id]}
                        onChange={this.onChange}
                    />
                ),
            },

            payment: {
                title: "Payment",
                description: "Kindly follow the instructions below",
                content: (
                    <Payment 
                        data={data}
                        ItemDetails={page[checkout?._id]}
                        checkout={checkout}
                        onChange={this.onChange}
                    />
                ),
            },

            completed: {
                title: "Yay! Completed",
                description: null,
                content: <Completed />
            },
        }
        return (
            <>
                <Header isCentered/>
                <Stepper steps={steps}>
                    {
                        (prevStep, nextStep, CurrentStep, steps) => (
                            <>
                            
                            <Numbering 
                                data={steps}
                                current={CurrentStep}
                                style={{ marginBottom: 35}}
                            />
                            <Meta data={steps} current={CurrentStep} />
                            <MainContent data={steps} current={CurrentStep} />

                            {/* Form Booking Information */}
                            {CurrentStep === "bookingInformation" && (
                                <Controller>
                                    {data.firstName !== "" &&
                                    data.lastName !== "" &&
                                    data.email !== "" &&
                                    data.phoneNumber !== "" && (
                                        <Fade>
                                            <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={nextStep}>
                                                Continue to Book
                                            </Button>
                                        </Fade>
                                    )}
                                    <Button className="btn" type="link" isBlock isLight href={`/details/${checkout._id}`}>
                                        <div className="mt-1">Cancel</div>
                                    </Button>
                                </Controller>
                            )}

                            {/* Form Payments */}
                            {CurrentStep === "payment" && (
                                <Controller>
                                    {data.proofPayment !== "" &&
                                        data.bankFrom !== "" &&
                                        data.accountHolder !== "" && (
                                        <Fade>
                                            <Button className="btn mb-3" type="button" isBlock isPrimary hasShadow onClick={() => this._Submit(nextStep)}>
                                            Continue to Book
                                            </Button>
                                        </Fade>
                                        )}
                                    <Button className="btn" type="button" isBlock isLight onClick={prevStep}>
                                        <div className="mt-1">Cancel</div>
                                    </Button>
                                </Controller>
                                )}

                            {/* Completed */}
                            {CurrentStep === "completed" && (
                                <Controller>
                                    <Button className="btn mb-3" type="link" isBlock isPrimary hasShadow href="">
                                        <div className="mt-1">Back to Home</div>
                                    </Button>
                                </Controller>
                            )}

                            </>
                        )
                    }
                </Stepper>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    checkout: state.checkout,
    page: state.page
})
export default connect(mapStateToProps, {submitBooking})(Checkout);