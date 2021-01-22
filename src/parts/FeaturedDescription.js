import React from 'react'
import ReactHtmlParser from 'react-html-parser'

export default function FeaturedDescription({ data }) {
    return (
        <main className="main-description">
            <h4 className="title-desc mb-4">About the place</h4>
                <div className="desc-color">
                    {ReactHtmlParser(data?.description)}
                </div>
            <div className="row mt-5">
                {
                    data?.featureId.length === 0 ? 'Maaf feature tidak tersedia' :
                    data?.featureId?.map((feature, index) => {
                        return(
                            <div className="col-md-3 mb-2" key={`feature-${index}`}>
                                <img src={`${process.env.REACT_APP_HOST}/${feature?.imageUrl}`} width="38" className="d-block mb-2" alt={feature?.name}/>
                                <span>{feature?.qty}</span>{" "}
                                <span className="text-gray-500 font-weight-light">{feature?.name}</span>
                            </div>
                        ) 
                    })
                }
            </div>
        </main>
    )
}
