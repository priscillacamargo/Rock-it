import React from 'react';
import logo from '../../logo.png';
import '../../index.css';
import { Card } from 'baseui/card';

import ArtistsLists from '../artists/ArtistsList';

const Main = () => {
  return (
    <div className="body">
      <header className="header">
        <img src={logo} alt={'Rockstars IT Logo'} className="header__img"></img>
        <h1>Rock-IT NOW</h1>
      </header>
      <div className="main">
        <div className="section-left">
          <h4>Your Artists</h4>
          <Card>
            <p>Search Element</p>
          </Card>
          <ArtistsLists></ArtistsLists>
        </div>
        <div className="section-right">
          <h4>Your Playlists</h4>
          <ArtistsLists></ArtistsLists>
        </div>
      </div>
    </div>
  );
};

export default Main;
