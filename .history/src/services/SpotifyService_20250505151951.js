import axios from 'axios';

const auth_token = btoa(${client_id })

export default {
	getAuthToken() {
		function getToken() {
			return axios.post('https://accounts.spotify.com/api/token', 
				new URLSearchParams({
					grant_type: 'client_credentials',
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization:
                            'Basic ' +
                            Buffer.from(client_id + ':' + client_secret).toString('base64'),
                    }

                },
				
			});
		}
	},

	getArtist() {},

	getAlbums() {},
};
