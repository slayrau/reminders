import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const/icons';
import IconButton from 'src/components/icon-button';
import Title from 'src/components/typography/title';
import Text from 'src/components/typography/text';
import './style.scss';

const Header = ({ title, count, onAddReminder }) => {
  return (
    <div className="header">
      <div className="header__controls">
        <IconButton icon={SystemIconNames.plus} aria-label="Add reminder" onClick={onAddReminder} />
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
  onAddReminder: PropTypes.func.isRequired,
};

export default Header;
