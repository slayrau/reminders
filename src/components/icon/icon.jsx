import PropTypes from 'prop-types';
import classNames from 'classnames';

import { BadgeIconTypes, SystemIconTypes } from 'src/assets/icons';
import { BadgeIconNames, SystemIconNames } from 'src/utils/const';
import './style.scss';

const IconTypes = {
  ...BadgeIconTypes,
  ...SystemIconTypes,
};

const Icon = ({ icon = BadgeIconNames.react, className }) => {
  const IconComponent = IconTypes[icon];

  return (
    <IconComponent
      className={classNames('icon', className)}
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
