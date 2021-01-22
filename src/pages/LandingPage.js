import React, { Component } from 'react'
import { connect } from 'react-redux';

import Header from 'parts/Header';
import Hero from 'parts/Hero'
import Partners from 'parts/Partners';
import MostPicked from 'parts/MostPicked';
import Category from 'parts/Category'
import Testimonial from 'parts/Testimonial';
import Footer from 'parts/Footer'
import PageLoading from 'parts/Loader'

import AOS from 'aos'
import 'aos/dist/aos.css'

import { fetchPage } from 'store/actions/page'
import LandingJSON from 'json/landingPage.json';
class LandingPage extends Component {
    constructor(props){
        super(props)
        this.refMostPicked = React.createRef()
    }

    componentDidMount(){
        AOS.init()
        document.title = "GoExplore - Solusi Semua Kebutuhan Travel Anda"
        window.scrollTo(0,0)

        if (!this.props.page.landingPage)
        this.props.fetchPage(`/landing-page`, "landingPage");
    }

    render(){

        const { page } = this.props
        if(!page.hasOwnProperty("landingPage")) return null;

        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={page?.landingPage?.hero} />
                <Partners data={LandingJSON?.agency} />
                <MostPicked refMostPicked={this.refMostPicked} data={page?.landingPage?.mostPicked} />
                <Category data={page?.landingPage?.category} />
                <Testimonial data={page?.landingPage?.testimonial} />
                <Footer />
                <PageLoading />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page
})

export default connect(mapStateToProps, { fetchPage })(LandingPage)