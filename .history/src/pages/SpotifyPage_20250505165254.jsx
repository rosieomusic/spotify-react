import React from 'react';
import { useState, useEffect } from 'react';
import SpotifyService from '../services/SpotifyService.js';

export default function SpotifyPage() {
	const [token, setToken] = useState('');
	const [artistName, setArtistName] = useState('');
	const [artist, setArtist] = useState('');
	const [albums, setAlbums] = useState('');

	function handleChange(event) {
		setArtistName(event.target.value);
	}

	function getArtistInfo() {
		SpotifyService.getArtist(artistName, token).then((response) => {
			//console.log(response);
			setArtist(response.data.artists.items[0]);
		});
	}
	function getAlbumInfo() {
		SpotifyService.getAlbums(artist.id, token).then((response) => {
			console.log(response);
			setAlbums(response.data.items);
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
			<div>
				{artist && (
					<>
						<h2>{artist.name}</h2>
						<h2>Popularity: {artist.popularity}</h2>
						<h2>Followers: {artist.followers.total}</h2>
						<h2>Genres: {artist.genres}</h2>
						<button onClick={getAlbumInfo}>Get Albums</button>
						<h2>Albums: {albums}</h2>
					</>
				)}
			</div>
		</>
	);
}
