import React, { useEffect, useState, createContext, useContext } from 'react';
import Api from '../services/Api';

const ApiContext = createContext();

function ApiProvider({ children }) {
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const artists = await new Api().artists;
      const songs = await new Api().songs;

      setArtists(artists);
      setSongs(songs);
    }

    fetchData();
  }, []);

  return <ApiContext.Provider value={{ artists, songs }}>{children}</ApiContext.Provider>;
}

function useApiState() {
  let context = useContext(ApiContext);

  if (context === undefined) {
    context = { artist: [], songs: [] };
  }
  return context;
}

export { ApiProvider, useApiState };
