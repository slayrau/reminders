import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// UTILS
import { FILTERS } from 'src/utils/settings';
import { SystemIconNames } from 'src/utils/const';

// REDUX
import AuthSelector from 'src/redux/selectors/auth';
import AuthOperation from 'src/redux/operations/auth';
import UserListsOperation from 'src/redux/operations/user-lists';
import UserListsSelector from 'src/redux/selectors/user-lists';
import ListPropertiesActionCreator from 'src/redux/actions/list-properties';

// COMPONENTS
import Profile from 'src/components/profile';
import Search from 'src/components/search';
import NavItem from 'src/components/nav-item';
import Collection from 'src/components/collection';
import Button from 'src/components/button';

// OWN COMPONENTS
import ListProperties from 'src/modules/list-properties';
import './style.scss';

const MainPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(AuthSelector.user);
  const lists = useSelector(UserListsSelector.userLists);

  const handleSignOut = () => {
    dispatch(AuthOperation.signOut());
  };

  const handleAddList = () => {
    dispatch(ListPropertiesActionCreator.addNewList());
  };

  useEffect(() => {
    dispatch(UserListsOperation.subscribeToListsUpdate());
  }, []);

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

            <Collection
              columns="2"
              title="Filters"
              titleHidden
            >
              {Object.values(FILTERS).map((filter) => (
                <NavItem
                  key={filter.id}
                  href={`/filter/${filter.id}`}
                  type="filter"
                  color={filter.color}
                  icon={filter.icon}
                  title={filter.title}
                  count={0}
                />
              ))}
            </Collection>

            <Collection
              className="drawer__user-lists"
              title="My Lists"
            >
              {lists.map((list) => (
                <NavItem
                  key={list.id}
                  href={`/list/${list.id}`}
                  type="list"
                  color={list.color}
                  icon={list.icon}
                  title={list.title}
                  count={list.count || 0}
                />
              ))}
            </Collection>

            <Button
              className="drawer__add-list"
              onClick={handleAddList}
              icon={SystemIconNames.plusCircleOutline}
            >
              Add new list
            </Button>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="main-content__container">
          main-content
        </div>
      </div>

      <ListProperties />
    </div>
  );
};

export default MainPage;
