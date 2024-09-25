// src/app/page.tsx
"use client";

import Navbar from './components/Navbar';
import ListingCard from './components/ListingCard';
import { useEffect, useState } from 'react';

type Listing = {
  title: string;
  address: string;
  socials: string;
  averageRating: number;
  coverPhoto: string;
  photos: string[];
  threeSixtyPhotos: string[];
  affiliated: boolean;
  description: string;
  tags: string[];
  type: string;
  createdBy: string;
  status: string;
  lat: number;
  lng: number;
  touristId: string;
};

const fetchListings = async () => {
  console.log('Fetching listings...');
  const res = await fetch('http://localhost:5001/api/listing/');
  
  console.log('Response status:', res.status); // Log the response status
  if (!res.ok) {
    throw new Error('Failed to fetch listings');
  }
  
  const data = await res.json();
  console.log('Fetched listings:', data); // Log the fetched data
  return data;
};

const MainPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getListings = async () => {
      try {
        const data = await fetchListings();
        console.log('Fetched data:', data); // Log the fetched data
        // Extract the listings array from the response object
        if (Array.isArray(data.listings)) {
          setListings(data.listings); // Set the listings state with the correct array
        } else {
          console.error('Expected listings to be an array, but received:', data.listings);
          setError('Invalid data format received from the server.');
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false); // Ensure this runs to end loading state
      }
    };
    
  
    getListings();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {listings.map((listing) => (
            <ListingCard key={listing.touristId} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
