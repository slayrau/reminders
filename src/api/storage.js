import { storage, auth } from 'src/firebase';

const storageRef = storage.ref();

export default {
  updatePhoto: async (filePicture) => {
    const prevPhotoUrl = auth.currentUser.photoURL;
    if (prevPhotoUrl) {
      storage.refFromURL(prevPhotoUrl).delete();
    }

    const authUserId = auth.currentUser.uid;
    const newPhotoRef = storageRef.child(`photos/${authUserId}/${filePicture.name}`);
    const response = await newPhotoRef.put(filePicture);
    const photoURL = await response.ref.getDownloadURL();
    auth.currentUser.updateProfile({
      photoURL,
    });

    return photoURL;
  },

  removePhoto: () => {
    storage.refFromURL(auth.currentUser.photoURL).delete();
    auth.currentUser.updateProfile({
      photoURL: '',
    });
  },
};
