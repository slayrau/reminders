import ActionType from 'src/redux/types/profile-properties';

const ActionCreator = {
  openProfile: () => ({
    type: ActionType.OPEN_PROFILE,
  }),

  closeProfile: () => ({
    type: ActionType.CLOSE_PROFILE,
  }),
};

export default ActionCreator;
