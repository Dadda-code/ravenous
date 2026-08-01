import { useState } from 'react';
import styles from '../modules/SearchBar.module.css';

const sortOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  function handleSubmit(event) {
    event.preventDefault();
    onSearch?.({ term: term.trim(), location: location.trim(), sort_by: sortBy });
  }

  return (
    <section className={styles.searchBar}>
      <div className={styles.brandHeader}>Ravenous</div>
      <div className={styles.searchHeader}>
        <h1>Discover the best local spots</h1>
        <p>Search restaurants, cafes and bars by name, location and rating.</p>
      </div>
      <div className={styles.sortOptions}>
        <ul>
          {Object.entries(sortOptions).map(([label, apiValue]) => (
            <li
              key={apiValue}
              className={apiValue === sortBy ? styles.active : ''}
              onClick={() => setSortBy(apiValue)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <label>
            Search term
            <input
              value={term}
              onChange={(event) => setTerm(event.target.value)}
              placeholder="e.g. tacos, coffee, pizza"
              type="text"
            />
          </label>
          <label>
            Location
            <input
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="e.g. New York, San Francisco"
              type="text"
            />
          </label>
        </div>

        <button className={styles.searchButton} type="submit">
          Search
        </button>
      </form>
    </section>
  );
}
