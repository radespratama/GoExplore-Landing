import React from 'react'

import HeroImage from 'assets/dist/images/Case.png'
import Travelers from 'assets/dist/icon/Travelers.svg';
import Treasure from 'assets/dist/icon/Treasure.svg';
import Cities from 'assets/dist/icon/Cities.svg';

import Button from 'elements/Button'
import NumberFormat from 'helpers/numberFormat';

export default function Hero(props) {

    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 38,
            behavior: "smooth"
        })
    }
    
    const dataJson = props.data
    return (
        <section className="container hero-container">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-6" data-aos="fade-down" data-aos-duration="900">
                    <h1 className="hero-title line-height-1 mb-3" data-aos="fade-down" data-aos-duration="900">
                        Life is either a daring 
                        adventure or Nothing!
                    </h1>
                    <p className="mb-4 hero-desc font-weight-light text-gray-500 w-75" data-aos="fade-down" data-aos-duration="900" data-aos-delay="500">
                        The way up to the top of the mountain is always <br />
                        longer than you think. Don't fool yourself.
                    </p>
                    <Button className="btn-show btn-start px-5" hasShadow onClick={showMostPicked}>
                        More Destination
                    </Button>

                    <div className="row mt-5 data-items" data-aos="fade-down" data-aos-duration="900" data-aos-delay="700">
                        <div className="col-auto mx-2">
                            <img src={Travelers} width="30" alt="Icon Traveler"/>
                            <h6 className="mt-2">
                                {NumberFormat(dataJson?.travelers)} <span className="font-weight-light text-gray-500">
                                    Travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto mx-2">
                            <img src={Treasure} width="30" alt="Icon Treasure"/>
                            <h6 className="mt-2">
                                {NumberFormat(dataJson?.treasures)} <span className="font-weight-light text-gray-500">
                                    Treasure
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto mx-2">
                            <img src={Cities} width="30" alt="Icon Cities"/>
                            <h6 className="mt-2">
                                {NumberFormat(dataJson?.cities)} <span className="font-weight-light text-gray-500">
                                    Cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center" data-aos="fade-right" data-aos-duration="900" data-aos-delay="800">
                    <div className="hero-image">
                        <img src={HeroImage} className="img-fluid" alt="Hero"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
