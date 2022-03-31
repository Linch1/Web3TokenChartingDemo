import React from 'react';
import {
	Routes,
    Route,
} from "react-router-dom";


import TokenChart from "./views/chart_detail/index";
import Home from "./views/homepage/Home";
import Layout from './components/layout/Layout';

//styles
import './App.css';
import './variables.css';
import './darkVariables.css';

import LightViewChart from './components/chart/lightview/chart';
//import TradingViewChart from './components/chart/trading/chart';

const App = () => {

	return (
		<div>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tokens/:contract" element={<TokenChart />} />
					{/* <Route path="/chart/tradingview/:contract" element={<TradingViewChart />} /> */}
					<Route path="/chart/lightview/:contract" element={<LightViewChart />} />
				</Routes>
			</Layout>
		</div>
		);
	}


export default App;
