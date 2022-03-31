import React, {useState, useEffect} from "react"
import { useParams } from "react-router";

import "./style.css";

//api
import getToken from "../../api/token";

//components
import Spinner from "../../components/spinner/Spinner";
import FeaturedTokens from "../../components/featured/FeaturedTokens";
import ChartTitle from "../../components/token_chart_dependencies/ChartTitle";
import ChartPrice from "../../components/token_chart_dependencies/ChartPrice";
import Search from "../../components/search/Search";
import ChartTag from "../../components/token_chart_dependencies/ChartTag";
import ChartLinks from "../../components/token_chart_dependencies/chart-links/ChartLinks";
import ChtrList from "../../components/token_chart_dependencies/chart_chtr/ChtrList";
import ChartInfoHeader from "../../components/token_chart_dependencies/chart_info_header/ChartInfoHeader";
import ChartInfoBody from "../../components/token_chart_dependencies/chart_info_body/ChartInfoBody";
import GetFeatured from "../../components/getfeatured/GetFeatured";
import ApiToken from "../../api/token";

const TokenChart = () => {

    

    let [token, setToken] = useState({});
    let { contract } = useParams();

    console.log('Current contract: ', contract)

    useEffect(() => {
        ( async () => {
            if(contract) {
                let resChart = await ApiToken.getToken(contract);
                console.log( 'response:', resChart )
                if( resChart.success ) {
                    setToken(resChart.success.data);
                } 
            }
        } )();
    }, [contract]);

    if(!Object.keys(token).length) {return (
        <div>
            <section className="chart-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Spinner />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )} else
    {
    return (
        <div className="d-flex">
            <section className="chart-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <FeaturedTokens chart_featured featured_txt="Get featured for free" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="token-info-container">
                                <div className="first-row">
                                    <ChartTitle token_img={token.logo} token_name={token.name} />
                                    <ChartPrice token_price={token.pair.pairInfos.value} token_movement={token.pair.pairInfos?.variation?.day}/>
                                    <div className="desktop-only">
                                        <Search />
                                    </div>
                                </div>
                                <div className="second-row"> 
                                    <ChartTag token_address={token.contract} token_chain={'bsc'} />
                                    <ChartLinks 
                                    btn1_text="Trade" 
                                    website={token.website}
                                    telegram={token.telegram}  
                                    token_chain={'bsc'}  
                                    token_contract={token.contract}
                                    />
                                    <ChtrList symbol={token.symbol} address={token.contract} chain={'bsc'} />      
                                </div>
                                <div className="third-row mobile-only">
                                    <Search />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="chart-container">
                                <iframe id="chart" frameBorder="0" allowfullscreen src={`/#/chart/lightview/${token.contract}`} ></iframe>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="chart-info-container">
                                <ChartInfoHeader />
                                <ChartInfoBody price={token.pair.pairInfos.value} transactions={ token.pair.transactions || [] } pairs={ token.pairs || {} } contract={token.contract}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mobile-only">
                                <GetFeatured />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <SideNav /> */}
        </div>
    )}
}

export default TokenChart;