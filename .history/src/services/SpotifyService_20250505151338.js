import axios from 'axios';

export default {
	getAuthToken() {
		function getToken() {
			const response = fetch('https://accounts.spotify.com/api/token', {
				method: 'POST',
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

			return response.json();
		}
	},

	getArtist() {},

	getAlbums() {},
};
