import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const DatabaseRestore = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6C4 6 4 3 11 3C18 3 18 6 18 6M4 6C4 6 4 9 11 9C18 9 18 6 18 6M4 6V12M18 6V12C18 12 18 15 11 15C4 15 4 12 4 12M11 21C4 21 4 18 4 18V12"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 22V16M19 16L22 19M19 16L16 19"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

DatabaseRestore.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

DatabaseRestore.displayName = 'DatabaseRestore';

export default DatabaseRestore;