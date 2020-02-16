import React from 'react';
import { Card } from 'baseui/card';

import Header from '../header/Header';
import SearchComponent from '../search/Search';
import ArtistsLists from '../artists/ArtistsList';

import { useApiState } from '../../helpers/apiContext';

const Main = () => {
  const { artists } = useApiState();

  return (
    <div className="body">
      <Header />
      <div className="main">
        <div className="section-left">
          <h4>Your Artists</h4>
          <Card className="section__search">
            <div>
              <SearchComponent list={artists} />
            </div>
          </Card>
        </div>
        <div className="section-right">
          <h4>Your Playlists</h4>
          <ArtistsLists></ArtistsLists>
        </div>
        .0
      </div>
    </div>
  );
};

export default Main;
