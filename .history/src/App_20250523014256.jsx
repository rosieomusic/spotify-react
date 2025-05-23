import './App.css';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SpotifyPage from './pages/SpotifyPage';
import JokePage from './pages/JokePage';
import pixelHeart from './assets/pixel_heart.png';

function App() {
	return (
		<HashRouter>
			<div id='app-container'>
				<img
					id='pxHrt'
					src={pixelHeart}
					alt='pxhrt'
				/>
				<nav>
					<NavLink
						to='/'
						className={({ isActive }) =>
							isActive ? 'nav-link active' : 'nav-link'
						}
					>
						Home
					</NavLink>{' '}
					<NavLink
						to='/joke'
						className={({ isActive }) =>
							isActive ? 'nav-link active' : 'nav-link'
						}
					>
						Joke
					</NavLink>{' '}
					<NavLink
						to='/spotify'
						className={({ isActive }) =>
							isActive ? 'nav-link active' : 'nav-link'
						}
					>
						Spotify
					</NavLink>
				</nav>

				<main>
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
				</main>
			</div>
		</HashRouter>
	);
}

export default App;
