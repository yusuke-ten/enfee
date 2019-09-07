import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './components/Layout';
import TodoContainer from './containers/TodoContainer';

const TestComponent: FC = () => (
  <>
    <h2>test components</h2>
  </>
);

const HomeComponent: FC = () => (
  <>
    <h2>home components</h2>
  </>
);

const StyleComponent: FC<{ primary: boolean }> = props => {
  console.log(props);

  return (
    <>
      <div>sytled components</div>
    </>
  );
};

const App: FC = () => (
  <Layout title="todo app">
    <h1>Hello, World</h1>
    <StyleComponent primary />
    <nav>
      <StyledNavLink to="/test">Test</StyledNavLink>
      <StyledNavLink to="/todo">Todo</StyledNavLink>
    </nav>
    <Switch>
      <Route path="/" component={HomeComponent} exact />
      <Route path="/test" component={TestComponent} />
      <Route path="/todo" component={TodoContainer} />
      <Redirect to="/" />
    </Switch>
  </Layout>
);

const StyledNavLink = styled(NavLink)`
  margin-right: 10px;
  color: gray;

  &.active {
    color: red;
    text-decoration: underline;
  }
`;

export default App;
