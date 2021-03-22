import { Children } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

const BubbleGroup = ({ children, horizontal, className }) => {
  const filteredChildrens = children.filter((child) => child);

  return (
    <div className="bubble-group">
      <div
        className={classNames('bubble-group__grid', className, {
          'bubble-group__grid--horizontal': horizontal,
        })}
      >
        {Children.map(filteredChildrens, (child) => (
          <div className="bubble-group__item">{child}</div>
        ))}
      </div>
    </div>
  );
};

BubbleGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  horizontal: PropTypes.bool,
  className: PropTypes.string,
};

BubbleGroup.defaultProps = {
  horizontal: false,
  className: '',
};

export default BubbleGroup;
