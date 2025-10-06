import FilmCard from "../components/FilmCard";
import { useState, useEffect } from "react";
import { searchFilms, getPopularFilms } from "../services/api";
import "../css/Home.css"


function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularFilms = async () => {
            try {
                const popularFilms = await getPopularFilms()
                setFilms(popularFilms)
            } catch (err) {
                console.log(err)
                setError("Failed to load films...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularFilms()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for Films..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="film-grid">
                {films.map((film) =>
                    (<FilmCard film={film} key={film.id} />))}
            </div>
        </div>
    );
}

export default Home