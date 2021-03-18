import ActionType from 'src/redux/types/list-properties';

const ActionCreator = {
  open: () => ({
    type: ActionType.OPEN,
  }),

  close: () => ({
    type: ActionType.CLOSE,
  }),
};

export default ActionCreator;
