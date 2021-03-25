import PropTypes from 'prop-types';

import Button from 'src/components/button';
import Headline from 'src/components/typography/headline';
import Title from 'src/components/typography/title';
import './style.scss';

const Header = ({ children, title, onCancel }) => {
  return (
    <div className="modal-header">
      <div className="modal-header__top">
        <div className="modal-header__left">
          <Button className="modal-header__button modal-header__button--cancel" onClick={onCancel}>
            <Headline>Cancel</Headline>
          </Button>
        </div>

        <div className="modal-header__content">
          <Title level="2" weight="bold">{title}</Title>
        </div>

        <div className="modal-header__right">
          <Button className="modal-header__button modal-header__button--submit" type="submit">
            <Headline>Done</Headline>
          </Button>
        </div>
      </div>

      {children && (
        <div className="modal-header__bottom">
          {children}
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
};

Header.defaultProps = {
  children: null,
};

export default Header;
