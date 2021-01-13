import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import Star from 'elements/Star'
import Button from 'elements/Button';

import TestimonyAccent from 'assets/dist/images/testimonial-frame.png';

export default function Testimonial({ data }) {

    useEffect(()=> {
        AOS.init()
    }, [])

    return (
        <section className="container testimonial-container" data-aos="fade-down" data-aos-duration="800" data-aos-delay="800">
            <div className="row align-items-center">
                <div className="col-auto" style={{ marginRight: 60 }}>
                    <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
                        <img src={data?.imageUrl} alt={data?.name} className="position-absolute" style={{ zIndex:1 }}/>
                        <img src={TestimonyAccent} alt="Testimonial Frame" className="position-absolute" style={{ margin: `-30px 0 0 -30px`, zIndex:0 }}/>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 style={{ marginBottom: 40 }} className="title-name">{data?.name}</h4>
                    <Star value={data?.rate} width={36} height={34} spacing={4} />
                    <h5 className="h2 font-weight-light title-message line-height-2 my-3">
                        {data?.content}
                    </h5>
                    <span className="text-gray-500">
                        {data?.familyName}, {data?.familyOccupation}
                    </span>

                    <div>
                        <Button className="btn px-5 btn-testimony btn-start" style={{marginTop: 40}} hasShadow type="link" href={`/testimonial/${data._id}`}>
                            Read Their Story
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
