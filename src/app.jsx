import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AuthApi from 'src/api/auth';
import { AuthPageTypes } from 'src/utils/const';

import AuthPage from 'src/pages/auth-page';
import MainPage from 'src/pages/main-page';
import 'src/styles/index.scss';

const App = () => {
  const [user, setUser] = useState();

  const handleSignIn = (email, password) => {
    AuthApi.signIn(email, password);
  };

  const handleSignUp = (email, password) => {
    AuthApi.signUp(email, password);
  };

  const handleSignOut = () => {
    AuthApi.signOut();
  };

  useEffect(() => {
    AuthApi.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
  }, []);

  return (
    <Switch>
      {!user
        ? (
          <>
            <Route
              path={[`/${AuthPageTypes.signIn}`, `/${AuthPageTypes.signUp}`]}
              component={() => (
                <AuthPage
                  onSignIn={handleSignIn}
                  onSignUp={handleSignUp}
                />
              )}
            />

            <Redirect to={`/${AuthPageTypes.signIn}`} />
          </>
        ) : (
          <>
            <Route
              exact
              path="/"
              render={() => (
                <MainPage
                  user={user}
                  onSignOut={handleSignOut}
                />
              )}
            />

            <Redirect to="/" />
          </>
        )}
    </Switch>
  );
};

export default App;
