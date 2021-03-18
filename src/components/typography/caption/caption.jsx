import PropTypes from 'prop-types';
import classNames from 'classnames';

const Caption = ({ level, weight, caps, children }) => (
  <div
    className={classNames(
      'caption',
      `caption--level-${level}`,
      `caption--weight-${weight}`,
      {
        'caption--caps': caps,
      },
    )}
  >
    {children}
  </div>
);

Caption.propTypes = {
  level: PropTypes.oneOf(['1', '2', '3', '4']).isRequired,
  weight: PropTypes.oneOf(['regular', 'bold']).isRequired,
  caps: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Caption.defaultProps = {
  caps: false,
};

export default Caption;
