// @flow

import React from "react";

const path = (
  <g transform="translate(374.01 -80.021)">
    <path
      fill="currentColor"
      d="m-360.1 81.906a0.67329 0.67329 0 0 1 1.3465 0v3.5909a0.67329 0.67329 0 0 1-0.67325 0.67325h-3.5909a0.6733 0.6733 0 0 1 0-1.3466h2.9177zm-11.82 6.6575v2.9176a0.67332 0.67332 0 1 1-1.3466 0v-3.5909a0.67329 0.67329 0 0 1 0.67326-0.67325h3.5908a0.67329 0.67329 0 0 1 0 1.3466zm1.4633-3.441a0.67329 0.67329 0 0 1-1.2696-0.44884 6.0597 6.0597 0 0 1 9.9827-2.2775l2.7775 2.6097a0.67329 0.67329 0 1 1-0.92204 0.98128l-2.792-2.6241a4.7131 4.7131 0 0 0-7.7769 1.7596zm-2.5981 3.2587a0.67329 0.67329 0 1 1 0.92203-0.98116l2.7919 2.624a4.7131 4.7131 0 0 0 7.777-1.7595 0.67329 0.67329 0 1 1 1.2696 0.44884 6.0597 6.0597 0 0 1-9.9826 2.2775l-2.7786-2.6097z"
      strokeWidth=".89773"
    />
  </g>
);

const Refresh = ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 16 13.344" height={size} width={size} {...p}>
    {path}
  </svg>
);

export default Refresh;
