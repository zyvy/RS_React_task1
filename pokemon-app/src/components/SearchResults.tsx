import { useState, useEffect } from 'react';
import './SearchResults.css';
interface SearchResultsProps {
  searchString: string;
}
interface Imageurl {
  jpg: {
    image_url: string;
  };
}

interface Anime {
  mal_id: number;
  images: Imageurl;
  title: string;
  image_url: string;
}

function SearchResults({ searchString }: SearchResultsProps) {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      setError(null);
      console.log(searchString);
      const url = `https://api.jikan.moe/v4/anime?q=${searchString}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAnimes(data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch');
        setLoading(false);
      }
    };
    fetchAnime();
  }, [searchString]);
  return (
    <div>
      <h2>Search Results:</h2>
      <div className="search_results">
        <h2>{searchString}</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {animes.length > 0 && (
          <div className="anime-list">
            {animes.map((anime) => (
              <div key={anime.mal_id} className="anime-card">
                <h3>{anime.title}</h3>
                <img src={anime.images.jpg.image_url} alt={anime.title} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default SearchResults;
