import React from 'react';
import { useState, useEffect } from 'react';
import SpotifyService from '../services/SpotifyService.js';
import AlbumComponent from '../components/AlbumComponent.jsx';

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
		<div className='spotify-wrapper'>
			<div className='spotify-page'>
				<h1>Spotify</h1>
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
							<p className='metadata'>Popularity: {artist.popularity}</p>
							<p className='metadata'>{artist.name}</p>
							<p className='metadata'>Followers: {artist.followers.total}</p>
							<p className='metadata'>Genres: {artist.genres}</p>
							<button onClick={getAlbumInfo}>Get Albums</button>
							{albums && <AlbumComponent albums={albums} />}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
