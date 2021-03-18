import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const AuthInput = ({ field, ...otherProps }) => {
  const { label, type, placeholder, error, autoComplete } = otherProps;

  return (
    <label
      className={classNames('auth-input', {
        'auth-input--error': error,
      })}
    >
      <span className="auth-input__label-text">{label}</span>

      <input
        className="auth-input__input"
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...field}
      />
    </label>
  );
};

AuthInput.propTypes = {
  field: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default AuthInput;
