import { useRef } from 'react';
import ReactFocusLock from 'react-focus-lock';
import PropTypes from 'prop-types';

import './style.scss';

const Modal = ({ children, ...restProps }) => {
  const modalRef = useRef();

  return (
    <ReactFocusLock>
      <div className="modal-wrapper">
        <div className="modal" {...restProps} ref={modalRef}>
          {children}
        </div>
      </div>
    </ReactFocusLock>
  );
};

Modal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default Modal;
