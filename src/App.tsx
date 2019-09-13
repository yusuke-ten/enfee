import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import InputComponent from 'src/components/atoms/Input';
import LoginForm from 'components/organisms/LoginForm';
import Layout from './components/Layout';
import TodoContainer from './containers/TodoContainer';
import PostComponent from './components/Post';
import LoginPage from './components/pages/LoginPage';

const TestComponent: FC = () => (
  <>
    <h2>test components</h2>
    <InputComponent type="inputText" placeholder="Email" value="test" />
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
    <LoginPage />
    <LoginForm />
    {/* <h1>Hello, World</h1>
    <StyleComponent primary />
    <nav>
      <StyledNavLink to="/test">Test</StyledNavLink>
      <StyledNavLink to="/todo">Todo</StyledNavLink>
      <StyledNavLink to="/post">Post</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </nav>
    <Switch>
      <Route path="/" component={HomeComponent} exact />
      <Route path="/test" component={TestComponent} />
      <Route path="/todo" component={TodoContainer} />
      <Route path="/post" component={PostComponent} />
      <Route path="/login" component={LoginPage} />
      <Redirect to="/" />
    </Switch> */}
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
