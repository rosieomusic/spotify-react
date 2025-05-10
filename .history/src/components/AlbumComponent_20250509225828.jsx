const AlbumComponent = ({ albums }) => {
	return (
		<div>
			{albums.map((album) => (
				<div>
					<p key={album.id}> {album.name}</p>
					<p key={album.id}> {album.album}</p>
				</div>
			))}
		</div>
	);
};

export default AlbumComponent;
