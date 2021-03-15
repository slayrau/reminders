import { useState } from 'react';
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
        />
      )}
    </div>
  );
};

export default Search;
