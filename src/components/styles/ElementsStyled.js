import styled from "styled-components";

export const Tag = styled.span`
  display: inline-block;
  color: #fff;
  background: #261c48;
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 0.7em;
`;
export const H1 = styled.h1`
  color: ${(props) => props.theme.darkText}; ;
`;
export const P = styled.p`
  width: 280px;
  font-size: 13px;
  line-height: 1.4;
  color: ${(props) => props.theme.darkText};
  margin: 20px 0;
`;

export const Image = styled.img`
  position: absolute;
  top: -30px;
  right: -350px;
  z-index: 0;
`;
export const ThemeButton = styled.button`
  border-radius: 20px;
  width: fit-content;
  margin: auto;
  margin-top: 10px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.text};
  padding: 5px;
  border: none;
  cursor: pointer;
`;
