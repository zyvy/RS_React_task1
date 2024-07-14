import { Link } from 'react-router-dom';
import { AnimeData } from './types/types';

function CardList(animeProps: AnimeData) {
  return (
    <div key={animeProps.mal_id} className="anime-card">
      <h3>{animeProps.title}</h3>
      <Link key={animeProps.mal_id} to={`anime/${animeProps.mal_id}`}>
        <img src={animeProps.images.jpg.image_url} alt={animeProps.title} />
      </Link>
    </div>
  );
}
export default CardList;
