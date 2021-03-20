import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const';
import IconButton from 'src/components/icon-button';
import Headline from 'src/components/typography/headline';
import './style.scss';

const Profile = ({ user, onSignOut }) => {
  const { name, email } = user;

  return (
    <section className="profile">
      <Headline>{name || email}</Headline>

      <IconButton
        icon={SystemIconNames.signOut}
        onClick={onSignOut}
        aria-label="Sign Out"
      />
    </section>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default Profile;
