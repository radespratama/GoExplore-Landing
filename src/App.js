import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LandingPage from 'pages/LandingPage'
import 'assets/scss/style.scss';
function App() {
    return (
        <>
            <Router>
                <Route path="/" component={LandingPage}></Route>
            </Router>            
        </>
    )
}

export default App