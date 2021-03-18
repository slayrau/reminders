import PropTypes from 'prop-types';
import classNames from 'classnames';

import { SystemIconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import Headline from 'src/components/typography/headline';
import './style.scss';

const Button = ({ children, className, onClick, type, icon, titleHidden, wide, secondary, ...restProps }) => (
  <button
    className={classNames('button', className, {
      'button--wide': wide,
      'button--secondary': secondary,
      'button--icon': titleHidden && icon,
    })}
    type={type}
    onClick={onClick}
    aria-label={titleHidden ? children : ''}
    {...restProps}
  >
    {icon && <Icon icon={icon} />}

    <Headline
      className={classNames({
        'visually-hidden': titleHidden,
      })}
    >
      {!titleHidden && children}
    </Headline>
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.oneOf(Object.values(SystemIconNames)),
  type: PropTypes.oneOf(['button', 'submit']),
  titleHidden: PropTypes.bool,
  wide: PropTypes.bool,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  icon: null,
  type: 'button',
  titleHidden: false,
  onClick: () => { },
  wide: false,
  secondary: false,
};

export default Button;
