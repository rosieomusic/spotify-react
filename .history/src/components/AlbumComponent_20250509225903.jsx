const AlbumComponent = ({ albums }) => {
	return (
		<div>
			{albums.map((album) => (
				<div>
					<li key={album.id}> {album.name}</li>
					<li key={album.id}> {album.album}</li>
				</div>
			))}
		</div>
	);
};

export default AlbumComponent;
