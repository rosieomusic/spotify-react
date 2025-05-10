import './App.css';
import { BrowserRouter, Routes, Link, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpotifyPage from './pages/SpotifyPage';
import JokePage from './pages/JokePage';

function App() {
	return (
		<BrowserRouter>
			<nav>
				<NavLink
					to='/'
					style={({ isActive }) => ({
						fontWeight: isActive ? 'bold' : 'normal',
					})}
				>
					Home |
				</NavLink>
				<NavLink
					to='/joke'
					style={({ isActive }) => ({
						fontWeight: isActive ? 'bold' : 'normal',
					})}
				>
					Joke |
				</NavLink>
				<NavLink
					to='/spotify'
					style={({ isActive }) => ({
						fontWeight: isActive ? 'bold' : 'normal',
					})}
				>
					Spotify
				</NavLink>
			</nav>

			<Routes>
				<Route
					path='/'
					element={<HomePage />}
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
