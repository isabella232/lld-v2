// @flow

import React from "react";

const path = (
  <path
    fill="currentColor"
    d="M14.355 5.239c.01.142.01.284.01.426 0 4.335-3.299 9.33-9.33 9.33A9.267 9.267 0 0 1 0 13.523c.264.03.518.04.792.04a6.567 6.567 0 0 0 4.07-1.4 3.285 3.285 0 0 1-3.065-2.275c.203.03.406.051.62.051.294 0 .588-.04.862-.112A3.28 3.28 0 0 1 .65 6.61v-.04c.437.243.945.395 1.483.416A3.277 3.277 0 0 1 .67 4.254c0-.61.162-1.168.447-1.655A9.321 9.321 0 0 0 7.878 6.03a3.702 3.702 0 0 1-.081-.75A3.278 3.278 0 0 1 11.077 2a3.27 3.27 0 0 1 2.395 1.036 6.456 6.456 0 0 0 2.081-.792 3.27 3.27 0 0 1-1.441 1.807c.66-.071 1.3-.254 1.888-.508a7.049 7.049 0 0 1-1.645 1.696z"
  />
);

const Twitter = ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 16 16" height={size} width={size} {...p}>
    {path}
  </svg>
);

export default Twitter;
