import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Auth0Provider
		domain="kumar-ash.us.auth0.com"
		clientId="rzYUQnF83GwEL4EodJ70XjKhMeeP1O50"
		authorizationParams={{
			redirect_uri: window.location.origin
		}}
	>
		<App></App>
	</Auth0Provider>,
)