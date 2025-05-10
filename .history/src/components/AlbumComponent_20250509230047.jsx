const AlbumComponent = ({ albums }) => {
	return (
		<>
			{albums.map((album) => (
				<ol>
					<li key={album.id}> {album.name}</li>
					<li key={album.id}> {album.album}</li>
				</ol>
			))}
		</>
	);
};

export default AlbumComponent;
