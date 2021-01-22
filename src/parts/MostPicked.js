import React from 'react'
import Button from 'elements/Button'

export default function MostPicked(props) {
    return (
        <section className="container mostpicked-container" ref={props.refMostPicked}>
            <div className="row align-items-center justify-content-center">
                <div className="col-md-3 text-center">
                    <h4 className="mb-2 mt-5 mostpicked-title">Most People Go</h4>
                    <p className="desc-title text-break">
                        From nature to heart and becomes
                        all what we need to have
                    </p>
                </div>
            </div>
            <div className="container-grid my-4">
                {
                    props?.data?.map((picked, index) => {
                        return (
                            <div className={`item column-4${index === 0 ? ' row-2' : ' row-1'}`} key={`${index}-${picked?.title}`}>

                                <div className="card card-featured" data-aos="fade-down" data-aos-duration="700" data-aos-delay={400 * index}>
                                    <div className="tag">
                                        ${picked?.price ?? 0}{" "}
                                        <span className="font-weight-light">per{" "}{picked?.unit ?? 'D'}</span>
                                    </div>
                                    <figure className="img-wrapper">
                                        <img src={picked?.imageId[0] ? `${process.env.REACT_APP_HOST}/${picked?.imageId[0]?.imageUrl}` : ""} alt={picked?.title} className="img-cover"/>
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button className="streched-link d-block text-white" type="link" href={`/details/${picked?._id}`}>
                                            <h5>
                                                {picked?.title ?? 'Name Destination'}
                                            </h5>
                                        </Button>
                                        <span>
                                            {picked?.city ?? 'City'}, {picked?.country ?? 'Country'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
