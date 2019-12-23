// @flow

import React from "react";

const path = (
  <path
    fill="currentColor"
    d="M9.2375 8l4.065625-4.065625c.146875-.146875.146875-.384375 0-.53125l-.70625-.70625c-.146875-.146875-.384375-.146875-.53125 0L8 6.7625 3.934375 2.696875C3.7875 2.55 3.55 2.55 3.403125 2.696875l-.70625.70625c-.146875.146875-.146875.384375 0 .53125L6.7625 8l-4.065625 4.065625c-.146875.146875-.146875.384375 0 .53125l.70625.70625c.146875.146875.384375.146875.53125 0L8 9.2375l4.065625 4.065625c.146875.146875.384375.146875.53125 0l.70625-.70625c.146875-.146875.146875-.384375 0-.53125L9.2375 8z"
  />
);

const Cross = ({ size, ...p }: { size: number }) => (
  <svg viewBox="0 0 16 16" height={size} width={size} {...p}>
    {path}
  </svg>
);

export default Cross;
