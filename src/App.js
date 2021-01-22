import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ToastContainer } from "react-toastify";
import LandingPage from 'pages/LandingPage'
import DetailsPage from 'pages/DetailsPage'
import Checkout from 'pages/Checkout'
import 'assets/scss/style.scss';
function App() {
    return (
        <>
            <Router>
                <Route exact path="/" component={LandingPage} />
                <Route path="/details/:id" component={DetailsPage} />
                <Route path="/checkout" component={Checkout} />
            </Router>

            <ToastContainer />
        </>
    )
}

export default App