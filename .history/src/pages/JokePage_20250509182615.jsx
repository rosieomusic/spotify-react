import React from 'react';
import JokeService from '../services/JokeService.js';
import { useEffect, useState } from 'react';

function JokePage() {
	const [joke, setJoke] = useState(null);

	function getJoke() {
		JokeService.getRandomJoke().then((response) => {
			//console.log(response);
			setJoke(response.data);
		});
	}
	useEffect(() => {
		getJoke();
	}, []); //empty array means call on initialization

	return (
		<>
			<h1>This is the Joke Page</h1>
			<p>{joke} </p>
			<button>Get Random Joke</button>
		</>
	);
}

export default JokePage;
