import { useState } from 'react';
import Business from './Business';
import photo from '../assets/photo.jpg';

function BusinessList({ businesses }) {
  return (
    <div className="BusinessList">
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;
