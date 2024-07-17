import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setError('');
    setResult('');

    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
      const meaning = response.data[0]?.meanings[0]?.definitions[0]?.definition;
      setResult(meaning || 'No meaning found');
    } catch (err) {
      setError('No meaning found or an error occurred');
    }
  };

  return (
    <div>
      <h2>Search for a Word</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a word"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {result && <p>{result}</p>}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Search;
