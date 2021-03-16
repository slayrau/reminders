import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { BadgeIconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import './style.scss';

const UserItem = ({ id, title, color, icon, itemsCount }) => (
  <li className="user-item user-lists__item">
    <NavLink
      className={cn('user-item__link', `system-color--${color}`)}
      activeClassName="user-item__link--active"
      to={`/list/${id}`}
    >
      <div className="user-item__body">
        <div className="user-item__icon-wrapper">
          <Icon className="user-item__icon" icon={BadgeIconNames[icon]} />
        </div>
        <p className="user-item__title">{title}</p>
        <p className="user-item__count">{itemsCount}</p>
      </div>
    </NavLink>
  </li>
);

UserItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  itemsCount: PropTypes.number.isRequired,
};

export default UserItem;
