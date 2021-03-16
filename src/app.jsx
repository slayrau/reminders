import { Route } from 'react-router-dom';

import { AuthPageTypes } from 'src/utils/const';

import AuthPage from 'src/pages/auth-page';
import MainPage from 'src/pages/main-page';
import 'src/styles/index.scss';

const App = () => {
  return (
    <>
      <Route path={[`/${AuthPageTypes.signIn}`, `/${AuthPageTypes.signUp}`]} component={AuthPage} />
      <Route exact path="/" component={MainPage} />
    </>
  );
};

export default App;
