import React from 'react';
import { useState, useEffect } from 'react';
import SpotifyService from '../services/SpotifyService.js';
import AlbumComponent from '../components/AlbumComponent.jsx';

export default function SpotifyPage() {
	const [token, setToken] = useState('');
	const [artistName, setArtistName] = useState('');
	const [artist, setArtist] = useState('');
	const [albums, setAlbums] = useState('');
	const [track, setTracks] = useState('');

	function handleChange(event) {
		const trimmedInput = event.trim;
		setArtistName(trimmedInput.target.value);
	}

	function getArtistInfo() {
		SpotifyService.getArtist(artistName, token).then((response) => {
			//console.log(response);
			setArtist(response.data.artists.items[0]);
		});
	}
	function getAlbumInfo() {
		SpotifyService.getAlbums(artist.id, token).then((response) => {
			//console.log(response);
			setAlbums(response.data.items);
		});
	}
	function getTopTracks() {
		SpotifyService.getTopTracks(artist.id, token).then((response) => {
			//console.log(response);
			setTracks(response.data.tracks);
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
				<div id='artist'>
					{artist && (
						<div id='info'>
							{artist.images && artist.images.length > 0 && (
								<a
									className='link'
									href={artist.uri}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										className='bandImg'
										src={artist.images[0].url}
										alt={`${artist.name} Img`}
									/>
								</a>
							)}
							<ul>
								<li className='info'>{artist.name}</li>
								<li className='info'>Popularity: {artist.popularity}</li>
								<li className='info'>Followers: {artist.followers.total}</li>
								{artist.genres && artist.genres.length > 0 && (
									<li className='info'>Genres: {artist.genres.join(', ')} </li>
								)}
							</ul>

							<div>
								<button onClick={getTopTracks}>Get Top Tracks</button>
							</div>
							{track && track.length > 0 && (
								<div className='top-tracks'>
									<h3>Top Tracks</h3>
									<ol>
										{track.map((t) => (
											<li key={t.id}>
												<a
													id='track-link'
													href={t.external_urls.spotify}
													target='_blank'
													rel='noopener noreferrer'
												>
													<p id='track'>{t.name}</p>
												</a>
											</li>
										))}
									</ol>
								</div>
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
