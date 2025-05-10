const AlbumComponent = ({ albums }) => {
	return (
		<div className='info'>
			{albums.map((album) => (
				<div>
					<h2 key={album.id}> {album.name}</h2>
					{album.images && album.images.length > 0 && (
						<img
							className='albumImg'
							src={album.images[0].url}
							alt={`${album.name} Img`}
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default AlbumComponent;
