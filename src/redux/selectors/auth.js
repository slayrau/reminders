const Selector = {
  auth: (state) => state.auth,
  user: (state) => state.auth.user,
  loading: (state) => state.auth.loading,
  error: (state) => state.auth.arror,
};

export default Selector;
