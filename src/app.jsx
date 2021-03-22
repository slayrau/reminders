import { useEffect } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// UTILS
import { AuthPageTypes } from 'src/utils/const';

// CONTEXT
import { useMediaContext } from 'src/contexts/media';

// REDUX
import AuthSelector from 'src/redux/selectors/auth';
import AuthOperation from 'src/redux/operations/auth';
import ListPropertiesSelector from 'src/redux/selectors/list-properties';
import ProfilePropertiesSelector from 'src/redux/selectors/profile-properties';

// PAGES
import AuthPage from 'src/pages/auth-page';
import RemindersPage from 'src/pages/reminders-page';

// MODULES
import Drawer from 'src/modules/drawer';
import ListProperties from 'src/modules/list-properties';
import ProfileProperties from 'src/modules/profile-properties';

import 'src/styles/index.scss';

const App = () => {
  const dispatch = useDispatch();
  const userAuthorized = useSelector(AuthSelector.authorized);
  const listPropertiesIsOpen = useSelector(ListPropertiesSelector.isOpen);
  const profilePropertiesIsOpen = useSelector(ProfilePropertiesSelector.isOpen);
  const isSmallMedia = useMediaContext();
  const rootUrlMatch = useRouteMatch('/');

  useEffect(() => {
    dispatch(AuthOperation.checkUserSigned());
  }, []);

  if (!userAuthorized) {
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

      {listPropertiesIsOpen && <ListProperties />}
      {profilePropertiesIsOpen && <ProfileProperties />}
    </>
  );
};

export default App;
