import PropTypes from 'prop-types';

import Button from 'src/components/button';
import Headline from 'src/components/typography/headline';
import Title from 'src/components/typography/title';
import './style.scss';

const Modal = ({ children, header, title, onCancel, ...restProps }) => {
  return (
    <div className="modal-wrapper">

      <div className="modal" {...restProps}>
        {header && (
          <>
            <div className="modal__header">
              <div className="modal__header-left">
                <Button className="modal__button modal__button--cancel" onClick={onCancel}>
                  <Headline>Cancel</Headline>
                </Button>
              </div>

              <div className="modal__header-content">
                <Title level="2" weight="bold">{title}</Title>
              </div>

              <div className="modal__header-right">
                <Button className="modal__button modal__button--submit" type="submit">
                  <Headline>Done</Headline>
                </Button>
              </div>
            </div>
          </>
        )}

        <div className="modal__content">
          {children}
        </div>
      </div>

    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  header: PropTypes.bool,
  title: PropTypes.string,
  onCancel: PropTypes.func,
};

Modal.defaultProps = {
  header: false,
  title: '',
  onCancel: () => { },
};

export default Modal;
