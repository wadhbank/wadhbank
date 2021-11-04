import styled from "styled-components";
import breakpoints from "../../configs/breakpoints";
import colors from "../../configs/colors";
import fonts from "../../configs/fonts";

const ModalWrapper = styled.div`
  display: flex;
  font-family: Raleway;
  .container_modal_waiting_list {
    margin: auto;
    display: flex;
    flex-direction: column;
    padding: 48px 40px 56px 40px;
    text-align: center;
    align-items: center;
    .component_modal_waiting_list_title {
      ${fonts.font_heading_4};
      color: ${colors.black100};
      margin-bottom: 16px;
    }
    .component_modal_waiting_list_subtitle {
      ${fonts.font_normal};
      color: ${colors.black100};
      margin-bottom: 32px;
    }
    .component_modal_waiting_list_sequence {
      ${fonts.font_large};
      color: ${colors.black100};
      max-width: 620px;
      padding: 20px 0;
      border: 1px solid ${colors.black40};
      border-radius: 10px;
      text-align: center;
      width: -webkit-fill-available;
      margin-bottom: 40px;
      .bold {
        font-weight: 700;
      }
    }
    .component_modal_waiting_list_social_share {
      ${fonts.font_normal};
      color: ${colors.black100};
      max-width: 380px;
      margin-bottom: 28px;
    }
    .component_modal_waiting_list_social_list {
      display: flex;
      flex-direction: row;
      gap: 32px;
      > * :not(:first-child) {
        path {
          fill: ${colors.black50};
        }
      }
      > :first-child {
        path {
          fill: ${colors.blue70};
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    .container_modal_waiting_list {
      padding: 24px 20px 28px 20px;
      .component_modal_waiting_list_title {
        ${fonts.font_heading_5};
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    .container_modal_waiting_list {
      padding: 16px 16px 28px 16px;
      .component_modal_waiting_list_title {
        ${fonts.font_heading_6};
        margin-bottom: 16px;
      }
      .component_modal_waiting_list_subtitle {
        ${fonts.font_small};
        margin-bottom: 24px;
      }
      .component_modal_waiting_list_sequence {
        ${fonts.font_small};
        padding: 16px 0;
      }
      .component_modal_waiting_list_social_share {
        ${fonts.font_small};
      }
    }
  }
`;

export default ModalWrapper;
