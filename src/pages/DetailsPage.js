import React, { Component } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { connect } from 'react-redux'

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailsTitle'
import FeaturedImage from 'parts/FeaturedImage';
import FeaturedDescription from 'parts/FeaturedDescription'
import BookingForm from 'parts/BookingForm';
import Activity from 'parts/Activities';
import Testimonial from 'parts/Testimonial';
import Footer from 'parts/Footer';

import { checkoutBooking } from 'store/actions/checkout'
import { fetchPage } from 'store/actions/page'

class DetailsPage extends Component {

    componentDidMount(){
        AOS.init()
        window.scrollTo(0,0)
        if(!this.props.page[this.props.match.params.id])
        this.props.fetchPage(`/detail-page/${this.props.match.params.id}`, this.props.match.params.id).then( res => {
            document.title = `Go Explore - ${res.title}`
        })
    }

    render() {
        const { page, match } = this.props

        if(!page[match.params.id]) return null
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Detail", pageHref: "" }
        ]

        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle breadcrumb={breadcrumb} data={page[match?.params?.id]} />
                <FeaturedImage data={page[match?.params?.id]?.imageId} />
                <section className="container">
                    <div className="row">
                        <div className="col-md-7 pr-5" data-aos="fade-down" data-aos-duration="400">
                            <FeaturedDescription data={page[match?.params?.id]} />
                        </div>
                        <div className="col-md-5" data-aos="fade-down" data-aos-duration="400" data-aos-delay="200">
                            <BookingForm itemDetails={page[match?.params?.id]} startBooking={this.props.checkoutBooking} />
                        </div>
                    </div>
                </section>

                <Activity data={page[match?.params?.id]?.activityId} />
                <Testimonial data={page[match?.params?.id]?.testimonial} />
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page
})
export default connect(mapStateToProps, { checkoutBooking, fetchPage })(DetailsPage);
