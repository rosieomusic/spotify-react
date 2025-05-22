const AlbumComponent = ({ albums }) => {
	return (
		<div className='info'>
			{albums.map((album) => (
				<div>
					<h2 key={album.id}> {album.name}</h2>
					{album.images && album.images.length > 0 && (
						<a
							id='link'
							href={album.external_urls.spotify}
							target='_blank'
							rel='noopener noreferrer'
						>
							<img
								className='albumImg'
								src={album.images[0].url}
								alt={`${album.name} Img`}
							/>
						</a>
					)}
				</div>
			))}
		</div>
	);
};

export default AlbumComponent;
