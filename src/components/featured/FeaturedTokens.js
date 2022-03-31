import React from "react";
import { Link } from "react-router-dom";

import "./featuredtokens.css";

const tokens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const FeaturedTokens = ({chart_featured, featured_txt, featured_list}) => {
    return (
        <div className="featured-area">
            <div className={!chart_featured ? "featured-list": "featured-list-chart"}>
                {
                    !chart_featured ? <p className="featured-txt">{featured_txt}</p> : <a className="featured-txt-link" href="/" target="_blank" rel="noreferer">{featured_txt}</a>
                }
                <ul>
                {
                    tokens.map((index) => {
                        return (
                            <Link to="/" key={index}>
                                <li>
                                    <span className={!chart_featured ? "text-black": "text-black-chart"}>#{index} <span className="text-red">Token</span></span>
                                </li>
                            </Link>
                        )
                    })
                }
                    
                </ul>
            </div>
        </div>
    )
}

export default FeaturedTokens;