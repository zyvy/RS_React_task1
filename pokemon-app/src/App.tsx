import { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import { SearchResults } from './components/SearchResults';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';

function App() {
  const [searchString, setSearchString] = useState<string>('');
  const handleSearch = (searchTerm: string) => {
    setSearchString(searchTerm);
  };
  return (
    <ErrorBoundary>
      <div className="wrapper">
        <Header />
        <main>
          <SearchComponent onSearch={handleSearch} />
          <SearchResults searchString={searchString} />
        </main>
      </div>
    </ErrorBoundary>
  );
}

export default App;
