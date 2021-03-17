import { useDispatch, useSelector } from 'react-redux';

import Selector from 'src/redux/selectors/auth';
import Operation from 'src/redux/operations/auth';

import Profile from 'src/components/profile';
import Search from 'src/components/search';
import Filters from 'src/components/filters';
import UserLists from 'src/components/user-lists';
import './style.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(Selector.user);

  const handleSignOut = () => {
    dispatch(Operation.signOut());
  };

  return (
    <div className="app">
      <div className="drawer">
        <div className="drawer__container">
          <div className="drawer__body">
            <Profile
              user={user}
              onSignOut={handleSignOut}
            />
            <Search />
            <Filters />
            <UserLists />
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content__container">
          main-content
        </div>
      </div>
    </div>
  );
};

export default MainPage;
