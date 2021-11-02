import styled from "styled-components";
import { Form as FormAntd } from "antd";
import { FormProps } from "antd/lib/form";
import colors from "../../configs/colors";
import fonts from "../../configs/fonts";

const Form: typeof FormAntd = styled(FormAntd)<FormProps>`
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
        height: auto;
        border-radius: 0;
        font-size: 16px;
        font-weight: 400px;
        color: ${colors.black60};
      }
      .ant-input-affix-wrapper.ant-input-password {
        height: 64px;
        border-radius: 10px;
        border: 1px solid ${colors.black50} !important;
      }
      .ant-input-affix-wrapper.ant-input-password {
        padding: 20px 24px !important;
      }
      .ant-input-suffix {
        svg {
          width: 24px;
          height: 24px;
          fill: ${colors.black100};
        }
      }
    }
  }
`;

export default Form;
