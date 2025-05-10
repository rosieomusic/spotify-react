import axios from 'axios';

const client_id =;
const client_secret =;
const auth_token = btoa(`${client_id }: ${client_secret}`)

export default {
	getAuthToken() {
		function getToken() {
			return axios.post('https://accounts.spotify.com/api/token', 
				new URLSearchParams({
					'grant_type': 'client_credentials',
                }).toString(),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        Authorization:
                            'Basic ' + auth_token
                    }

                },
				
			});
		}
	},

	getArtist() {},

	getAlbums() {},
};
