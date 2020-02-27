import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import paths from 'src/paths';

/* それぞれのルーティング先コンポーネントをdynamic import */
const LoginPage = React.lazy(() => import('containers/pages/LoginPage'));
const SignupPage = React.lazy(() => import('containers/pages/SignupPage'));
const ReviewsPage = React.lazy(() => import('containers/pages/ReviewsPage'));
const ReviewPostPage = React.lazy(() => import('containers/pages/ReviewPostPage'));
const UsersPage = React.lazy(() => import('containers/pages/UsersPage'));
const SettingsProfilePage = React.lazy(() =>
  import('containers/pages/SettingsProfilePage'),
);

const NotFound = () => <div>not found</div>;
const LoadingPage = () => <div>Loading</div>;

// TODO: reviewsページのルーティングを`/`に修正したい
const App: React.FC = () => (
  <Switch>
    <Route path={paths.login} exact>
      <React.Suspense fallback={LoadingPage}>
        <LoginPage />
      </React.Suspense>
    </Route>
    <Route path={paths.signup} exact>
      <React.Suspense fallback={LoadingPage}>
        <SignupPage />
      </React.Suspense>
    </Route>
    <Route path={paths.reviewPost} exact>
      <React.Suspense fallback={LoadingPage}>
        <ReviewPostPage />
      </React.Suspense>
    </Route>
    <Route path="/reviews" exact>
      <React.Suspense fallback={LoadingPage}>
        <ReviewsPage />
      </React.Suspense>
    </Route>
    <Route path={paths.reviews} exact>
      <React.Suspense fallback={LoadingPage}>
        <ReviewsPage />
      </React.Suspense>
    </Route>
    <Route path="/" exact>
      <React.Suspense fallback={LoadingPage}>
        <Redirect to="/reviews" />
      </React.Suspense>
    </Route>
    <Route path={paths.users} exact>
      <React.Suspense fallback={LoadingPage}>
        <UsersPage />
      </React.Suspense>
    </Route>
    <Route path={paths.settingsProfile} exact>
      <React.Suspense fallback={LoadingPage}>
        <SettingsProfilePage />
      </React.Suspense>
    </Route>
    <Route path="/" component={NotFound} />
  </Switch>
);

export default App;
