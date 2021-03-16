import { useState } from 'react';

import { SystemIconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
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
    <div className="search">
      <label htmlFor="search__label" aria-label="Search reminders">
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
      </label>

      {value && (
        <button
          className="search__clear-button"
          type="button"
          onClick={handleClearClick}
          aria-label="Clear search"
        >
          <Icon className="search__icon search__icon--xmark" icon={SystemIconNames.xmarkCircleFilled} />
        </button>
      )}
    </div>
  );
};

export default Search;
