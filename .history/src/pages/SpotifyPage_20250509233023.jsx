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
			console.log(response);
			setArtist(response.data.artists.items[0]);
		});
	}
	function getAlbumInfo() {
		SpotifyService.getAlbums(artist.id, token).then((response) => {
			//console.log(response);
			setAlbums(response.data.items);
		});
	}
	function handleKeyPress(event) {
		if (event.key === 'Enter') {
			SpotifyService.getArtist(artistName, token).then((response) => {
				//console.log(response);
				setArtist(response.data.artists.items[0]);
			});
		}
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
					onKeyDown={handleKeyPress}
				/>
				<button onClick={getArtistInfo}>Get Info</button>
				<div>
					{artist && (
						<div id='info'>
							<ul>
								<li className='info'>Popularity: {artist.popularity}</li>
								<li className='info'>{artist.name}</li>
								<li className='info'>Followers: {artist.followers.total}</li>
								{artist.genres && artist.genres.length > 0 && (
									<li className='info'>Genres: {artist.genres + ' '} </li>
								)}
							</ul>
							{artist.images && artist.images.length > 0 && (
								<img
									className='bandImg'
									src={artist.images[0].url}
									alt={`${artist.name} Img`}
								/>
							)}
							<div className='albums'>
								<button onClick={getAlbumInfo}>Get Albums</button>
								{albums && <AlbumComponent albums={albums} />}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
