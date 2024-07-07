import { Component } from 'react';

interface SearchResultsProps {
  searchString: string;
}

class SearchResults extends Component<SearchResultsProps> {
  render() {
    return (
      <div>
        <h2>Search Results:</h2>
        <div className="search_results">
          <ul>{this.props.searchString}</ul>
        </div>
      </div>
    );
  }
}

export default SearchResults;
