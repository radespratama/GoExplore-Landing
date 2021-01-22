import React from 'react'

import Breadcrumb from 'elements/Breadcrumb';

export default function PageDetailsTitle({ data, breadcrumb }) {

    return (
        <section className="container spacing-sm pageDetailTitle">
            <div className="row align-items-center" data-aos="fade-down" data-aos-duration="800">
                <div className="col">
                    <Breadcrumb data={breadcrumb} />
                </div>
                <div className="col-auto text-center">
                    <h1 className="h2">{data?.title}</h1>
                    <span className="text-gray-500">
                        {data?.city}, {data?.country}
                    </span>
                </div>
                <div className="col"></div>
            </div>
        </section>
    )
}
