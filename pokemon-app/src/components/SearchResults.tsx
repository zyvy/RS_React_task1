import { useState, useEffect } from 'react';
import './SearchResults.css';
import CardList from './CardList';
import { searchAnime } from './services/ApiService';
import { AnimeData } from './types/types';
interface SearchResultsProps {
  searchString: string;
}

export function SearchResults({ searchString }: SearchResultsProps) {
  const [animes, setAnimes] = useState<AnimeData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      const data = await searchAnime(searchString);
      setAnimes(data.data);
    };
    fetchAnime();
    setLoading(false);
  }, [searchString]);
  return (
    <div>
      <h2>Search Results:</h2>
      <div className="search_results">
        <h2>{searchString}</h2>
        {loading && <p>Loading...</p>}
        {animes.length > 0 && (
          <div className="anime-list">
            {animes.map((anime) => (
              <CardList key={anime.mal_id} {...anime} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
