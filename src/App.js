import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Setting up Base Web components library - easy comtumazible components with a flat design
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import { ApiProvider } from './components/helpers/apiContext';
import Main from './components/UI/main/Main';
import ArtistsPage from './components/UI/artists/ArtistsPage';

const engine = new Styletron();

function App() {
  return (
    <ApiProvider>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/artists/:id" component={ArtistsPage} />
            </Switch>
          </Router>
        </BaseProvider>
      </StyletronProvider>
    </ApiProvider>
  );
}

export default App;
