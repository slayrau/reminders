import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Bubble = ({ children, className }) => {
  return (
    <div className={classNames('bubble', className)}>{children}</div>
  );
};

Bubble.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Bubble.defaultProps = {
  className: '',
};

export default Bubble;
