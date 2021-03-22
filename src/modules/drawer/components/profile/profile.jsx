import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const';
import IconButton from 'src/components/icon-button';
import Headline from 'src/components/typography/headline';
import Caption from 'src/components/typography/caption';
import Icon from 'src/components/icon';
import './style.scss';

const Profile = ({ user, updatingInProcess, onEdit }) => {
  const { name, email, photo } = user;

  return (
    <section className="profile">
      <div className="profile__avatar">
        {updatingInProcess && (
          <Icon className="profile__spinner-icon" icon={SystemIconNames.spinner} />
        )}

        {photo
          ? (
            <img src={photo} alt="" />
          ) : (
            <Icon className="profile-properties__person-icon" icon={SystemIconNames.personCircle} />
          )}
      </div>

      <div className="profile__info">
        <Headline title={name}>{name}</Headline>
        <Caption title={email}>{email}</Caption>
      </div>

      <IconButton
        icon={SystemIconNames.gear}
        onClick={onEdit}
        aria-label="Edit profile"
      />
    </section>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  onEdit: PropTypes.func.isRequired,
  updatingInProcess: PropTypes.bool.isRequired,
};

export default Profile;
