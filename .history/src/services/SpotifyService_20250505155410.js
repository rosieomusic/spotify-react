import axios from 'axios';

const client_id = import.meta.env.VITE_SPOTIFY_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_SECRET;
const auth_token = bto;

export default {
	getAuthToken() {
		return axios
			.post(
				'https://accounts.spotify.com/api/token',
				new URLSearchParams({
					grant_type: 'client_credentials',
				}).toString(),
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
						Authorization: 'Basic ' + auth_token,
					},
				}
			)
			.then((response) => response.data)
			.catch((error) => {
				console.error('Axios Error:', error.response?.data || error.message);
			});
	},

	getArtist() {},

	getAlbums() {},
};
