import lists from 'src/mocks/user-lists';

import { SystemIconNames } from 'src/utils/const';
import Icon from 'src/components/icon';

import UserItem from './user-item';
import './style.scss';

const UserLists = () => {
  return (
    <div className="user-lists">
      <div className="user-lists__body">
        <h2 className="user-lists__title">My Lists</h2>

        <ul className="user-lists__list">
          {lists.map((list) => (
            <UserItem
              key={list.id}
              id={list.id}
              title={list.title}
              color={list.color}
              icon={list.icon}
              itemsCount={list.itemsCount}
            />
          ))}
        </ul>

        <button
          className="user-list__new-list-button"
          type="button"
        >
          <Icon className="user-list__new-list-icon" icon={SystemIconNames.plusCircleOutline} />
          Add new list
        </button>
      </div>
    </div>
  );
};

export default UserLists;
