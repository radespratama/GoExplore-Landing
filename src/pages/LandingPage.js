import React, { Component } from 'react'

import Header from 'parts/Header';
import Hero from 'parts/Hero'
import Partners from 'parts/Partners';
import MostPicked from 'parts/MostPicked';
import Category from 'parts/Category'
import Testimonial from 'parts/Testimonial';
import Footer from 'parts/Footer'

import LandingJSON from 'json/landingPage.json'
export default class LandingPage extends Component {
    constructor(props){
        super(props)
        
        this.refMostPicked = React.createRef()
    }

    render(){
        return (
            <>
                <Header {...this.props}></Header>
                <Hero refMostPicked={this.refMostPicked} data={LandingJSON.hero} />
                <Partners data={LandingJSON.agency} />
                <MostPicked refMostPicked={this.refMostPicked} data={LandingJSON.mostPicked} />
                <Category data={LandingJSON.categories} />
                <Testimonial data={LandingJSON.testimonial} />
                <Footer />
            </>
        )
    }
}
