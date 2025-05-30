import React from 'react';
import { useState, useEffect } from 'react';
import SpotifyService from '../services/SpotifyService.js';

function SpotifyPage() {
	const [token, setToken] = useState('');

	function getAuthToken() {
		SpotifyService.getAuthToken().then((response) => {
			console.log(response);
		});
	}
	useEffect(() => {
		getAuthToken();
	}, []);
	return <h1>Spotify Page</h1>;
}

export default SpotifyPage;
