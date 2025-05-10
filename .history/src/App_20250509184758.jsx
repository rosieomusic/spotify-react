import './App.css';
import { BrowserRouter, Routes, Link, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpotifyPage from './pages/SpotifyPage';
import JokePage from './pages/JokePage';

function App() {
	return (
		<BrowserRouter>
			<NavLink>
				<Link to='/'>Home | </Link>
				<Link to='/about'>About | </Link>
				<Link to='/joke'>Joke | </Link>
				<Link to='/spotify'>Spotify</Link>
			</NavLink>
			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/about'
					element={<AboutPage />}
				/>
				<Route
					path='/joke'
					element={<JokePage />}
				/>
				<Route
					path='/spotify'
					element={<SpotifyPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
