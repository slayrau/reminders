import { memo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { BadgeIconNames } from 'src/utils/const';
import Badge from 'src/components/badge';
import './style.scss';

const BadgeRadio = memo(({ id, name, value, title, checked, onChange, onBlur }) => (
  <div className={classNames('badge-radio')}>
    <label
      className={classNames('badge-radio__label', `badge-radio__label--${name}`, {
        'badge-radio__label--checked': checked,
        [`system-color--${id}`]: name === 'color',
      })}
      htmlFor={id}
      aria-label={title}
    >
      <input
        className="badge-radio__input visually-hidden"
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {name === 'icon' && (
        <Badge icon={BadgeIconNames[id]} />
      )}
    </label>
  </div>
));

BadgeRadio.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

export default BadgeRadio;
