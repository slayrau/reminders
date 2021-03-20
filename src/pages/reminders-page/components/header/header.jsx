import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const/icons';
import IconButton from 'src/components/icon-button';
import Title from 'src/components/typography/title';
import Text from 'src/components/typography/text';
import './style.scss';

const Header = ({ title, count, isSmallMedia, onBackward, onAddReminder }) => {
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
          className="header__button header__button--add-reminder"
          icon={SystemIconNames.plus}
          aria-label="Add reminder"
          onClick={onAddReminder}
        />
      </div>

      <div className="header__content">
        <Title className="header__title" level="2" weight="bold" aria-label={`List name: ${title}`}>{title}</Title>
        <Text className="header__count" aria-label={`Reminders count: ${count}`}>{count}</Text>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  isSmallMedia: PropTypes.bool.isRequired,
  onBackward: PropTypes.func.isRequired,
  onAddReminder: PropTypes.func.isRequired,
};

export default Header;
