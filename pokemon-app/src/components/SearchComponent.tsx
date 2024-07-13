import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import './SearchComponent.css';

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const useSavedSearchTerm = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
  }, []);

  return { searchTerm, setSearchTerm };
};


function SearchComponent({ onSearch }: SearchInputProps) {
  const {searchTerm, setSearchTerm} = useSavedSearchTerm();
 // onSearch(searchTerm);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchTerm', searchTerm.trim());
    onSearch(searchTerm.trim());
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchComponent;
