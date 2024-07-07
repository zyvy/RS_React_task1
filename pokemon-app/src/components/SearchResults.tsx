import { Component } from 'react';
import { PokemonClient } from 'pokenode-ts';
import './SearchResults.css';

interface SearchResultsProps {
  searchString: string;
}

class SearchResults extends Component<SearchResultsProps> {
  data: string[] = [];
  async getPokemons(searchWord: string) {
    const api = new PokemonClient();
    try {
      const pokemonData = await api.getPokemonByName(searchWord);
      console.log(pokemonData);
      return pokemonData;
    } catch (error) {
      console.error(error);
    }
  }
  constructor(props: SearchResultsProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Search Results:</h2>
        <div className="search_results">
          <h2>{this.props.searchString}</h2>
          <div></div>
        </div>
      </div>
    );
  }
}

export default SearchResults;
