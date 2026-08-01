import { useState } from 'react';
import Business from './components/Business';
import './App.css';
import photo from './assets/photo.jpg';

function App() {
  return (
    <div className="App">
      <Business
        image={photo}
        name="Business Name"
        address="123 Main St"
        city="City"
        state="State"
        zipcode="12345"
        category="Category"
        rating={4.5}
        reviewCount={100}
      />
    </div>
  );
}

export default App;
