import styled from "styled-components";
import Name from "../Name";
// eslint-disable-next-line import/prefer-default-export
export const StyledName = styled(Name)`
  color: ${(props) => props.theme.lightText};
`;
