import React, { FunctionComponent } from 'react';
import Root from './components/Root';

type Props = {};

const App: FunctionComponent = (props: Props) => {
  return (
    <div>
      React-CLI
      <Root />
    </div>
  );
};

export default App;
