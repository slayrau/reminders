import ReactFocusLock from 'react-focus-lock';
import PropTypes from 'prop-types';

import './style.scss';

const Modal = ({ children, targetRef, ...restProps }) => {
  return (
    <ReactFocusLock>
      <div className="modal-wrapper">
        <div className="modal" {...restProps} ref={targetRef}>
          {children}
        </div>
      </div>
    </ReactFocusLock>
  );
};

Modal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  targetRef: PropTypes.any.isRequired,
};

export default Modal;
