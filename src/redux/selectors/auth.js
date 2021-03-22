const Selector = {
  auth: (state) => state.auth,
  authData: (state) => state.auth.data,
  authorized: (state) => state.auth.authorized,
  authLoading: (state) => state.auth.authLoading,
  dataUpdating: (state) => state.auth.dataUpdating,
  photoUpdating: (state) => state.auth.photoUpdating,
  error: (state) => state.auth.error,
};

export default Selector;
