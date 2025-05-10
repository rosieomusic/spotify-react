const AlbumComponent = ({ albums }) => {
	return (
		<div className='info'>
			{albums.map((album) => (
				<ol>
					<li key={album.id}> {album.name}</li>
				</ol>
											{artist.images && artist.images.length > 0 && (
												<img
													className='bandImg'
													src={artist.images[0].url}
													alt={`${artist.name} Img`}
												/>
											)}
			))}
		</div>
	);
};

export default AlbumComponent;
