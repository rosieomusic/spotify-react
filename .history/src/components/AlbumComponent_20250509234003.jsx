const AlbumComponent = ({ albums }) => {
	return (
		<div className='info'>
			{albums.map((album) => (
				<ol>
					<li key={album.id}> {album.name}</li>
					{album.images && album.images.length > 0 && (
						<img
							className='bandImg'
							src={album.images[0].url}
							alt={`${album.name} Img`}
						/>
					)}
				</ol>
			))}
		</div>
	);
};

export default AlbumComponent;
