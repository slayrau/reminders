import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX
import ProfileParamsActionCreator from 'src/redux/actions/profile-properties';
import AuthOperation from 'src/redux/operations/auth';
import AuthSelector from 'src/redux/selectors/auth';

const useProfileProperties = () => {
  const [filePicture, setFilePicture] = useState(null);
  const [reqestToRemovePhoto, setRequestToRemovePhoto] = useState(false);

  const dispatch = useDispatch();
  const { name, email, photo } = useSelector(AuthSelector.authData);

  const blobPicture = filePicture ? URL.createObjectURL(filePicture) : '';
  const orginalPicture = reqestToRemovePhoto ? null : photo;

  const cleanUpBlob = () => URL.revokeObjectURL(blobPicture);

  const handleCancelModal = () => {
    dispatch(ProfileParamsActionCreator.closeProfile());
  };

  const handleSubmit = (values) => {
    if (reqestToRemovePhoto && !filePicture) {
      dispatch(AuthOperation.removePhoto());
    }

    if (filePicture) {
      dispatch(AuthOperation.updatePhoto(filePicture));
    }

    if (values.name !== name || values.email !== email) {
      dispatch(AuthOperation.updateProfile({
        name: values.name,
        email: values.email,
      }));
    }

    dispatch(ProfileParamsActionCreator.closeProfile());
  };

  const handleSignOut = () => {
    dispatch(AuthOperation.signOut());
  };

  const handleRemovePhoto = () => {
    setRequestToRemovePhoto(true);
  };

  const handleCancelSelectPhoto = () => {
    setFilePicture(null);
    cleanUpBlob();
  };

  useEffect(() => {
    return () => {
      cleanUpBlob();
      dispatch(ProfileParamsActionCreator.closeProfile());
    };
  }, []);

  return {
    name,
    email,
    photo,
    blobPicture,
    orginalPicture,
    setFilePicture,
    handleCancelModal,
    handleSubmit,
    handleRemovePhoto,
    handleCancelSelectPhoto,
    handleSignOut,
  };
};

export default useProfileProperties;
