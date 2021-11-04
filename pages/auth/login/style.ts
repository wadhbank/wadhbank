import styled from "styled-components";
import breakpoints from "../../../configs/breakpoints";
import colors from "../../../configs/colors";
import fonts from "../../../configs/fonts";

const Wrapper = styled.div`
  font-family: Raleway;
  width: ${breakpoints.desktop};
  min-height: 100vh !important;
  width: 100%;
  display: grid;
  .container_login {
    background-color: ${colors.black10};
    width: 100%;
    height: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
    overflow-y: hidden;
    overflow-x: auto;
    min-width: ${breakpoints.tab};
    .component_login_row {
      margin-top: 160px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 40px !important;
      .component_login_card {
        width: 480px;
        padding: 40px;
        border: 1px solid ${colors.black30};
        border-radius: 10px;
        background-color: ${colors.white100};
        overflow: hidden;
        .component_login_card_row {
          display: grid;
          grid-template-columns: 1fr;
          justify-items: center;
          .component_login_card_logo {
            margin-bottom: 16px;
            > div {
              display: block !important;
              img {
                width: 141px;
                height: 32px;
              }
            }
          }
          .component_login_card_label {
            ${fonts.font_normal};
            color: ${colors.black80};
            margin-bottom: 40px;
          }
          .component_login_card_form {
            width: 100%;
            .component_login_card_label_form_row {
              display: flex;
              flex-direction: column;
              gap: 32px !important;
              .component_login_card_label_form_email {
                .ant-input {
                  height: 64px;
                  padding: 20px 24px !important;
                  border: 1px solid ${colors.black50} !important;
                  font-size: 16px;
                  font-weight: 400px;
                  color: ${colors.black60};
                }
              }
              .component_login_card_label_form_submit {
                .ant-btn {
                  height: 60px;
                  ${fonts.font_normal_bold};
                }
              }
            }
          }
        }
      }

      .component_login_footer {
        margin-bottom: 40px;
        ${fonts.font_small};
        color: ${colors.black100};
      }
    }
  }
`;

export default Wrapper;
