import React from 'react';
import JokeService from '../services/JokeService.js';
import { useEffect, useState } from 'react';

function JokePage() {
	const [joke, setJoke] = useState(null);

	function getJoke() {
		JokeService.getRandomJoke().then((response) => {});
	}
	return <h1>This is the Joke Page</h1>;
}

export default JokePage;
