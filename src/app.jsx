import { useEffect } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// UTILS
import { AuthPageTypes } from 'src/utils/const';

// CONTEXT
import { useMediaContext } from 'src/contexts/media';

// REDUX
import Operation from 'src/redux/operations/auth';
import Selector from 'src/redux/selectors/auth';

// PAGES
import AuthPage from 'src/pages/auth-page';
import RemindersPage from 'src/pages/reminders-page';

// MODULES
import Drawer from 'src/modules/drawer';
import ListProperties from 'src/modules/list-properties';

import 'src/styles/index.scss';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(Selector.user);
  const isSmallMedia = useMediaContext();
  const rootUrlMatch = useRouteMatch('/');

  useEffect(() => {
    dispatch(Operation.checkUserSigned());
  }, []);

  if (!user) {
    return (
      <Switch>
        <Route path={[`/${AuthPageTypes.signIn}`, `/${AuthPageTypes.signUp}`]} component={AuthPage} />
        <Redirect to={`/${AuthPageTypes.signIn}`} />
      </Switch>
    );
  }

  return (
    <>
      {isSmallMedia
        ? (
          rootUrlMatch.isExact && <Drawer />
        ) : (
          <Drawer />
        )}

      <Switch>
        <Route path="/:listType/:listId" component={RemindersPage} />
        <Redirect to="/" />
      </Switch>

      <ListProperties />
    </>
  );
};

export default App;
