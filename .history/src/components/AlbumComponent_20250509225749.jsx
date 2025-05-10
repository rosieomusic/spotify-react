const AlbumComponent = ({ albums }) => {
	return (
		<div>
			{albums.map((album) => (
				<div>
					<p key={album.id}> {album.name}</p>
				</div>
			))}
		</div>
	);
};

export default AlbumComponent;
