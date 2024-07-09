import logo from './assets/logo.jpg';
import { Component } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import SearchResults from './components/SearchResults';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorButton from './components/ErrorBtn';

interface AppState {
  searchString: string;
}

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchString: '',
    };
  }
  handleSearch = (searchTerm: string) => {
    this.setState({ searchString: searchTerm });
  };

  render() {
    return (
      <ErrorBoundary>
        <div className="wrapper">
          <header>
            <img className="logo" src={logo} alt="logo" />
            <h1>Search for anime title</h1>
          </header>
          <ErrorButton />
          <main>
            <SearchComponent onSearch={this.handleSearch} />
            <SearchResults searchString={this.state.searchString} />
          </main>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
