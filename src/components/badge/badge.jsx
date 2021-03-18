import PropTypes from 'prop-types';
import classNames from 'classnames';

import { BadgeIconNames, SystemIconNames, ColorTypes } from 'src/utils/const';
import Icon from 'src/components/icon';
import './style.scss';

const Badge = ({ className, icon, color }) => (
  <div
    className={classNames('badge', className, {
      [`system-color--${color}`]: color,
    })}
  >
    <Icon icon={icon} />
  </div>
);

Badge.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values({
    ...BadgeIconNames,
    ...SystemIconNames,
  })).isRequired,
  color: PropTypes.oneOf(Object.values(ColorTypes)),
};

Badge.defaultProps = {
  className: '',
  color: null,
};

export default Badge;
