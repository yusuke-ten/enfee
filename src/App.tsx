import React, { FC } from 'react';

import Layout from './components/Layout';
import TodoContainer from './containers/TodoContainer';

const App: FC = () => (
  <Layout title="todo app">
    <TodoContainer />
  </Layout>
);

export default App;
