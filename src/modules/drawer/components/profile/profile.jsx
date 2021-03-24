import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const';
import Button from 'src/components/button';
import Headline from 'src/components/typography/headline';
import Caption from 'src/components/typography/caption';
import Icon from 'src/components/icon';
import './style.scss';

const Profile = ({ user, updatingInProcess, onEdit }) => {
  const { name, email, photo } = user;

  return (
    <Button
      className="profile profile__button"
      onClick={onEdit}
    >
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

      <Icon icon={SystemIconNames.chevronRight} />
    </Button>
  );
};

Profile.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  onEdit: PropTypes.func.isRequired,
  updatingInProcess: PropTypes.bool.isRequired,
};

export default Profile;
