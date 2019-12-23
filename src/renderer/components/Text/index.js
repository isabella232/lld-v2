// @flow

import styled from "styled-components";
import { fontSize, fontWeight, textAlign, color } from "styled-system";

import fontFamily from "~/renderer/styles/styled/fontFamily";

export default styled.span`
  ${fontFamily};
  ${fontSize};
  ${textAlign};
  ${color};
  ${fontWeight};
`;
