// @flow

import React from "react";

const path = (
  <path
    fill="currentColor"
    d="M15.246.803c-.954-.95-2.618-1.02-4.695-.195-.827.33-1.689.81-2.551 1.375C7.138 1.418 6.276.938 5.449.608 3.377-.217 1.71-.15.754.803-.615 2.166-.058 5.007 1.926 8.018-.058 11.028-.615 13.87.754 15.233c.513.51 1.231.767 2.108.767.754 0 1.627-.19 2.587-.572.827-.33 1.689-.81 2.551-1.375.862.565 1.724 1.045 2.551 1.375.96.382 1.832.572 2.588.572.876 0 1.594-.256 2.107-.767 1.369-1.363.812-4.204-1.172-7.215 1.984-3.01 2.541-5.852 1.172-7.215zm-4.268.864c1.597-.636 2.857-.656 3.459-.058.82.816.46 2.934-1.07 5.401a22.166 22.166 0 0 0-2.03-2.315A22.114 22.114 0 0 0 9.01 2.697c.667-.411 1.33-.776 1.969-1.03zm-9.414-.058c.291-.29.737-.434 1.3-.434.601 0 1.335.164 2.159.492.638.254 1.301.618 1.969 1.03a22.186 22.186 0 0 0-2.329 1.998 22.166 22.166 0 0 0-2.03 2.315c-1.53-2.467-1.89-4.585-1.07-5.4zm3.458 12.76c-1.595.636-2.855.657-3.459.057-.82-.815-.46-2.933 1.07-5.4a22.166 22.166 0 0 0 2.03 2.314c.75.747 1.536 1.403 2.328 1.999-.667.411-1.33.776-1.969 1.03zm.45-3.835a20.63 20.63 0 0 1-2.157-2.516A20.87 20.87 0 0 1 8 3.36a20.897 20.897 0 0 1 4.685 4.658A20.87 20.87 0 0 1 8 12.676a20.93 20.93 0 0 1-2.527-2.142zm8.964 3.892c-.602.6-1.862.58-3.459-.057-.638-.254-1.301-.619-1.969-1.03a22.186 22.186 0 0 0 2.329-1.999 22.166 22.166 0 0 0 2.03-2.315c1.53 2.468 1.89 4.586 1.07 5.401zM8 6.022a2.002 2.002 0 0 0-2.005 1.996c0 1.1.9 1.995 2.005 1.995a2.002 2.002 0 0 0 2.005-1.995c0-1.1-.9-1.996-2.005-1.996zm0 2.851a.857.857 0 0 1-.859-.855c0-.473.385-.855.859-.855.475 0 .859.382.859.855A.857.857 0 0 1 8 8.873z"
  />
);

const Atom = ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 16 16" height={size} width={size} {...p}>
    {path}
  </svg>
);

export default Atom;
