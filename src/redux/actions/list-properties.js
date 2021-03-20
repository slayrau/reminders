import ActionType from 'src/redux/types/list-properties';
import { BadgeIconNames, ColorTypes } from 'src/utils/const';

const ActionCreator = {
  createNewList: () => ({
    type: ActionType.CREATE_NEW_LIST,
    payload: {
      id: 'NEW_LIST',
      title: 'New list',
      color: ColorTypes.red,
      icon: BadgeIconNames.react,
    },
  }),

  openList: () => ({
    type: ActionType.OPEN_LIST,
  }),

  closeList: () => ({
    type: ActionType.CLOSE_LIST,
  }),

  reset: () => ({
    type: ActionType.RESET,
  }),
};

export default ActionCreator;
