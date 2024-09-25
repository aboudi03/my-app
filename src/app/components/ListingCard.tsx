// src/app/components/ListingCard.tsx
import React from 'react';

type Listing = {
  title: string;
  address: string;
  averageRating: number;
  coverPhoto: string;
  description: string;
  tags: string[];
  type: string;
  affiliated: boolean;
};

type ListingCardProps = {
  listing: Listing;
};

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <img
        src={listing.coverPhoto || 'https://via.placeholder.com/150'} // Placeholder if no cover photo
        alt={listing.title}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h2 className="text-xl font-semibold">{listing.title}</h2>
      <p className="text-gray-600">{listing.address}</p>
      <p className="text-gray-600">Average Rating: {listing.averageRating}</p>
      <p className="mt-2">{listing.description}</p>
      <p className="text-gray-500">Tags: {listing.tags.join(', ')}</p>
      <p className="text-gray-500">Type: {listing.type}</p>
      <p className={`mt-2 ${listing.affiliated ? 'text-green-500' : 'text-red-500'}`}>
        {listing.affiliated ? 'Affiliated' : 'Not Affiliated'}
      </p>
    </div>
  );
};

export default ListingCard;
