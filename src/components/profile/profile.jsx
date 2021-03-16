import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import './style.scss';

const Profile = ({ user, onSignOut }) => {
  const { name, email } = user;

  return (
    <section className="profile">
      <p className="profile__title">{name || email}</p>
      <button
        className="profile__log-out-button"
        type="button"
        aria-label="Log out"
        onClick={onSignOut}
      >
        <Icon icon={SystemIconNames.signOut} />
      </button>
    </section>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default Profile;
