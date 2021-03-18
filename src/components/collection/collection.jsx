import { Children } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Title from 'src/components/typography/title';
import './style.scss';

const Collection = ({ children, className, title, titleHidden, columns }) => {
  return (
    <section className={classNames('collection', className)}>
      <Title
        className={classNames('collection__title', {
          'visually-hidden': titleHidden,
        })}
        level="2"
        weight="bold"
      >
        {title}
      </Title>

      <ul
        className={classNames('collection__list', {
          [`collection__list--grid collection__list--columns-${columns}`]: columns,
        })}
      >
        {Children.map(children, (child) => (
          <li className="collection__item">{child}</li>
        ))}
      </ul>
    </section>
  );
};

Collection.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleHidden: PropTypes.bool,
  columns: PropTypes.oneOf(['2', '3', '4', '5', '6']),
};

Collection.defaultProps = {
  className: '',
  columns: null,
  titleHidden: false,
};

export default Collection;
