import React, {useEffect} from "react";
import { Link } from "react-router-dom";

// import BlankLinks from "../_blank_links/BlankLinks";

// //redux
// import { connect } from 'react-redux';
// import EnumReduxStructure from "../../enum/redux.strcuture";
// import ApiAuth from "../../Redux/actions/api/auth";
// import ApiToken from "../../Redux/actions/api/tokens";



const BurguerMenu = ({isLogged, logout, isLoggedStatus, setburguerOpen, getDailyWinner,
    DailyWinner}) => {
   
    // useEffect( () => {
    //     isLogged(); // check if the user is logged when he opens the site
    //     getDailyWinner();
    // }, []);

    // useEffect( () => {

    // }, [isLoggedStatus] );

    const burguerContent = [
        // {
        //     text:"Sign Up",
        //     secondaryText: "SignUp",
        //     path: "/signup",
        //     // login: false,
        //     onClick: () => {
        //         setburguerOpen(false);
        //     }
        // },
        // {
        //     text:"Login",
        //     secondaryText: "Login",
        //     path: "/login",
        //     login: false,
        //     onClick: () => {
        //         setburguerOpen(false);
        //     }
        // },
        // {
        //     text:"List Coins",
        //     secondaryText: "List Coins",
        //     path: "/listoptions",
        //     login: true,
        //     onClick: () => {
        //         setburguerOpen(false);
        //     }
        // },
        // {
        //     text:"Profile",
        //     secondaryText: "Profile",
        //     path: "/profile",
        //     login: true,
        //     onClick: () => {
        //         setburguerOpen(false);
        //     }
        // },
        // {
        //     text:"Logout",
        //     secondaryText: "Logout",
        //     path: "/logout",
        //     login: true,
        //     onClick: () => {
        //         logout();
        //     }
        // },
        {
            text:"Homepage",
            path: "/",
            onClick: () => {
                setburguerOpen(false);
            }
        },
        {
            text:"Promote",
            path: "/promotecoins",
            onClick: () => {
                setburguerOpen(false);
            }
        },
        {
            text:"Mail Service",
            path: "https://shillhunters.com/",
            onClick: () => {
                setburguerOpen(false);
            }
        },
        {
            text:"Launch Token",
            path: "https://coinstarter.finance/#/",
            onClick: () => {
                setburguerOpen(false);
            }
        },
    ]

    return (
        <div className="d-flex flex-column justify-content-between padding-b">
            <ul className="burguer-nav">
                {/* <a 
                href="/" 
                onClick={ () => { setburguerOpen(false) }}
                >
                    <li>
                        <span>Homepage</span>
                    </li>
                </a> */}
                {
                    burguerContent.map((item, index) => {
                        {/* if(Object.keys(item).includes('login')){
                            if( !item.login && isLoggedStatus ) return;
                            if( item.login && !isLoggedStatus ) return;
                        } // check if the item condition is true. */}
                        return (
                            <a 
                            href={item.path} 
                            onClick={ () => { if(item.onClick) item.onClick() }}
                            key={index}
                            >
                                <li>
                                    <span>{item.text}</span>
                                </li>
                            </a>
                        )
                    })
                }
                
                {/* <a href="https://coinstarter.finance/#/" target="_blank" rel="noreferrer" onClick={() => {setburguerOpen(false)}}>
                    <li>
                        <span>Launch Token</span>
                    </li>
                </a>
                <a href="https://shillhunters.com/" target="_blank" rel="noreferrer" onClick={() => {setburguerOpen(false)}}>
                    <li>
                        <span>Mailing Service</span>
                    </li>
                </a> */}
            </ul>
            {/* <div className="daily-winner-container">
                {   
                    DailyWinner &&
                    <Link className="d-flex flex-column text-center" to={`/tokens/${DailyWinner.url}`} onClick={() => setburguerOpen(false)}>
                        <span className="sidenav-text mb-1"><strong>{DailyWinner.symbol}</strong></span>
                        <img className="sidenav-img mb-2 " src={`${process.env.REACT_APP_SERVER_URL}/image/${DailyWinner.logo}`} alt="daily winner"/>
                        <span className="sidenav-text">Daily Winner</span>
                    </Link>
                }
            </div> */}

            {/* <div className="display-flex ">
                <BlankLinks />
            </div> */}
        </div>
    )
}

// const mapStatoProps = (state, propsOfComponent) => {
//     let isLogged = false;
//     if( state[EnumReduxStructure.USER.PARENT] )
//         isLogged = state[EnumReduxStructure.USER.PARENT][EnumReduxStructure.USER.IS_LOGGED];
//     return {
//         isLoggedStatus: isLogged,
//         DailyWinner: state[EnumReduxStructure.TOKENS.PARENT][EnumReduxStructure.TOKENS.DAILY_WINNER]
//     }
// };

export default BurguerMenu;

// export default connect(
//     mapStatoProps,
//     {
//         logout:  ApiAuth.logout,
//         isLogged: ApiAuth.isLogged,
//         getDailyWinner: ApiToken.rank.getDailyWinner
//     }
// )(BurguerMenu);