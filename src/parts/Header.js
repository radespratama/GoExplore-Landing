import React from 'react'

import Button from 'elements/Button'
import BrandIcon from 'parts/IconText'
export default function Header(props) {

    const getNavLinkClass = (path) => {
        return props.location.pathname === path ? ' active' : ''
    }

    if(props.isCentered)
        return (
            <header className="spacing-sm" data-aos="fade-down" data-aos-duration="500">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Button className="brand-text-icon mx-auto" href="" type="link">
                            Go<span className="text-gray-900">Explore.</span>
                        </Button>
                    </nav>
                </div>
            </header>
        )

    return (
        <header className="spacing-sm" data-aos="fade-down" data-aos-duration="800">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <BrandIcon />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className={`nav-item${getNavLinkClass("/reviews")}`}>
                                <Button className="nav-link items" type="link" href="/reviews">
                                    Reviews
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/destination")}`}>
                                <Button className="nav-link items" type="link" href="/destination">
                                    Destination
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/partner")}`}>
                                <Button className="nav-link items" type="link" href="/partner">
                                    Partners
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/pricing")}`}>
                                <Button className="nav-link items" type="link" href="/pricing">
                                    Pricing
                                </Button>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className={`nav-item${getNavLinkClass("/download")}`}>
                                <Button className="nav-link btn-custom rounded-3 btn-cta" type="link" href="/download">
                                    Get the App
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
