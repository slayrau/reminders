import { SystemIconNames } from 'src/utils/const';

const FILTERS = {
  today: {
    id: 'today',
    title: 'Today',
    icon: SystemIconNames.today,
    color: 'blue',
  },

  planned: {
    id: 'planned',
    title: 'Planned',
    icon: SystemIconNames.calendar,
    color: 'red',
  },

  all: {
    id: 'all',
    title: 'All',
    icon: SystemIconNames.tray,
    color: 'gray',
  },

  flagged: {
    id: 'flagged',
    title: 'Flagged',
    icon: SystemIconNames.flag,
    color: 'orange',
  },
};

export {
  FILTERS,
};
