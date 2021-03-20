import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const MediaContext = createContext();

const useMediaContext = () => useContext(MediaContext);
const setMediaAttribute = (attr) => document.documentElement.setAttribute('data-small-media', attr);

const MediaProvider = ({ children }) => {
  const mediaQuery = window.matchMedia('(max-width: 580px)');
  const [isSmallMedia, setSmallMedia] = useState(mediaQuery.matches);
  setMediaAttribute(mediaQuery.matches);

  useEffect(() => {
    const listener = (event) => {
      setSmallMedia(event.matches);
      setMediaAttribute(event.matches);
    };

    mediaQuery.addListener(listener);

    return () => mediaQuery.removeListener(listener);
  }, []);

  return (
    <MediaContext.Provider
      value={isSmallMedia}
    >
      {children}
    </MediaContext.Provider>
  );
};

MediaProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export {
  useMediaContext,
  MediaProvider,
};
