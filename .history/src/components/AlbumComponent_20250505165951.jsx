export default AlbumComponent({ albums }){
    
    return (
        <div>
            {albums.map((album) => (
                <p key={album.id}></p>
            ))}
        </div>
    )

}