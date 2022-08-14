import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Button } from './Scroll.styled';

export const ScrollTop = ({ query }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [query]);

  return (
    <>
      {visible ? (
        <Button type="button" onClick={scrollTop}>
          <BsFillArrowUpCircleFill
            size="100%"
            color="rgba(50, 106, 238, 0.9)"
          />
        </Button>
      ) : null}
    </>
  );
};

ScrollTop.prototype = {
  query: PropTypes.string,
};
