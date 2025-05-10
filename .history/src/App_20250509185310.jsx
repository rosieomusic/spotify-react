import './App.css';
import { BrowserRouter, Routes, Link, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpotifyPage from './pages/SpotifyPage';
import JokePage from './pages/JokePage';

function App() {
	return (
		<div>
			<NavLink to='/home' />
		</div>
	);
}

export default App;
