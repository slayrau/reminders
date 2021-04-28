import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { SystemIconNames, BadgeIconNames, ColorTypes } from 'src/utils/const';
import Badge from 'src/components/badge';
import Text from 'src/components/typography/text';
import Icon from 'src/components/icon';
import './style.scss';

const NavItemTypeToIcon = {
  filter: SystemIconNames,
  list: BadgeIconNames,
};

const NavItem = ({ href, type, color, icon, title, count }) => (
  <NavLink
    className={classNames('nav-item', `nav-item--${type}`, `system-color--${color}`)}
    activeClassName="nav-item--active"
    to={href}
  >
    <Badge className="nav-item__badge" icon={NavItemTypeToIcon[type][icon]} />
    <Text className="nav-item__title">{title}</Text>
    <Text className="nav-item__count">{count}</Text>
    {type === 'list' && <Icon className="nav-item__chevron" icon={SystemIconNames.chevronRight} />}
  </NavLink>
);

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['filter', 'list']).isRequired,
  color: PropTypes.oneOf(Object.values(ColorTypes)).isRequired,
  icon: PropTypes.oneOf(Object.values({ ...SystemIconNames, ...BadgeIconNames })).isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default memo(NavItem);
