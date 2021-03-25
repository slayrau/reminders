import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// UTILS
import { FILTERS } from 'src/utils/settings';
import { SystemIconNames } from 'src/utils/const';

// REUDX
import AuthSelector from 'src/redux/selectors/auth';
import ListPropertiesActionCreator from 'src/redux/actions/list-properties';
import ProfilePropertiesActionCreator from 'src/redux/actions/profile-properties';
import UserListsSelector from 'src/redux/selectors/user-lists';
import UserListsOperation from 'src/redux/operations/user-lists';

// COMPONENTS
import Search from 'src/components/search';
import NavItem from 'src/components/nav-item';
import Collection from 'src/components/collection';
import Button from 'src/components/button';
import Icon from 'src/components/icon';
import Text from 'src/components/typography/text';

// OWN
import Profile from './components/profile';
import './style.scss';

const Drawer = () => {
  const dispatch = useDispatch();
  const authUserData = useSelector(AuthSelector.authData);
  const dataUpdating = useSelector(AuthSelector.dataUpdating);
  const photoUpdating = useSelector(AuthSelector.photoUpdating);
  const userLists = useSelector(UserListsSelector.userLists);

  const handleEdit = () => {
    const { name, photo, email } = authUserData;
    dispatch(ProfilePropertiesActionCreator.openProfile({ name, photo, email }));
  };

  const handleCreateNewList = () => {
    dispatch(ListPropertiesActionCreator.createNewList());
  };

  useEffect(() => {
    dispatch(UserListsOperation.subscribeToListsUpdate());
  }, []);

  return (
    <div className="drawer">
      <div className="drawer__header">
        <Profile
          user={authUserData}
          onEdit={handleEdit}
          updatingInProcess={dataUpdating || photoUpdating}
        />

        <Search />

        <Collection
          className="drawer__filters"
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
      </div>

      <div className="drawer__body">
        <Collection
          className="drawer__user-lists"
          title="My Lists"
        >
          {userLists.map((list) => (
            <NavItem
              key={list.id}
              href={`/list/${list.id}`}
              type="list"
              color={list.color}
              icon={list.icon}
              title={list.title}
              count={list.reminderIds?.length || 0}
            />
          ))}
        </Collection>
      </div>

      <div className="drawer__footer">
        <Button
          className="drawer__create-list-button"
          onClick={handleCreateNewList}
        >
          <Icon icon={SystemIconNames.plusCircleOutline} />
          <Text>Create new list</Text>
        </Button>
      </div>
    </div>
  );
};

export default Drawer;
