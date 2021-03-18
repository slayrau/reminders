import ActionType from 'src/redux/types/list-properties';
import { BadgeIconNames, ColorTypes } from 'src/utils/const';

const ActionCreator = {
  addNewList: () => ({
    type: ActionType.ADD_NEW_LIST,
    payload: {
      id: 'NEW_LIST',
      title: 'New list',
      color: ColorTypes.red,
      icon: BadgeIconNames.react,
    },
  }),

  open: () => ({
    type: ActionType.OPEN,
  }),

  close: () => ({
    type: ActionType.CLOSE,
  }),
};

export default ActionCreator;
