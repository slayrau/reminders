import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Text = ({ className, weight, children }) => (
  <p
    className={classNames('text', className, {
      [`text--weight-${weight}`]: weight,
    })}
  >
    {children}
  </p>
);

Text.propTypes = {
  className: PropTypes.string,
  weight: PropTypes.oneOf(['regular', 'bold']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Text.defaultProps = {
  className: '',
  weight: 'regular',
};

export default Text;
