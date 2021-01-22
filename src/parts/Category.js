import React from 'react'

import Button from 'elements/Button'

export default function Category({data}) {

    return (
        data?.map((categories, index2) => {
            if(categories?.itemId?.length === 0) return null
            return (
                <section className="container categories-container" key={`Category-${index2}`}>
                    <h4 className="mb-3">
                        {categories?.name ?? 'Categories Name'}
                    </h4>
                    <div className="container-grid">
                            {
                                categories?.itemId?.map((items, index3) => {
                                    return (
                                        <div className="item column-3 row-1" key={`Category-${index2}-Data-${index3}`}>
                                            <div className="card" data-aos="fade-down" data-aos-delay={700 * index3} data-aos-duration="700">
                                                {items?.isPopular && (
                                                    <div className="tag">
                                                        Popular <span className="font-weight-light">Choice</span>
                                                    </div>
                                                )}
                                                <figure className="img-wrapper" style={{ height: 180 }}>
                                                    <img src={items.imageId[0] ? `${process.env.REACT_APP_HOST}/${items.imageId[0].imageUrl}` : ""} alt={items?.title} className="img-cover"/>
                                                </figure>
                                                <div className="meta-wrapper">
                                                    <Button href={`/details/${items?._id}`} type="link" className="stretched-link d-block text-gray-900">
                                                        <h5 className="title-destination">{items?.title ?? 'Destination Name'}</h5>
                                                    </Button>
                                                    <span className="text-gray-500">
                                                        {items?.city ?? 'City'}, {items?.country} 
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
