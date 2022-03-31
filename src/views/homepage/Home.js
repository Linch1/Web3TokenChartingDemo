import React from "react";

//style
import "./home.css";

//component
import Search from "../../components/search/Search";
import FeaturedTokens from "../../components/featured/FeaturedTokens";
import GetFeatured from "../../components/getfeatured/GetFeatured";
import Title from "../../components/title/Title";

const Home = () => {

    return (
        <div className="d-flex">
            <section className="home-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mobile-only text-center">
                                <Title title_txt={' VIEW PRICE CHART FOR ANY TOKEN'} />
                            </div>
                            <div className="search-container">
                                <div className="desktop-only">
                                    <Title title_txt={' VIEW PRICE CHART FOR ANY TOKEN '} />
                                </div>
                                <Search />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <FeaturedTokens featured_txt="Featured tokens"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <GetFeatured />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;