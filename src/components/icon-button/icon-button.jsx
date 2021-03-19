import classNames from 'classnames';
import PropTypes from 'prop-types';

import { BadgeIconNames, SystemIconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import './style.scss';

const IconButton = ({ className, icon, ...restProps }) => {
  return (
    <button className={classNames('icon-button', 'button', className)} {...restProps}>
      <Icon icon={icon} />
    </button>
  );
};

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values({
    ...BadgeIconNames,
    ...SystemIconNames,
  })).isRequired,
};

IconButton.defaultProps = {
  className: '',
};

export default IconButton;
