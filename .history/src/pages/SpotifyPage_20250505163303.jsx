import React from 'react';
import { useState, useEffect } from 'react';
import SpotifyService from '../services/SpotifyService.js';

export default function SpotifyPage() {
	const [token, setToken] = useState('');
	const [artistName, setArtistName] = useState('');
	const [artist, setArtist] = useState(null);

	function handleChange(event) {
		setArtistName(event.target.value);
	}

	function getArtistInfo() {
		SpotifyService.getArtist(artistName, token).then((response) => {
			console.log(response);
		});
	}

	function getAuthToken() {
		SpotifyService.getAuthToken().then((response) => {
			setToken(response.access_token);
		});
	}
	useEffect(() => {
		getAuthToken();
	}, []);
	return (
		<>
			<h1>Spotify Page</h1>
			<label htmlFor='artistName'>Artist Name:</label>
			<input
				type='text'
				value={artistName}
				onChange={handleChange}
			/>
			<button onClick={getArtistInfo}>Get Info</button>
		</>
	);
}
