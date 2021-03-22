import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Caption = ({ level, weight, caps, children, ...restProps }) => (
  <div
    className={classNames('caption', `caption--level-${level}`, `caption--weight-${weight}`, {
      'caption--caps': caps,
    })}
    {...restProps}
  >
    {children}
  </div>
);

Caption.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4']),
  weight: PropTypes.oneOf(['regular', 'bold']),
  caps: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Caption.defaultProps = {
  level: '1',
  weight: 'regular',
  caps: false,
};

export default Caption;
