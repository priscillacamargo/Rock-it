import React from 'react';

//Setting up Base Web components library - easy comtumazible components with a flat design
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import { ApiProvider } from './components/helpers/apiContext';
import Main from './components/UI/main/Main';

const engine = new Styletron();

function App() {
  return (
    <ApiProvider>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Main />
        </BaseProvider>
      </StyletronProvider>
    </ApiProvider>
  );
}

export default App;
