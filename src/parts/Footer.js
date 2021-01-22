import React, { useState, useEffect } from 'react'

import Button from 'elements/Button'
import IconText from 'parts/IconText'
import Badge from 'assets/dist/images/google-play-badge.png'

export default function Footer() {
    // Fungsi Dinamic Copyright Year
    const [date, setDate] = useState()
    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear()
    }, [])

    return (
        <footer>
            <div className="container">
                <div className="row">

                    <div className="col">
                        <IconText />
                        <p className="brand-tagline">
                            We kaboom your beauty holiday instanly and memorable
                        </p>
                        <div className="d-flex">
                            <img src={Badge} height="60" alt="Badge Playstore"/>
                        </div>
                    </div>
                    <div className="col-md-2 mr-5">
                        <h6 className="mt-2">For Beginners</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/register">New Account</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/properties">Start Booking a Room</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/use-payments">Use Payments</Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h6 className="mt-2">Explore Us</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button type="link" href="/our-careers">Our Careers</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/privacy">Privacy</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/term">Terms & Conditions</Button>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h6 className="mt-2">Connect</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Button isExternal type="link" href="mailto:support@goexplorer.id">support@goexplorer.id</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="tel:+6281912867512">+62 819-1286-7512</Button>
                            </li>
                            <li className="list-group-item">
                                <Button type="link" href="/address">GoExplore, Denpasar, Bali</Button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 text-center copyrights">
                        Copyright <span>{date}</span> • All rights reserved • GoExplore
                    </div>
                </div>
            </div>
            
        </footer>
    )
}
