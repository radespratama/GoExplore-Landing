import React, { Component } from 'react'
// import InputNumber from 'elements/Form/InputNumber'
// import InputDate from 'elements/Form/InputDate'
// import Breadcrumb from 'elements/Breadcrumb';

export default class Example extends Component {
    state = {
        // value: {
        //     startDate: new Date(),
        //     endDate: new Date(),
        //     key: "selection"
        // },
        // value: "1"
    }

    // handleChange = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // }

    render() {

        const breadcrumb = [
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "House Details", pageHref: ""}
        ]

        return (
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                    <div className="col-auto">
                        {/* <InputNumber
                            max={30}
                            suffix=" night"
                            onChange={this.handleChange}
                            name="value"
                            value={this.state.value}
                        /> */}
                        {/* <InputDate
                            max={30}
                            onChange={this.handleChange}
                            name="value"
                            value={this.state.value}
                        /> */}
                        {/* <Breadcrumb data={breadcrumb} /> */}
                    </div>
                </div>
            </div>
        )
    }
}