import PropTypes from 'prop-types';

import { SystemIconNames, BadgeIconNames } from 'src/utils/const/icons';
import IconButton from 'src/components/icon-button';
import Title from 'src/components/typography/title';
import Text from 'src/components/typography/text';
import Icon from 'src/components/icon/icon';
import Badge from 'src/components/badge';

import './style.scss';

const Header = ({ title, icon, count, isSmallMedia, onBackward, onListEdit, onAddReminder }) => {
  return (
    <div className="header">
      <div className="header__controls">
        {isSmallMedia && (
          <IconButton
            className="header__button header__button--backward"
            icon={SystemIconNames.chevronBackward}
            aria-label="Backward to lists"
            onClick={onBackward}
          />
        )}

        <IconButton
          className="header__button header__button--list-properties"
          icon={SystemIconNames.gear}
          aria-label="List properties"
          onClick={onListEdit}
        />

        <IconButton
          className="header__button header__button--add-reminder"
          icon={SystemIconNames.plus}
          aria-label="Add reminder"
          onClick={onAddReminder}
        />
      </div>

      <div className="header__content">
        <Badge className="header__badge" icon={icon} />
        <Title className="header__title" level="2" weight="bold" aria-label={`List name: ${title}`}>{title}</Title>
        <Text className="header__count" aria-label={`Reminders count: ${count}`}>{count}</Text>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.values(BadgeIconNames)).isRequired,
  count: PropTypes.number.isRequired,
  isSmallMedia: PropTypes.bool.isRequired,
  onBackward: PropTypes.func.isRequired,
  onListEdit: PropTypes.func.isRequired,
  onAddReminder: PropTypes.func.isRequired,
};

export default Header;
