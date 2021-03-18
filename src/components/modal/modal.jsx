import PropTypes from 'prop-types';

import './style.scss';

const Modal = ({ children, ...restProps }) => {
  return (
    <div className="modal">
      <div className="modal__layout">
        <div className="modal__box" {...restProps}>
          {children}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
};

export default Modal;
