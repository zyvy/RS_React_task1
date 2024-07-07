import { Component, ChangeEvent, FormEvent } from 'react';
import "./SearchComponent.css"

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

interface SearchInputState {
  searchTerm: string;
}

class SearchComponent extends Component<SearchInputProps, SearchInputState> {
  constructor(props: SearchInputProps) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      this.setState({ searchTerm: savedSearchTerm });
    }
  }
  handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchTerm', this.state.searchTerm.trim());
    this.props.onSearch(this.state.searchTerm.trim());
  };
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSearch}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchComponent;
