import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ToastContainer } from "react-toastify";
import LandingPage from 'pages/LandingPage'
import DetailsPage from 'pages/DetailsPage'
import Checkout from 'pages/Checkout'
import Reviews from 'pages/Review';
import Partners from 'pages/Partners';
import Destination from 'pages/Destination';
import Pricing from 'pages/Pricing';
import 'assets/scss/style.scss';
function App() {
    return (
        <>
            <Router>
                <Route exact path="/" component={LandingPage} />
                <Route path="/details/:id" component={DetailsPage} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/partner" component={Partners} />
                <Route path="/destination" component={Destination} />
                <Route path="/pricing" component={Pricing} />
            </Router>

            <ToastContainer />
        </>
    )
}

export default App