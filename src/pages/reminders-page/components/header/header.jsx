import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const/icons';
import IconButton from 'src/components/icon-button';
import Title from 'src/components/typography/title';
import Text from 'src/components/typography/text';
import './style.scss';

const Header = ({ title, count }) => {
  return (
    <div className="header">
      <div className="header__controls">
        <IconButton icon={SystemIconNames.plus} aria-label="Add reminder" />
      </div>

      <div className="header__content">
        <Title className="header__title" level="2" weight="bold">{title}</Title>
        <Text className="header__count">{count}</Text>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Header;
