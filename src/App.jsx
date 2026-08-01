import './App.css';
import SearchBar from './components/SearchBar';
import BusinessList from './components/BusinessList';
import photo from './assets/photo.jpg';

function App() {

  const businesses = [
    {
          id: 1,
          image: photo,
          name: 'Business Name',
          address: '123 Main St',
          city: 'City',
          state: 'State',
          zipcode: '12345',
          category: 'Cafe',
          rating: 4.5,
          reviewCount: 100,
        },
        {
          id: 2,
          image: photo,
          name: 'Business Name 2',
          address: '456 Oak Ave',
          city: 'City 2',
          state: 'State 2',
          zipcode: '67890',
          category: 'Bakery',
          rating: 4.2,
          reviewCount: 85,
        }
  ]

  function handleSearch(params) {
    console.log('Search yelp with:', params);
  }

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
