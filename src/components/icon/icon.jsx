import PropTypes from 'prop-types';
import cn from 'classnames';

import { BadgeIconTypes, SystemIconTypes } from 'src/assets/icons';
import { BadgeIconNames, SystemIconNames } from 'src/utils/const';
import './style.scss';

const IconTypes = {
  ...BadgeIconTypes,
  ...SystemIconTypes,
};

const Icon = ({ icon, className }) => {
  const IconComponent = IconTypes[icon];

  return (
    <IconComponent
      className={cn('icon', className)}
    />
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.values({
    ...BadgeIconNames,
    ...SystemIconNames,
  })).isRequired,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
