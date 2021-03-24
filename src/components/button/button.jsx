import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Button = ({ children, className, type, wide, secondary, ...restProps }) => (
  <button
    className={classNames('button', className, { 'button--wide': wide })}
    type={type}
    {...restProps}
  >
    <div className="button__container">
      {children}
    </div>
  </button>
);

Button.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  wide: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  type: 'button',
  wide: false,
  secondary: false,
};

export default Button;
