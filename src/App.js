import React from 'react';

//Setting up Base Web components Libraries - easy comtumazible components with a flat design
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Main from './components/main/Main';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Main />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
