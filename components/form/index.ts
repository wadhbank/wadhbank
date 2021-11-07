import styled from "styled-components";
import { Form as FormAntd } from "antd";
import colors from "../../configs/colors";
import fonts from "../../configs/fonts";

const Form: typeof FormAntd = styled(FormAntd)`
  font-family: Raleway;
  .ant-form-item-control-input-content .ant-input {
    border: 1px solid ${colors.black60} !important;
    border-radius: 10px;
  }

  .ant-form-item-explain.ant-form-item-explain-error {
    margin-top: 1px;
  }

  .ant-input {
    font-size: 14px;
    height: 44px;
  }

  .ant-input-affix-wrapper.ant-input-password {
    padding: 10px;
  }

  .ant-form-item-control-input-content textarea.ant-input {
    padding: 12px 16px !important;
  }

  .ant-form-item {
    margin-bottom: 0;
    .ant-form-item-label {
      > label {
        ${fonts.font_small_medium}
        color: ${colors.black100};
      }
    }
  }

  .ant-form-item-explain.ant-form-item-explain-error {
    margin-top: 12px !important;
  }

  &.login-form {
    .password-form {
      .ant-input {
        border: none !important;
        height: 64px;
        border-radius: 0;
        font-size: 16px;
        font-weight: 400px;
        color: ${colors.black60};
        padding: 20px 60px 20px 24px !important;
        width: 100%;
      }
      .ant-input-affix-wrapper.ant-input-password {
        height: 64px;
        border: 1px solid ${colors.black50} !important;
      }
      .ant-input-affix-wrapper.ant-input-password {
        padding: 0 !important;
        border-radius: 10px;
        overflow: hidden;
      }
      .ant-input-suffix {
        position: absolute;
        right: 24px;
        top: 20px;
        svg {
          width: 24px;
          height: 24px;
          fill: ${colors.black100};
        }
      }
    }
  }
  input:-internal-autofill-selected {
    background-color: red;
    color: yellow;
  }
`;

export default Form;
