import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import './style.scss';

const FiltersItem = ({ id, title, color, icon }) => (
  <li className="filters-item filters__item">
    <NavLink
      className={cn('filters-item__link', `system-color--${color}`)}
      activeClassName="filters-item__link--active"
      to={`/${id}`}
    >
      <div className="filters-item__body">
        <div className="filters-item__icon-wrapper">
          <Icon className="filters-item__icon" icon={SystemIconNames[icon]} />
        </div>
        <p className="filters-item__title">{title}</p>
        <p className="filters-item__count">0</p>
      </div>
    </NavLink>
  </li>
);

FiltersItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default FiltersItem;
