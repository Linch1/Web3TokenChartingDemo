import React, { useState } from "react";
import {Link} from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//style
import "./header.css"

//img
import logo from "../../img/logo.png"
import rocket from "../../img/rocket.png"
import token from "../../img/token.png"

//component
import HeaderBtn from "../button/HeaderBtn";
import BurguerMenu from "./BurguerMenu";
import Switch from "../switch/Switch";

const Header = ({
    toggleTheme
}) => {

    const [burguerOpen, setburguerOpen] = useState(false);

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-container">
                            <div className="logo-box">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                    <span className="logo-txt flicker">Web3TokenChart <span className="change-color">Beta</span></span>
                                </Link>
                            </div>
                            <div className="menu-burguer">
                                <div className="mobile-only mr-2">
                                    <Switch toggleTheme={toggleTheme}/>
                                </div>
                                <div onClick={() => {setburguerOpen(!burguerOpen)}}>
                                    <span className="anton-font menu">
                                        MENU
                                    </span>
                                    <FontAwesomeIcon
                                        className="burguer"
                                        icon={faBars}
                                    />
                                </div>
                                <div className={burguerOpen ? "dropdown-burguer-menu open" : "dropdown-burguer-menu"}>
                                    <BurguerMenu setburguerOpen={setburguerOpen}/>
                                </div>
                            </div>
                            <div className="partners-link">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;