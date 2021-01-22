import React from 'react'

import LottieComponents from 'react-lottie-player'
import Loading from 'assets/json/lost-screen.json'
import Button from 'elements/Button'

export default function Review(props) {
    return (
        <section className="container">
            <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="col-md-5 text-center">
                    <LottieComponents 
                        loop
                        animationData={Loading}
                        play
                        style={{ width: 410, height: 300 }}
                    />
                    <h3 className="error-title">Coming Soon</h3>
                    <p className="error-desc">
                        Pages will be coming soon in the next few days, stay tuned
                    </p>
                    <div>
                        <Button className="btn mt-2" type="button" onClick={() => props.history.goBack()} isLight>
                            Go Back
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
