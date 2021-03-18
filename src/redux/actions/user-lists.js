import ActionType from 'src/redux/types/user-lists';

const ActionCreator = {
  setUserLists: (lists) => ({
    type: ActionType.SET_USER_LISTS,
    payload: lists,
  }),
};

export default ActionCreator;
