import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Caption = ({ children, level, weight, caps, className, ...restProps }) => (
  <div
    className={classNames('caption', `caption--level-${level}`, `caption--weight-${weight}`, className, {
      'caption--caps': caps,
    })}
    {...restProps}
  >
    {children}
  </div>
);

Caption.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  level: PropTypes.oneOf(['1', '2', '3', '4']),
  weight: PropTypes.oneOf(['regular', 'bold']),
  caps: PropTypes.bool,
  className: PropTypes.string,
};

Caption.defaultProps = {
  level: '1',
  weight: 'regular',
  caps: false,
  className: '',
};

export default Caption;
