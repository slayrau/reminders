import { FILTERS } from 'src/utils/settings';

import FiltersItem from './filters-item';
import './style.scss';

const Filters = () => (
  <nav className="filters">
    <ul className="filters__list">
      {Object.values(FILTERS).map((filter) => (
        <FiltersItem
          key={filter.id}
          id={filter.id}
          title={filter.title}
          color={filter.color}
          icon={filter.icon}
        />
      ))}
    </ul>
  </nav>
);

export default Filters;
