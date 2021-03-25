import { useState } from 'react';
import classNames from 'classnames';

import { SystemIconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import IconButton from 'src/components/icon-button';
import './style.scss';

const Search = () => {
  const [value, setValue] = useState('');

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleClearClick = () => {
    setValue('');
  };

  return (
    <div
      className={classNames('search', {
        'search--empty': !value,
      })}
    >
      <label className="search__label" aria-label="Search reminders">
        <Icon className="search__icon search__icon--search" icon={SystemIconNames.search} />
        <input
          className="search__input"
          type="text"
          value={value}
          id="search"
          placeholder="Search..."
          onChange={handleChange}
          autoComplete="off"
          spellCheck="false"
        />

        {value && (
          <IconButton
            className="search__clear-button"
            icon={SystemIconNames.xmarkCircleFilled}
            onClick={handleClearClick}
            aria-label="Cancel search"
          />
        )}
      </label>
    </div>
  );
};

export default Search;
