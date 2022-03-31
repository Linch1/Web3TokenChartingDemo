import * as React from 'react';
import { useLocation, useParams } from 'react-router';
import { widget } from '../../../charting_library/charting_library';
import Datafeed from './datafeed';
import './style.css';

import logo from "../../../img/logo.png"

function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default function TradingViewChartPoweredBy () {

	console.log('CURRENT THEME: ', window.localStorage.getItem('theme'))

	let {contract} = useParams();
	let { search } = useLocation();

	let defaultTheme = 'light';
	if( search.includes('theme=dark') ) defaultTheme = 'dark';
	else if( window.localStorage.getItem('theme') ) defaultTheme = window.localStorage.getItem('theme');
	let [theme, setTheme] = React.useState(defaultTheme);

	let defaultProps = {
		symbol: 'BTC',
		interval: '1',
		containerId: 'tv_chart_container',
		datafeedUrl: 'https://demo_feed.tradingview.com',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
		header: false,
	};
	let [tvWidget, setTvWidget] = React.useState(null);

	React.useEffect( () => {
		
		

		const widgetOptions = {
			symbol: defaultProps.symbol,
			// BEWARE: no trailing slash is expected in feed URL
			datafeed: Datafeed,
			interval: defaultProps.interval,
			container_id: defaultProps.containerId,
			library_path: defaultProps.libraryPath,
			theme: theme,
			locale: getLanguageFromURL() || 'en',
			disabled_features: ['use_localstorage_for_settings', 'header_symbol_search', 'header_compare', 'header_saveload'],
			enabled_features: [ 'hide_left_toolbar_by_default'],
			left_toolbar: false,
			charts_storage_url: defaultProps.chartsStorageUrl,
			charts_storage_api_version: defaultProps.chartsStorageApiVersion,
			client_id: defaultProps.clientId,
			user_id: defaultProps.userId,
			fullscreen: defaultProps.fullscreen,
			autosize: defaultProps.autosize,
			studies_overrides: defaultProps.studiesOverrides,
			overrides: {
				'scalesProperties.fontSize': 11
			}
		};

		
		let tempTvWidget = new widget(widgetOptions);
		tempTvWidget.onChartReady(() => {
			tempTvWidget.headerReady().then(() => {	});
		});

		setTvWidget( tempTvWidget );

		console.log( tvWidget )

		return () => {
			if (tvWidget !== null) {
				tvWidget.remove();
				tvWidget = null;
			}
		}
	}, [ contract ]);


	return (
		<section className={`chart-section ${theme}`}>
			<div className='powered-by'>
				<div className='tag'>
					Powerd by 
					me
				</div>
			</div>
			<div
				id={ defaultProps.containerId }
				className={ 'TVChartContainer powered' }
			></div>
		</section>
	);
	
}
