import PropTypes from 'prop-types';

import Profile from 'src/components/profile';
import Search from 'src/components/search';
import Filters from 'src/components/filters';
import UserLists from 'src/components/user-lists';
import './style.scss';

const MainPage = ({ user, onSignOut }) => {
  return (
    <div className="app">
      <div className="drawer">
        <div className="drawer__container">
          <div className="drawer__body">
            <Profile user={user} onSignOut={onSignOut} />
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

MainPage.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default MainPage;
