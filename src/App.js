import React from 'react';
import logo from './logo.png';
import './App.css';

//Setting up Base Web components Libraries - easy comtumazible components with a flat design
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled } from 'baseui';

import ArtistsLists from './components/artists/ArtistsList';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <div className="body">
          <header className="header">
            <img src={logo} alt={'Rockstars IT Logo'} className="header__img"></img>
            <h1>Rock-It NOW</h1>
          </header>
          <div>
            <ArtistsLists></ArtistsLists>
          </div>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
