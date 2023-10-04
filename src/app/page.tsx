// react and next
import React from 'react'
export const dynamic = "force-dynamic";
// components
import { Results } from '@/components';

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

const getEndpoint = (genre: string) => {
  switch (genre) {
    case 'fetchRecentAdded':
      return 'games/recent?';
    case 'fetchRandom':
      return 'games/random?';
    default:
      return 'games/recent?';
  }
}

const getData = async (genre: string) => {
  const endpoint = getEndpoint(genre);
  const url = `${API_URL}${endpoint}format=normal&api_key=${API_KEY}`;
  const res = await fetch(`${url}`, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data.games;
}

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || 'fetchRecentAdded';
  const data = await getData(genre);

  return (
    <Results results={data} />
  )
}