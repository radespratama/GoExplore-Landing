import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import Button from 'elements/Button'

export default function Category({data}) {

    useEffect(() => {
       AOS.init()
    }, [])

    return (
        data?.map((categories, index2) => {
            return (
                <section className="container categories-container" key={`Category-${index2}`}>
                    <h4 className="mb-3">
                        {categories?.name ?? 'Categories Name'}
                    </h4>
                    <div className="container-grid">
                            {
                                categories?.items?.length === 0 ? 
                                <div className="row">
                                    <div className="col-auto align-items-center">
                                        There is no destination at this category
                                    </div>
                                </div> : categories?.items?.map((item, index3) => {
                                    return (
                                        <div className="item column-3 row-1" key={`Category-${index2}-Data-${index3}`}>
                                            <div className="card" data-aos="fade-down" data-aos-delay={700 * index3} data-aos-duration="700">
                                                {item?.isPopular && (
                                                    <div className="tag">
                                                        Popular <span className="font-weight-light">Choice</span>
                                                    </div>
                                                )}
                                                <figure className="img-wrapper" style={{ height: 180 }}>
                                                    <img src={item?.imageUrl} alt={item?.name} className="img-cover"/>
                                                </figure>
                                                <div className="meta-wrapper">
                                                    <Button href={`/details/${item?._id}`} type="link" className="stretched-link d-block text-gray-900">
                                                        <h5 className="title-destination">{item?.name ?? 'Destination Name'}</h5>
                                                    </Button>
                                                    <span className="text-gray-500">
                                                        {item?.city ?? 'City'}, {item?.country} 
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
        })
    )
}
