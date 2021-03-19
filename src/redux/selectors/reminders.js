const Selector = {
  reminders: (state) => state.reminders,
  editableId: (state) => state.reminders.editableId,
  loading: (state) => state.reminders.loading,
  error: (state) => state.reminders.error,
};

export default Selector;
