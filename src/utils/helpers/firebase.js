const convertDoc = (doc) => ({
  id: doc.id,
  ...doc.data(),
});

export {
  convertDoc,
};
