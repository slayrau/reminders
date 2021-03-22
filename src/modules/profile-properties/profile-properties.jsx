/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Field, Formik, Form } from 'formik';

import { SystemIconNames } from 'src/utils/const/icons';

// REDUX
import ProfileParamsActionCreator from 'src/redux/actions/profile-properties';
import AuthOperation from 'src/redux/operations/auth';
import AuthSelector from 'src/redux/selectors/auth';

// COMPONENTS
import Button from 'src/components/button';
import Headline from 'src/components/typography/headline';
import Modal from 'src/components/modal';
import Icon from 'src/components/icon';
import Bubble from 'src/components/bubble';
import BubbleGroup from 'src/components/bubble/group';

// OWN
import InputPicture from './components/input-picture';
import './style.scss';

const ProfileProperties = () => {
  const [filePicture, setFilePicture] = useState(null);
  const dispatch = useDispatch();
  const [reqestToRemovePhoto, setRequestToRemovePhoto] = useState(false);
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

  const handleCancelSelect = () => {
    setFilePicture(null);
    cleanUpBlob();
  };

  useEffect(() => {
    return () => {
      cleanUpBlob();
      dispatch(ProfileParamsActionCreator.closeProfile());
    };
  }, []);

  return (
    <Formik
      initialValues={{
        name,
        email,
        file: '',
      }}
      onSubmit={handleSubmit}
      title="Profile properties"
    >
      <Form>
        <Modal
          header
          title="Profile properties"
          onCancel={handleCancelModal}
        >
          <div className="profile-properties">
            <div className="profile-properties__content">
              <div className="profile-properties__photo">
                {(blobPicture || orginalPicture)
                  ? (
                    <img src={blobPicture || photo} alt="User photo" />
                  ) : (
                    <Icon className="profile-properties__person-icon" icon={SystemIconNames.personCircle} />
                  )}
              </div>

              <BubbleGroup className="profile-properties__photo-controls" horizontal>
                <InputPicture
                  name="file"
                  setFilePicture={setFilePicture}
                />

                {!blobPicture
                  ? (orginalPicture && (
                    <Button
                      className="profile-properties__button profile-properties__button--remove-photo"
                      type="button"
                      onClick={handleRemovePhoto}
                      aria-label="Remove user photo"
                    >
                      <Icon icon={SystemIconNames.trash} />
                      <Headline>Remove photo</Headline>
                    </Button>
                  )) : (
                    <Button
                      className="profile-properties__button profile-properties__button--cancel-selected"
                      onClick={handleCancelSelect}
                      type="button"
                      aria-label="Cancel selected photo"
                    >
                      <Icon icon={SystemIconNames.xmark} />
                      <Headline>Cancel</Headline>
                    </Button>
                  )}
              </BubbleGroup>

              <BubbleGroup className="profile-properties__fields">
                <Field
                  className="profile-properties__input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  spellCheck="false"
                  aria-label="User name"
                />
                <Field
                  className="profile-properties__input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  aria-label="User email"
                  disabled
                />
              </BubbleGroup>

              <div className="profile-properties__footer">
                <Bubble>
                  <Button
                    className="profile-properties__button profile-properties__button--sign-out"
                    onClick={handleSignOut}
                    type="button"
                  >
                    <Icon icon={SystemIconNames.signOut} />
                    <Headline>Sign out</Headline>
                  </Button>
                </Bubble>
              </div>
            </div>
          </div>
        </Modal>
      </Form>
    </Formik>
  );
};

export default ProfileProperties;
