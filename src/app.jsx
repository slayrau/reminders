import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AuthPageTypes } from 'src/utils/const';
import Operation from 'src/redux/operations/auth';
import Selector from 'src/redux/selectors/auth';

import AuthPage from 'src/pages/auth-page';
import MainPage from 'src/pages/main-page';
import 'src/styles/index.scss';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(Selector.user);

  useEffect(() => {
    dispatch(Operation.checkUserSigned());
  }, []);

  return (
    <Switch>
      {!user
        ? (
          <>
            <Route
              path={[`/${AuthPageTypes.signIn}`, `/${AuthPageTypes.signUp}`]}
              component={AuthPage}
            />

            <Redirect to={`/${AuthPageTypes.signIn}`} />
          </>
        ) : (
          <>
            <Route
              path="/"
              component={MainPage}
            />

            <Redirect to="/" />
          </>
        )}
    </Switch>
  );
};

export default App;
