import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const';
import Button from 'src/components/button';
import Headline from 'src/components/typography/headline';
import './style.scss';

const Profile = ({ user, onSignOut }) => {
  const { name, email } = user;

  return (
    <section className="profile">
      <Headline>{name || email}</Headline>

      <Button
        icon={SystemIconNames.signOut}
        onClick={onSignOut}
        titleHidden
      >
        Sign Out
      </Button>
    </section>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default Profile;
