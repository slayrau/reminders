const Selector = {
  currentList: (state) => state.currentList,
  loading: (state) => state.currentList.loading,
  error: (state) => state.currentList.error,
};

export default Selector;
