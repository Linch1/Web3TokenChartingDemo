import React from "react";

//style
import "../homepage/home.css";

//component
import Header from "../../components/header/Header";
import SideNav from "../../components/side_nav/SideNav";

const HomePreview = () => {
    return (
        <div className="d-flex">    
            <section className="home-bg">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="search-container">
                            <h1 className="home-title">
                                <span className="red-text">BSC Chart </span>- UPCOMING
                            </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SideNav />
        </div>
    )
}

export default HomePreview;