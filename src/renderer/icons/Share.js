// @flow

import React from "react";

const path = (
  <path
    fill="currentColor"
    d="M2.58333333 8c0-.41421356.33578644-.75.75-.75.41421357 0 .75.33578644.75.75v4.6666667c0 .2301186.18654802.4166666.41666667.4166666h7c.2301186 0 .4166667-.186548.4166667-.4166666V8c0-.41421356.3357864-.75.75-.75.4142135 0 .75.33578644.75.75v4.6666667c0 1.0585457-.8581209 1.9166666-1.9166667 1.9166666h-7c-1.05854577 0-1.91666667-.8581209-1.91666667-1.9166666V8zm3.61366342-2.96966991c-.29289322.29289321-.76776695.29289321-1.06066017 0-.29289322-.29289322-.29289322-.76776696 0-1.06066018l2.33333333-2.33333333c.29289322-.29289322.76776696-.29289322 1.06066018 0l2.33333331 2.33333333c.2928932.29289322.2928932.76776696 0 1.06066018-.2928932.29289321-.7677669.29289321-1.06066015 0L8 3.22732684 6.19699675 5.03033009zM7.25 2.16666667c0-.41421357.33578644-.75.75-.75s.75.33578643.75.75V9.75c0 .4142136-.33578644.75-.75.75s-.75-.3357864-.75-.75V2.16666667z"
  />
);

const Share = ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 16 16" height={size} width={size} {...p}>
    {path}
  </svg>
);

export default Share;
