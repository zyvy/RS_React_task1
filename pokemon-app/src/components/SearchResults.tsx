import { Component } from 'react';

interface SearchResultsProps {
  searchString: string;
}

class SearchResults extends Component<SearchResultsProps> {
  render() {
    return (
      <div>
        <h2>Search Results:</h2>
        <ul>{this.props.searchString}</ul>
      </div>
    );
  }
}

export default SearchResults;
