import { useEffect, useState } from 'react';
import { AnimeData } from './types/types';
import { getAnimeById } from './services/ApiService';

function CardList(id: string) {
  const [animeData, setAnimeData] = useState<AnimeData>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAnimeById(id);
        setAnimeData(data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  if (loading) return <p>Loading...</p>;
  if (animeData)
    return (
      <div key={animeData.mal_id} className="anime-card">
        <h3>{animeData.title}</h3>
        <img src={animeData.images.jpg.image_url} alt={animeData.title} />
        <li>
          <ul>Duration: {animeData.duration}</ul>
          <ul>Episodes: {animeData.episodes}</ul>
          <ul>Rating: {animeData.rating}</ul>
          <ul>
            Genres:{' '}
            {animeData.genres.map((one) => (
              <span key={one.name}>{one.name}</span>
            ))}
          </ul>
        </li>
      </div>
    );
}
export default CardList;
