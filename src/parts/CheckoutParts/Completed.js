import React from 'react'
import Fade from 'react-reveal/Fade';
import LottieComponents from 'react-lottie-player'
import Loading from 'assets/json/completed.json'

export default function Completed() {
    return (
        <Fade>
            <div className="container mt-5" style={{ marginBottom: 30}}>
                <div className="row justify-content-center text-center">
                    <div className="col-4">
                        <LottieComponents 
                            loop
                            animationData={Loading}
                            play
                            style={{ height: 310 }}
                        />
                        <p className="text-gray-500">
                            We will inform you via email later once the transaction has been
                            accepted
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}
 