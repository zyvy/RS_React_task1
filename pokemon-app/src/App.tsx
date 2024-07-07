import logo from './assets/logo.jpg';
import React, { Component } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import SearchResults from './components/SearchResults';

interface AppState {
  searchString: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
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
      <div className="wrapper">
        <header>
          <img className="logo" src={logo} alt="logo" />
          <h1>Search for pokemon</h1>
        </header>
        <main>
          <SearchComponent onSearch={this.handleSearch} />
          <SearchResults searchString={this.state.searchString}/>
        </main>
      </div>
    );
  }
}

export default App;
