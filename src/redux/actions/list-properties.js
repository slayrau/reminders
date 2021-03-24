import ActionType from 'src/redux/types/list-properties';
import { BadgeIconNames, ColorTypes } from 'src/utils/const';

const ActionCreator = {
  createNewList: () => ({
    type: ActionType.OPEN_LIST,
    payload: {
      id: 'NEW_LIST',
      title: 'New list',
      color: ColorTypes.red,
      icon: BadgeIconNames.react,
    },
  }),

  editCurrentList: ({ id, title, color, icon }) => ({
    type: ActionType.OPEN_LIST,
    payload: {
      id,
      title,
      color,
      icon,
    },
  }),

  closeList: () => ({
    type: ActionType.CLOSE_LIST,
  }),
};

export default ActionCreator;
