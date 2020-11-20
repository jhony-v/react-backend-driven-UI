import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import IndexPage from './pages/IndexPage';
import GraphQLProvider from './services/graphql/GraphQLProvider';

function App() {
  return (
    <GraphQLProvider>
        <GlobalStyles/>
        <IndexPage/>
    </GraphQLProvider>
  );
}

export default App;
