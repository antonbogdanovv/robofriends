import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
// import registerServiceWorker from './registerServiceWorker';

const root = ReactDOM.createRoot(
	document.getElementById('root')
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
// registerServiceWorker();


