import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

const Title = ({ className, level, weight, caps, children }) => {
  const Component = `h${level}`;

  return (
    <Component
      className={classNames('title', `title--level-${level}`, `title--weight-${weight}`, className, {
        'title--caps': caps,
      })}
    >
      {children}
    </Component>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOf(['1', '2', '3']).isRequired,
  weight: PropTypes.oneOf(['regular', 'bold', 'heavy']),
  caps: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Title.defaultProps = {
  className: '',
  caps: false,
  weight: 'regular',
};

export default Title;
