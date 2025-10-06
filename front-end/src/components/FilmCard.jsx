import "../css/FilmCard.css"

function FilmCard({ film }) {
    function onFavouriteClick() {
        alert("clicked")
    }
    return <div className="film-card">
        <div className="film-poster">
            <img src={film.url} alt={film.title} />
            <div className="film-overlay">
                <button className="favourite" onClick={onFavouriteClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                </svg></button>
            </div>
        </div>
        <div className = "film-info">
            <h3>{film.title}</h3>
            <p>{film.release_date}</p>
        </div>
    </div>
}

export default FilmCard