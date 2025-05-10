const AlbumComponent = ({ albums }) => {
	return (
		<div>
			{albums.map((album) => (
				<ol>
					<li key={album.id}> {album.name}</li>
					<li key={album.id}> {album.album}</li>
				</ol>
			))}
		</div>
	);
};

export default AlbumComponent;
