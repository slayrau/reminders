import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const FiltersItem = ({ id, title }) => (
  <li className="filters-item filters__item">
    <NavLink
      className={cn('filters-item__link', `filters-item__link--${id}`)}
      activeClassName="filters-item__link--active"
      to={`/${id}`}
    >
      <div className="filters-item__body">
        <span className="filters-item__icon" />
        <p className="filters-item__title">{title}</p>
        <p className="filters-item__count">0</p>
      </div>
    </NavLink>
  </li>
);

FiltersItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FiltersItem;
