import React from 'react'
import { connect } from 'react-redux'

import LottieComponents from 'react-lottie-player'
import Loading from 'assets/json/loading.json'

function Loader(props) {
    const { loading } = props

    if(!loading) return null

    return (
        <div className="container">
            <div className="row align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="col-md-5">
                    <LottieComponents 
                        loop
                        animationData={Loading}
                        play
                        style={{ height: 200 }}
                    />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    loading: state.page.loading
})
export default connect(mapStateToProps)(Loader)