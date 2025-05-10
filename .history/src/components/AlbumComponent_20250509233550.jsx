const AlbumComponent = ({ albums }) => {
	return (
		<div className='info'>
			{albums.map((album) => (
				<ol>
					<li key={album.id}> {album.name}</li>
				</ol>
			))}
		</div>
	);
};

export default AlbumComponent;
