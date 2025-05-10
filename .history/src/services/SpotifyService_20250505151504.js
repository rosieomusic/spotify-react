import axios from 'axios';

export default {
	getAuthToken() {
		function getToken() {
			return axios.post('https://accounts.spotify.com/api/token', 
				body: new URLSearchParams({
					grant_type: 'client_credentials',
				}),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Authorization:
						'Basic ' +
						Buffer.from(client_id + ':' + client_secret).toString('base64'),
				},
			});
		}
	},

	getArtist() {},

	getAlbums() {},
};
