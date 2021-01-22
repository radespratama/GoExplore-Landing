import React from 'react'
import LottieComponents from 'react-lottie-player'

import Loading from 'assets/json/error-404.json'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="container">
            <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="col-md-4">
                    <LottieComponents 
                        loop
                        animationData={Loading}
                        play
                        style={{width: 410, height: 300, marginLeft: "-40px" }}
                    />
                    <div className="text-center">
                        <Link className="btn btn-custom-dark mt-2" type="button" to="/">
                            Go Back
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}
