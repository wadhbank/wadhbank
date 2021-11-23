import styled, { css } from "styled-components";
import { Button as ButtonAntd } from "antd";
import colors from "../../configs/colors";

const Button = styled(ButtonAntd)`
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  text-shadow: none;
  min-width: ${(props) => {
    return props.minWidth ? `${props.minWidth}px` : "initial";
  }};

  ${(props) => {
    return (
      props.type === "primary" &&
      css`
        background: ${colors.primary_base};
        border: none;
        color: ${colors.white100};
        :hover {
          background: ${colors.primary_hover};
          color: ${colors.white100};
        }
        :focus {
          background: ${colors.primary_focus};
          color: ${colors.white100};
        }
      `
    );
  }}

  ${(props) => {
    return (
      props.type === "text" &&
      css`
        background: transparent;
        border-color: ${colors.white60};
        color: ${colors.white100};
        :hover {
          border-color: ${colors.white100};
          color: ${colors.white100};
        }
        :focus {
          background: ${colors.white10};
          border-color: ${colors.white100};
          color: ${colors.white100};
        }
      `
    );
  }}

  ${(props) => {
    return (
      props.type === "default" &&
      css`
        background: ${colors.white100};
        border-color: ${colors.blue70};
        color: ${colors.blue70};
        :hover {
          background: ${colors.blue10};
          color: ${colors.blue70};
          border-color: ${colors.blue70};
        }
        :focus {
          background: ${colors.blue20};
          border-color: ${colors.blue70};
          color: ${colors.blue70};
        }
      `
    );
  }}

  ${(props) => {
    return (
      props.size === "middle" &&
      css`
        padding: 20px 24px;
      `
    );
  }}

  ${(props) => {
    return (
      props.size === "small" &&
      css`
        padding: 14px 24px;
      `
    );
  }}

${(props) => {
    return (
      props.padding &&
      css`
        padding: ${props.padding};
      `
    );
  }}
`;

export default Button;
