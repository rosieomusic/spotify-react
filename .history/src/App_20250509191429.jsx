import './App.css';
import { BrowserRouter, Routes, Link, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SpotifyPage from './pages/SpotifyPage';
import JokePage from './pages/JokePage';

function App() {
	return (
		<BrowserRouter>
			<div id='app-container'>
				<nav>
					<NavLink
						to='/'
						className='nav-link'
					>
						Home
					</NavLink>{' '}
					<NavLink
						to='/joke'
						className='nav-link'
					>
						Joke
					</NavLink>{' '}
					<NavLink
						to='/spotify'
						className='nav-link'
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
		</BrowserRouter>
	);
}

export default App;
