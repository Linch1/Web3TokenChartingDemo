import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { HashRouter as Router } from "react-router-dom";
import {ChartInfoContextProvider} from "./store/chartInfo-context";

ReactDOM.render(
	<ChartInfoContextProvider>
		<Router>
			<App />
		</Router>
	</ChartInfoContextProvider>,
	document.getElementById('root')
);
