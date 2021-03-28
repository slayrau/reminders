/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useRef } from 'react';
import { Field, Formik, Form } from 'formik';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// UTILS
import { SystemIconNames } from 'src/utils/const/icons';
import { Theme } from 'src/utils/const';

// HOOKS
import useProfileProperties from 'src/hooks/use-profile-properties';
import useKeyDown from 'src/hooks/use-key-down';
import useOutsideClick from 'src/hooks/use-outside-click';

// CONTEXT
import { useThemeContext } from 'src/contexts/theme';

// COMPONENTS
import Modal from 'src/components/modal';
import ModalHeader from 'src/components/modal/header';
import Button from 'src/components/button';
import Headline from 'src/components/typography/headline';
import Icon from 'src/components/icon';
import Bubble from 'src/components/bubble';
import BubbleGroup from 'src/components/bubble/group';
import Caption from 'src/components/typography/caption';

// OWN
import InputPicture from './components/input-picture';
import './style.scss';

const ProfileProperties = () => {
  const escapeKeyDowned = useKeyDown('Escape');
  const profilePropertiesScrollRef = useRef();
  const profilePropertiesModalRef = useRef();
  const { themeId, setTheme } = useThemeContext();
  const {
    name,
    email,
    photo,
    blobPicture,
    orginalPicture,
    setFilePicture,
    handleRemovePhoto,
    handleCancelSelectPhoto,
    handleCancelModal,
    handleSubmit,
    handleSignOut,
  } = useProfileProperties();

  useEffect(() => {
    if (escapeKeyDowned) {
      handleCancelModal();
    }
  }, [escapeKeyDowned, handleCancelModal]);

  useEffect(() => {
    const ref = profilePropertiesScrollRef.current;

    disableBodyScroll(ref);
    return () => enableBodyScroll(ref);
  }, []);

  useOutsideClick(profilePropertiesModalRef, handleCancelModal);

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
        <Modal style={{ height: 'calc(100% - 40px)' }} targetRef={profilePropertiesModalRef}>
          <ModalHeader
            title="Profile properties"
            onCancel={handleCancelModal}
          />
          <div className="profile-properties" ref={profilePropertiesScrollRef}>

            <div className="profile-properties__row">
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
                      onClick={handleCancelSelectPhoto}
                      type="button"
                      aria-label="Cancel selected photo"
                    >
                      <Icon icon={SystemIconNames.xmark} />
                      <Headline>Cancel</Headline>
                    </Button>
                  )}
              </BubbleGroup>
            </div>

            <div className="profile-properties__row">
              <Caption className="profile-properties__caption">Profile info</Caption>

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
            </div>

            <div className="profile-properties__row">
              <Caption className="profile-properties__caption">Theme</Caption>

              <BubbleGroup className="profile-properties__theme">
                {Object.values(Theme).map((theme) => (
                  <Button
                    className="profile-properties__button profile-properties__button--theme"
                    key={theme.id}
                    id={theme.id}
                    onClick={() => setTheme(theme.id)}
                    type="button"
                  >
                    <Icon icon={theme.icon} />
                    <Headline>{theme.title}</Headline>
                    {theme.id === themeId && (
                      <Icon className="profile-properties__icon profile-properties__icon--checkmark" icon={SystemIconNames.checkmarkCircleFill} />
                    )}
                  </Button>
                ))}
              </BubbleGroup>
            </div>

            <div className="profile-properties__row">
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
        </Modal>
      </Form>
    </Formik>
  );
};

export default ProfileProperties;
