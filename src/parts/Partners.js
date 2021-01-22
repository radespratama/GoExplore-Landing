import React from 'react'

export default function Agents({ data }) {
    return (
        <section className="container agency-container my-5">
            <div className="row align-items-center justify-content-center customCol">
                {
                    data?.map?.((agency, index)=> {
                        return (
                            <div className="col-md-2 col-1 py-3 text-center mx-2" key={index}>
                                <img src={agency?.imageName} alt={agency?.name}/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
