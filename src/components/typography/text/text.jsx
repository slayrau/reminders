import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Text = ({ children, className, weight, visuallyHidden, ...restProps }) => (
  <p
    className={classNames('text', className, {
      [`text--weight-${weight}`]: weight,
      'visually-hidden': visuallyHidden,
    })}
    {...restProps}
  >
    {children}
  </p>
);

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  weight: PropTypes.oneOf(['regular', 'bold']),
  visuallyHidden: PropTypes.bool,
};

Text.defaultProps = {
  className: '',
  weight: 'regular',
  visuallyHidden: false
};

export default Text;
