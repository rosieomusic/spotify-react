const AlbumComponent = ({ albums }) => {
	return (
		<div>
			{albums.map((album) => (
				<p key={album.id}> {album.name}</p>
			))}
		</div>
	);
};

export default AlbumComponent;
