import React, { Component } from 'react';
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

interface SearchResultsState {
  animes: Anime[];
  loading: boolean;
  error: string | null;
}

class SearchResults extends Component<SearchResultsProps, SearchResultsState> {
  constructor(props: SearchResultsProps) {
    super(props);
    this.state = {
      animes: [],
      loading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchAnimeData();
  }

  componentDidUpdate(prevProps: SearchResultsProps) {
    if (prevProps.searchString !== this.props.searchString) {
      this.fetchAnimeData();
    }
  }

  async fetchAnimeData() {
    const { searchString } = this.props;
    const url = `https://api.jikan.moe/v4/anime?q=${searchString}`;

    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        animes: data.data,
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({ error: 'Failed to fetch', loading: false });
    }
  }

  render() {
    const { searchString } = this.props;
    const { animes, loading, error } = this.state;

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
}
export default SearchResults;
