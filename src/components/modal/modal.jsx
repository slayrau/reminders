import ReactFocusLock from 'react-focus-lock';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const Modal = ({ children, targetRef, fullHeight, ...restProps }) => {
  return (
    <ReactFocusLock>
      <div className="modal-wrapper">
        <div
          className={cn('modal', {
            'modal--full-height': fullHeight,
          })}
          {...restProps}
          ref={targetRef}
        >
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
  targetRef: PropTypes.any,
  fullHeight: PropTypes.bool,
};

Modal.defaultProps = {
  targetRef: null,
  fullHeight: false,
};

export default Modal;
