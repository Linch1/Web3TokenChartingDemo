import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

//fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

//style
import "./sidenav.css"

//images
import login from "../../img/login.png";
import signUp from "../../img/sign-up.png"
import mailService from "../../img/mail-service.png";
import promote from "../../img/promote.png";
// import winner from "../../img/winner.png";
// import chart from "../../img/chart.png"

//redux
// import { connect } from 'react-redux';
// import EnumReduxStructure from "../../enum/redux.strcuture";
// import ApiAuth from "../../Redux/actions/api/auth";
// import ApiToken from "../../Redux/actions/api/tokens";
import Switch from "../switch/Switch";


const SideNav = ({
    //redux
    isLogged,
    isLoggedStatus,
    logout,

    getDailyWinner,
    DailyWinner,

    toggleTheme
}) => {


    // useEffect( () => {
    //     isLogged(); // check if the user is logged when he opens the site
    //     getDailyWinner();
    // }, []);

    // useEffect( () => {

    // }, [isLoggedStatus] );

    const sideContent = [
        {
            text:"Sign Up",
            secondaryText: "SignUp",
            img: signUp,
            path: "https://demo.cc/signup",
        },
        {
            text:"Login",
            secondaryText: "Login",
            img: login,
            path: "https://demo.cc/login",
        },
        {
            text:"Promote",
            img: promote,
            imgClass: 'small',
            path: "https://demo.cc/promotecoins",
        },
        {
            text:"Mail Service",
            img: mailService,
            imgClass: 'small',
            path: "https://demo.com/",
        },
    ]

    return (
        <aside className="side_bar ">
            <ul className="sidenav-ul d-flex flex-column align-items-center">
                <li>
                    <Switch toggleTheme={toggleTheme}/>
                </li>
            {
                sideContent.map((item, index) => {
                    return (
                        <a
                        className="sidenav-links"
                        href={item.path}
                        key={item.text}
                        onClick={ () => { if(item.onClick) item.onClick() }}
                        >
                            <li className="sidenav-icons text-center">
                                {item.img ? <img className={`sidenav-img ${item.imgClass}`} src={item.img} alt={item.text}/> : <FontAwesomeIcon
                                className="mb-1 side-nav-door"
                                icon={item.icon}/>}
                                <span className="sidenav-text">{item.text}</span>
                            </li>
                        </a>
                    )
                })
            }

                {/* <a className="sidenav-links" href="https://shillhunters.com/" target="_blank" rel="noreferrer">
                    <li className="sidenav-icons text-center">
                        <img className="sidenav-img small" src={mailService} alt=""/>
                        <span className="sidenav-text">Mail Service</span>
                    </li>
                </a> */}
                {/* <a className="sidenav-links" href="https://chart.demo.cc/">
                    <li className="sidenav-icons text-center">
                        <img className="sidenav-img small" src={chart} alt=""/>
                        <span className="sidenav-text">Chart</span>
                    </li>
                </a> */}
            </ul>

            <div className="daily-winner pb-4">
                {/* {
                    DailyWinner &&
                    <Link className="d-flex flex-column align-items-center text-center mt-4" to={`/tokens/${DailyWinner.url}`}>
                        <span className="sidenav-text mb-1"><strong>{DailyWinner.symbol}</strong></span>
                        <img className="sidenav-img mb-2 " src={`${process.env.REACT_APP_SERVER_URL}/image/${DailyWinner.logo}`} alt="daily winner"/>
                        <span className="sidenav-text">Daily Winner</span>
                    </Link>
                } */}
                <div className="social-side-links">
                    <a href="https://twitter.com/demo" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                        className="mr-3"
                        icon={faTwitter}
                        />
                    </a>
                    <a href="https://t.me/demo" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                            icon={faTelegramPlane}
                        />
                    </a>
                </div>
            </div>
        </aside>
    )
}


export default SideNav;