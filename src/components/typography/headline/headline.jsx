import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Headline = ({ children, className, weight }) => {
  return (
    <div
      className={classNames('headline', className, {
        [`headline--${weight}`]: weight,
      })}
    >
      {children}
    </div>
  );
};

Headline.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
  className: PropTypes.string,
  weight: PropTypes.oneOf(['regular', 'bold']),
};

Headline.defaultProps = {
  weight: 'regular',
  className: '',
};

export default Headline;
