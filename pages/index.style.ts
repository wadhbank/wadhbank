import styled from "styled-components";
import fonts from "../configs/fonts";
import breakpoints from "../configs/breakpoints";
import colors from "../configs/colors";

const Wrapper = styled.div`
  font-family: Raleway;
`;

export default Wrapper;

export const HeroWrapper = styled.div`
  overflow: hidden;
  position: relative;
  padding: 80px 80px 60px 80px;
  max-width: 1440px;
  margin: 0 auto;
  @media screen and (max-width: ${breakpoints.tab_large}) {
    padding: 32px 40px 0 40px;
  }
  @media screen and (max-width: ${breakpoints.tab}) {
    padding: 32px 16px 0 16px;
  }

  .container_hero_text {
    z-index: 2;
    .component_bonus {
      color: ${colors.black80};
      text-transform: uppercase;
    }

    .component_title {
      color: ${colors.black100};
    }

    .component_subtitle {
      color: ${colors.black80};
    }

    .component_invitation {
      color: ${colors.black100};
      .learn_more {
        cursor: pointer;
        text-decoration: underline;
        font-weight: 700;
      }
    }

    .component_sponsor {
      display: flex;
      flex-wrap: nowrap;
      gap: 32px;
      justify-content: space-between;
    }

    @media screen and (max-width: ${breakpoints.tab_large}) {
      width: 100%;
      .component_bonus {
        ${fonts.font_normal_medium};
        margin-bottom: 24px;
      }
      .component_title {
        ${fonts.font_heading_3};
        margin-bottom: 20px;
        max-width: 480px;
      }
      .component_subtitle {
        ${fonts.font_normal};
        margin-bottom: 60px;
        max-width: 580px;
      }
      .component_invitation {
        ${fonts.font_normal_medium};
        margin-bottom: 20px;
      }
      .component_sponsor {
        display: flex;
        justify-content: space-between;
        max-width: 640px;
      }
      .component_form {
        margin-bottom: 32px;
        /* .component_form_row {
          display: grid;
          align-items: flex-start;
          grid-template-columns: 40% 40% 20%;
          max-width: 770px;
          .ant-input {
            height: 60px;
            ${fonts.font_normal};
          }
          > :first-child {
            .ant-form-item-control-input-content .ant-input {
              border-radius: 10px 0 0 10px;
            }
          }
          > :nth-child(2) {
            .ant-form-item-control-input-content .ant-input {
              border-radius: 0;
            }
          }
        } */
        /* .component_button {
          padding: 0 24px !important;
          height: 60px;
          border-radius: 0 10px 10px 0;
          ${fonts.font_normal_bold};
        } */
      }
    }

    @media screen and (max-width: ${breakpoints.tab}) {
      width: 100%;
      .component_bonus {
        font-size: 10px;
        margin-bottom: 16px;
        font-weight: 500;
      }
      .component_title {
        ${fonts.font_heading_5};
        margin-bottom: 20px;
        max-width: 328px;
      }
      .component_subtitle {
        ${fonts.font_small};
        margin-bottom: 32px;
        max-width: 500px;
      }
      .component_invitation {
        ${fonts.font_small};
        margin-bottom: 16px;
      }

      .component_form {
        margin-bottom: 32px;
        /* .component_form_row {
          display: flex;
          row-gap: 8px !important;
          .ant-input,
          .ant-btn {
            padding: 0 16px;
            height: 45px !important;
            border-radius: 10px !important;
          }
          .ant-btn {
            padding: 0 16px;
            height: 45px !important;
            ${fonts.font_small_bold};
          }
          .ant-input {
            ${fonts.font_small};
          }
        }
        .component_button {
          padding: 0 24px !important;
          height: 45px;
        } */
      }
    }

    @media screen and (min-width: ${breakpoints.tab_large}) {
      .component_bonus {
        ${fonts.font_small_medium};
        margin-bottom: 20px;
      }
      .component_title {
        ${fonts.font_heading_3};
        margin-bottom: 20px;
        max-width: 480px;
      }
      .component_subtitle {
        ${fonts.font_small};
        margin-bottom: 60px;
        max-width: 480px;
      }
      .component_invitation {
        ${fonts.font_normal_medium};
        margin-bottom: 20px;
      }
      .component_sponsor {
        display: flex;
        justify-content: space-between;
        max-width: 640px;
      }
      .component_form {
        margin-bottom: 32px;
        /* .component_form_row {
          display: grid;
          align-items: flex-start;
          grid-template-columns: 40% 40% 20%;
          max-width: 770px;
          > :first-child {
            .ant-input {
              height: 60px;
            }
            .ant-form-item-control-input-content .ant-input {
              border-radius: 10px 0 0 10px;
            }
          }
          > :nth-child(2) {
            .ant-input {
              height: 60px;
            }
            .ant-form-item-control-input-content .ant-input {
              border-radius: 0;
            }
          }
        }
        .component_button {
          padding: 0 24px !important;
          height: 60px;
          border-radius: 0 10px 10px 0;
        } */
      }
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
      .component_bonus {
        ${fonts.font_normal_medium};
        margin-bottom: 24px;
      }
      .component_title {
        ${fonts.font_heading_1};
        margin-bottom: 24px;
        max-width: 620px;
      }
      .component_subtitle {
        ${fonts.font_normal};
        margin-bottom: 60px;
        max-width: 580px;
      }
      .component_invitation {
        ${fonts.font_normal_medium};
        margin-bottom: 20px;
      }
      .component_sponsor {
        display: flex;
        justify-content: space-between;
        max-width: 640px;
      }
      .component_form {
        margin-bottom: 100px;
        /* .component_form_row {
          display: grid;
          align-items: flex-start;
          grid-template-columns: 40% 40% 20%;
          max-width: 770px;
          > :first-child {
            .ant-input {
              height: 60px;
            }
            .ant-form-item-control-input-content .ant-input {
              border-radius: 10px 0 0 10px;
            }
          }
          > :nth-child(2) {
            .ant-input {
              height: 60px;
            }
            .ant-form-item-control-input-content .ant-input {
              border-radius: 0;
            }
          }
        }
        .component_button {
          padding: 0 24px !important;
          height: 60px;
          border-radius: 0 10px 10px 0;
        } */
      }
    }
  }

  .container_hero_image {
    z-index: 1;
    display: flex;
    align-items: flex-end;
    > div img {
      object-fit: scale-down;
    }
    @media screen and (max-width: ${breakpoints.tab_large}) {
      position: unset;
      margin-top: 48px;
      width: 100%;
      height: auto;
      > div {
        width: 100%;
        height: auto;
      }
    }

    @media screen and (min-width: ${breakpoints.tab_large}) {
      position: absolute;
      max-height: 90%;
      bottom: 0;
      right: 0;
      max-width: 45%;
    }

    @media screen and (min-width: ${breakpoints.desktop}) {
      position: absolute;
      height: 90%;
      bottom: 0;
      right: 30px;
    }
  }
`;

export const FormWrapper = styled.div`
  .component_form_row {
    max-width: 770px;
    display: grid;
    align-items: flex-start;
    grid-template-columns: 40% 40% 20%;
    > :first-child {
      .ant-input {
        height: 60px;
      }
      .ant-form-item-control-input-content .ant-input {
        border-radius: 10px 0 0 10px;
      }
    }
    > :nth-child(2) {
      .ant-input {
        height: 60px;
      }
      .ant-form-item-control-input-content .ant-input {
        border-radius: 0;
      }
    }
  }
  .component_button {
    padding: 0 24px !important;
    height: 60px;
    border-radius: 0 10px 10px 0;
  }

  @media screen and (max-width: ${breakpoints.desktop}) {
    margin-bottom: 32px;
    .component_form_row {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 40% 40% 20%;
      max-width: 770px;
      > :first-child {
        .ant-input {
          height: 60px;
        }
        .ant-form-item-control-input-content .ant-input {
          border-radius: 10px 0 0 10px;
        }
      }
      > :nth-child(2) {
        .ant-input {
          height: 60px;
        }
        .ant-form-item-control-input-content .ant-input {
          border-radius: 0;
        }
      }
    }
    .component_button {
      padding: 0 24px !important;
      height: 60px;
      border-radius: 0 10px 10px 0;
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    margin-bottom: 32px;
    .component_form_row {
      display: grid;
      align-items: flex-start;
      grid-template-columns: 40% 40% 20%;
      max-width: 770px;
      .ant-input {
        height: 60px;
        ${fonts.font_normal};
      }
      > :first-child {
        .ant-form-item-control-input-content .ant-input {
          border-radius: 10px 0 0 10px;
        }
      }
      > :nth-child(2) {
        .ant-form-item-control-input-content .ant-input {
          border-radius: 0;
        }
      }
    }
    .component_button {
      padding: 0 24px !important;
      height: 60px;
      border-radius: 0 10px 10px 0;
      ${fonts.font_normal_bold};
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    margin-bottom: 32px;
    .component_form_row {
      display: flex;
      row-gap: 8px !important;
      .ant-input,
      .ant-btn {
        padding: 0 16px;
        height: 45px !important;
        border-radius: 10px !important;
      }
      .ant-btn {
        padding: 0 16px;
        height: 45px !important;
        ${fonts.font_small_bold};
      }
      .ant-input {
        ${fonts.font_small};
      }
    }
    .component_button {
      padding: 0 24px !important;
      height: 45px;
    }
  }
`;

export const AboutAdvantageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: ${colors.primary_base};
  .about_advantage_section_Wrapper {
    .component_about_advantage_bg {
      position: absolute;
      top: 0;
      left: 0;
      display: grid;
      height: 100%;
      width: 100%;
      padding: 0 80px;
    }
  }
`;

export const AboutWrapper = styled.div`
  position: relative;
  overflow: hidden;
  .about_section_wrapper {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    min-height: 920px;
    flex-wrap: nowrap;
    .container_about_base {
      width: 55%;
      padding-top: 120px;
      padding-left: 80px;
      position: relative;
      .component_about_base_row {
        display: flex;
        flex-direction: column;
        .component_about_base_title {
          margin-bottom: 32px;
          ${fonts.font_heading_1};
          min-width: 730px;
          max-width: 730px;
          color: ${colors.white100};
          z-index: 10;
        }
        .component_about_base_subtitle {
          margin-bottom: 40px;
          ${fonts.font_normal};
          max-width: 460px;
          color: ${colors.white100};
          z-index: 10;
        }
        .component_about_base_get_more {
          z-index: 10;
          .ant-btn {
            padding: 0 24px;
            height: 60px;
            ${fonts.font_normal_bold};
          }
        }
      }
      .component_about_base_bg {
        display: grid;
        position: absolute;
        top: -80px;
        z-index: 0;
        > div {
          width: 730px;
          height: 730px;
        }
      }
    }
    .container_about_advisory {
      width: 45%;
      display: flex;
      position: static;
      padding: 120px 80px 0 80px;
      .component_about_advisory_row {
        display: flex;
        flex-direction: column;
        gap: 60px !important;
        margin: 100px auto;
        .component_about_advisor_content {
          display: flex;
          gap: 16px !important;
          max-width: 220px;
          .component_about_advisory_count {
            ${fonts.font_heading_1};
            color: ${colors.white100};
          }
          .component_about_advisory_desc {
            ${fonts.font_normal};
            color: ${colors.white100};
          }
        }
      }
      .component_about_advisory_bg {
        position: absolute;
        width: 100%;
        display: grid;
        top: 50%;
        left: 45%;
        z-index: 0;
        transform: translateY(-50%);
        > div {
          width: 1015px;
          height: 490px;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    .about_section_wrapper {
      min-height: 620px;
      .container_about_base {
        padding: 0;
        padding: 40px;
        .component_about_base_row {
          .component_about_base_title {
            ${fonts.font_heading_4};
            min-width: 480px;
            max-width: 480px;
          }
          .component_about_base_subtitle {
            ${fonts.font_normal};
            max-width: 460px;
          }
        }
        .component_about_base_bg {
          left: 0;
          top: 0;
          > div {
            width: 400px;
            height: 400px;
          }
        }
      }
      .container_about_advisory {
        padding: 40px 16px;
        .component_about_advisory_row {
          margin: 60px auto;
          .component_about_advisor_content {
            .component_about_advisory_count {
              ${fonts.font_heading_4};
            }
          }
        }
        .component_about_advisory_bg {
          top: 50%;
          left: 30%;
          > div {
            transform: scale(0.7);
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    .about_section_wrapper {
      flex-direction: column;
      .container_about_base {
        width: 100%;
        padding: 40px 16px;
        .component_about_base_row {
        }
        .component_about_base_bg {
        }
      }
      .container_about_advisory {
        width: 100%;
        padding: 60px 16px;
        .component_about_advisory_row {
          margin: 0;
        }
        .component_about_advisory_bg {
          transform: none;
          left: 0;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.phone}) {
    .about_section_wrapper {
      .container_about_base {
        padding: 40px 16px 20px 16px;
        .component_about_base_row {
          .component_about_base_title {
            ${fonts.font_heading_5};
            max-width: 328px;
            min-width: unset;
            margin-bottom: 20px;
          }
          .component_about_base_subtitle {
            ${fonts.font_small};
            max-width: 320px;
            margin-bottom: 32px;
          }
          .component_about_base_get_more {
            .ant-btn {
              padding: 0 24px;
              height: 50px;
              ${fonts.font_small_bold};
            }
          }
        }
        .component_about_base_bg {
          > div {
            width: 240px;
            height: 240px;
          }
        }
      }
      .container_about_advisory {
        padding: 20px 16px 80px 16px;
        .component_about_advisory_row {
          gap: 26px !important;
          .component_about_advisor_content {
            .component_about_advisory_count {
              ${fonts.font_heading_5};
            }
            .component_about_advisory_desc {
              ${fonts.font_small};
            }
          }
        }
        .component_about_advisory_bg {
          top: 35%;
          left: -10%;
          transform: scale(0.8);
        }
      }
    }
  }
`;

export const AdvantageWrapper = styled.div`
  position: relative;
  .advantage_section_wrapper {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    .container_advantage_base {
      width: 100%;
      padding: 0 80px;
      .component_advantage_base_row {
        position: relative;
        margin-bottom: 32px;
        .component_advantage_base_title {
          ${fonts.font_heading_1};
          min-width: 600px;
          max-width: 600px;
          color: ${colors.white100};
          z-index: 10;
        }
        .component_advantages_base_bg {
          display: grid;
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          z-index: 0;
          > div {
            width: 600px;
            height: 600px;
          }
        }
        .component_advantage_base_slider_handler {
          z-index: 10;
          .ant-btn:hover path {
            fill: ${colors.white100};
          }
          path {
            fill: ${colors.white80};
          }
        }
      }
    }

    .container_advantage_slider {
      width: 100%;
      padding: 40px 80px 100px 80px;
      .component_slider_item {
        display: flex;
        gap: 32px !important;
        flex-direction: column;
        .component_slider_item_icon {
          width: 60px;
        }
        .component_slider_item_text {
          display: flex;
          flex-direction: column;
          gap: 16px !important;
          max-width: 290px;
          .component_slider_item_text_title {
            ${fonts.font_heading_6};
            color: ${colors.white100};
          }
          .component_slider_item_text_desc {
            ${fonts.font_normal};
            color: ${colors.white100};
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    .advantage_section_wrapper {
      .container_advantage_base {
        padding: 0;
        padding: 40px;
        .component_advantage_base_row {
          .component_advantage_base_title {
            ${fonts.font_heading_4};
            min-width: 480px;
            max-width: 480px;
          }
          .component_advantages_base_bg {
            top: 100%;
            > div {
              width: 400px;
              height: 400px;
            }
          }
        }
      }
      .container_advantage_slider {
        width: 100%;
        padding: 0 40px 48px 40px;
        .component_slider_item {
          gap: 24px !important;
          .component_slider_item_icon {
            width: 48px;
          }
          .component_slider_item_text {
            gap: 12px !important;
            .component_slider_item_text_title {
              ${fonts.font_large_bold};
            }
            .component_slider_item_text_desc {
              ${fonts.font_normal};
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    .advantage_section_wrapper {
      flex-direction: column;
      .container_advantage_base {
        width: 100%;
        margin-top: 40px;
        padding: 40px 16px;
        .component_advantage_base_row {
          .component_advantages_base_bg {
            top: 50% !important;
            transform: translateY(-50%) !important;
            > div {
              width: 300px;
              height: 300px;
            }
          }
          .component_advantage_base_slider_handler {
            display: none;
          }
        }
      }
      .container_advantage_slider {
        width: 100%;
        padding: 0 16px 48px 16px;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.phone}) {
    .advantage_section_wrapper {
      .container_advantage_base {
        padding: 0 16px 20px 16px;
        .component_advantage_base_row {
          margin-bottom: 20px;
          .component_advantage_base_title {
            ${fonts.font_heading_5};
            max-width: 328px;
            min-width: unset;
          }
          .component_advantages_base_bg {
            > div {
              width: 200px;
              height: 200px;
            }
          }
        }
      }
      .container_advantage_slider {
        .component_slider_item {
          gap: 16px !important;
          .component_slider_item_icon {
            width: 32px;
          }
          .component_slider_item_text {
            display: flex;
            flex-direction: column;
            gap: 8px !important;
            .component_slider_item_text_title {
              ${fonts.font_small_bold};
            }
            .component_slider_item_text_desc {
              ${fonts.font_extra_small};
            }
          }
        }
      }
    }
  }
`;

export const InvitationWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  .invitation_section_wrapper {
    padding-top: 128px;
    .container_invitation_heading {
      margin-bottom: 80px;
      padding: 0 80px;
      .component_invitation_heading_row {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-items: center;
        .component_invitation_heading_title {
          ${fonts.font_heading_1}
          color: ${colors.black100};
          margin-bottom: 32px;
        }
        .component_invitation_heading_subtitle {
          ${fonts.font_normal};
          color: ${colors.black100};
          max-width: 836px;
        }
      }
    }

    .container_invitation_list {
      padding-right: 80px;
      .component_invitation_list_row {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        flex-wrap: nowrap;
        .component_invitation_image {
          display: grid;
          justify-content: flex-end;
          > div {
            height: 100%;
            display: block;
            transform: translateX(-100px);
            img {
              object-fit: contain;
            }
          }
        }
        .component_invitation_list {
          flex: 1;
          margin-top: 50px;
          margin-bottom: 200px;
          .ant-list {
            max-width: 613px;
            min-width: 613px;
            padding: 0;
            .ant-list-items {
              .ant-list-item {
                border-bottom: 1px solid ${colors.black50};
                cursor: pointer;
                transition: 0.3s ease-in-out;
                .ant-list-item-meta {
                  .ant-list-item-meta-avatar {
                    margin-right: 40px;
                    ${fonts.font_heading_6};
                    color: ${colors.black50};
                    transition: 0.3s ease-in-out;
                  }
                  .ant-list-item-meta-content {
                    .ant-list-item-meta-title {
                      ${fonts.font_heading_5};
                      color: ${colors.black50};
                      transition: 0.3s ease-in-out;
                      margin: 0;
                    }
                    .ant-list-item-meta-description {
                      ${fonts.font_normal};
                      color: ${colors.black50};
                      transition: 0.3s ease-in-out;
                      max-height: 0;
                      margin-top: 0;
                      overflow: hidden;
                      max-width: 507px;
                    }
                  }
                }
                :hover {
                  border-color: ${colors.black100};
                  .ant-list-item-meta {
                    .ant-list-item-meta-avatar {
                      color: ${colors.black100};
                    }
                    .ant-list-item-meta-title {
                      color: ${colors.black100};
                    }
                    .ant-list-item-meta-description {
                      color: ${colors.black100};
                      max-height: 100px;
                      margin-top: 24px;
                    }
                  }
                }
                :first-child {
                  padding: 0 0 40px 0;
                }
                :not(:first-child) {
                  padding: 40px 0;
                }
                :nth-child(1) {
                  .ant-list-item-meta-title {
                    max-width: 507px;
                  }
                }
                :nth-child(2) {
                  .ant-list-item-meta-title {
                    max-width: 502px;
                  }
                }
                :nth-child(3) {
                  .ant-list-item-meta-title {
                    max-width: 542px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.desktop}) {
    .invitation_section_wrapper {
      padding-top: 128px;
      .container_invitation_list {
        .component_invitation_list_row {
          .component_invitation_list {
            flex: 1;
            margin-top: 40px;
            margin-bottom: 200px;
            .ant-list {
              max-width: 513px;
              min-width: 513px;
              .ant-list-items {
                .ant-list-item {
                  .ant-list-item-meta {
                    .ant-list-item-meta-content {
                      .ant-list-item-meta-title {
                        ${fonts.font_heading_6};
                      }
                      .ant-list-item-meta-description {
                        ${fonts.font_small};
                      }
                    }
                  }
                  :nth-child(1) {
                    .ant-list-item-meta-title {
                      max-width: 390px;
                    }
                  }
                  :nth-child(2) {
                    .ant-list-item-meta-title {
                      max-width: 390px;
                    }
                  }
                  :nth-child(3) {
                    .ant-list-item-meta-title {
                      max-width: 420px;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    .invitation_section_wrapper {
      padding-top: 40px;
      .container_invitation_heading {
        padding: 0 40px;
        .component_invitation_heading_row {
          .component_invitation_heading_title {
            ${fonts.font_heading_4};
          }
        }
      }
      .container_invitation_list {
        padding: 0 40px;
        .component_invitation_list_row {
          display: flex;
          justify-content: center;
          align-items: center;
          .component_invitation_image {
            display: none;
          }
          .component_invitation_list {
            margin-top: 0;
            margin-bottom: 200px;
            .ant-list {
              max-width: unset;
              min-width: unset;
              margin: 0 auto;
              .ant-list-items {
                .ant-list-item {
                  border-bottom: 1px solid ${colors.black30};
                  .ant-list-item-meta {
                    max-width: 513px;
                    min-width: 513px;
                    .ant-list-item-meta-avatar {
                      margin-right: 40px;
                      color: ${colors.black100};
                    }
                    .ant-list-item-meta-content {
                      .ant-list-item-meta-title {
                        color: ${colors.black100};
                      }
                      .ant-list-item-meta-description {
                        color: ${colors.black80};
                        max-height: unset;
                        margin-top: 24px;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    .invitation_section_wrapper {
      .container_invitation_heading {
        margin-bottom: 40px;
        .component_invitation_heading_row {
          .component_invitation_heading_title {
            ${fonts.font_heading_5};
            margin-bottom: 20px;
          }
          .component_invitation_heading_subtitle {
            ${fonts.font_small};
          }
        }
      }
      .container_invitation_list {
        padding: 0 16px;
        .component_invitation_list_row {
          .component_invitation_list {
            margin-top: 0;
            margin-bottom: 40px;
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.phone}) {
    .invitation_section_wrapper {
      .container_invitation_heading {
        margin-bottom: 40px;
        .component_invitation_heading_row {
          .component_invitation_heading_title {
            ${fonts.font_heading_5};
            margin-bottom: 20px;
            max-width: 328px;
          }
          .component_invitation_heading_subtitle {
            ${fonts.font_small};
            max-width: 328px;
          }
        }
      }
      .container_invitation_list {
        .component_invitation_list_row {
          .component_invitation_list {
            .ant-list {
              .ant-list-items {
                .ant-list-item {
                  .ant-list-item-meta {
                    max-width: 328px;
                    min-width: 0;
                    .ant-list-item-meta-avatar {
                      margin-right: 16px;
                      color: ${colors.black100};
                      ${fonts.font_normal_bold};
                    }
                    .ant-list-item-meta-content {
                      .ant-list-item-meta-title {
                        color: ${colors.black100};
                        max-width: 100% !important;
                        ${fonts.font_normal_bold};
                      }
                      .ant-list-item-meta-description {
                        color: ${colors.black80};
                        max-height: unset;
                        margin-top: 16px;
                      }
                    }
                  }
                  :first-child {
                    padding: 0 0 24px 0;
                  }
                  :not(:first-child) {
                    padding: 24px 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const TestimonialWrapper = styled.div`
  background: ${colors.primary_base};
  position: relative;
  .container_testimonial {
    padding: 120px 0 40px 0;
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
    > * {
      z-index: 10;
    }
    .component_testimonial_title {
      ${fonts.font_heading_1};
      color: ${colors.white100};
      margin-bottom: 80px;
      max-width: 720px;
      text-align: center;
    }
    .component_testimonial_slider {
      width: 100%;
      padding-bottom: 24px;
      .swiper-wrapper {
        .swiper-slide {
          width: 400px;
          height: auto;
          margin: 0 20px;
        }
      }
      .component_testimonial_slider_item {
        height: 100%;
        background-color: ${colors.white100};
        padding: 24px;
        border-radius: 10px;
        .component_testimonial_slider_item_row {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          .component_testimonial_slider_item_desc {
            margin-bottom: 40px;
            ${fonts.font_small}
          }
          .component_testimonial_slider_item_bio {
            padding: 0;
            .component_testimonial_slider_item_bio_avatar {
              padding: 0 !important;
              display: grid;
              > div img {
                height: 60px;
                width: 60px;
              }
            }
            .component_testimonial_slider_item_bio_text {
              .component_testimonial_slider_item_bio_text_row {
                display: flex;
                flex-direction: column;
                gap: 4px;
                .component_testimonial_slider_item_bio_name {
                  ${fonts.font_normal};
                  color: ${colors.black60};
                }
                .component_testimonial_slider_item_bio_origin {
                  ${fonts.font_normal_medium};
                  color: ${colors.black100};
                }
              }
            }
          }
        }
      }
    }
  }

  .component_testimonial_base_bg {
    position: absolute;
    display: grid;
    top: 20%;
    left: 20%;
    z-index: 0;
    > div {
      width: 475px;
      height: 475px;
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    .container_testimonial {
      padding: 60px 0 40px 0;
      .component_testimonial_title {
        ${fonts.font_heading_4};
        margin-bottom: 60px;
        max-width: 480px;
      }
    }
    .component_testimonial_base_bg {
      top: 0;
      left: 0;
      > div {
        width: 400px;
        height: 400px;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    .container_testimonial {
      .component_testimonial_title {
        ${fonts.font_heading_5};
        margin-bottom: 40px;
        max-width: 400px;
      }
      .component_testimonial_slider {
        width: 100%;
        .swiper-wrapper {
          .swiper-slide {
            width: 328px;
            height: auto;
            margin: 0 6px;
          }
        }
        .component_testimonial_slider_item {
          height: 100%;
          background-color: ${colors.white100};
          padding: 24px;
          border-radius: 10px;
          .component_testimonial_slider_item_row {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            .component_testimonial_slider_item_desc {
              margin-bottom: 20px;
              ${fonts.font_extra_small}
            }
            .component_testimonial_slider_item_bio {
              .component_testimonial_slider_item_bio_avatar {
                > div img {
                  height: 40px;
                  width: 40px;
                }
              }
              .component_testimonial_slider_item_bio_text {
                .component_testimonial_slider_item_bio_text_row {
                  gap: 0;
                  .component_testimonial_slider_item_bio_name {
                    ${fonts.font_extra_small};
                  }
                  .component_testimonial_slider_item_bio_origin {
                    ${fonts.font_small_medium};
                  }
                }
              }
            }
          }
        }
      }
    }

    .component_testimonial_base_bg {
      > div {
        width: 300px;
        height: 300px;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.phone}) {
    .container_testimonial {
      .component_testimonial_title {
        max-width: 328px;
      }
    }
    .component_testimonial_base_bg {
      top: 10%;
      left: 0;
      > div {
        width: 200px;
        height: 200px;
      }
    }
  }
`;

export const FAQWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  .faq_section_wrapper {
    padding-top: 128px;
    padding-bottom: 60px;
    .container_faq_heading {
      margin-bottom: 80px;
      padding: 0 80px;
      .component_faq_heading_row {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-items: center;
        .component_faq_heading_title {
          ${fonts.font_heading_1};
          color: ${colors.black100};
          margin-bottom: 32px;
        }
        .component_faq_heading_subtitle {
          ${fonts.font_normal};
          color: ${colors.black100};
          max-width: 836px;
        }
      }
    }

    .container_faq_list {
      padding: 0 80px;
      display: flex;
      justify-content: center;
      gap: 40px;
      .component_faq_collapse {
        display: flex;
        flex-direction: column;
        gap: 12px;
        flex: 1;
        .component_faq_collapse_expand_icon {
          transform: rotate(180deg);
          transition: 0.3s ease-in-out;
          position: relative;
          order: 1;
          right: 0;
          &.active {
            transform: rotate(0deg);
          }
          path {
            fill: ${colors.black60};
          }
        }
        .component_faq_collapse_panel {
          height: fit-content;
          border: 1px solid ${colors.black30};
          border-radius: 10px;
          padding: 24px;
          .ant-collapse-header,
          .ant-collapse-content-box {
            padding: 0;
          }
          .ant-collapse-header {
            ${fonts.font_large_medium};
            display: flex;
            justify-content: space-between;
            align-items: center;
            ::before,
            ::after {
              display: none;
            }
          }
          .ant-collapse-content-box {
            padding-top: 12px;
            ${fonts.font_normal};
            color: ${colors.black60};
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    .faq_section_wrapper {
      padding-top: 40px;
      .container_faq_heading {
        padding: 0 40px;
        .component_faq_heading_row {
          .component_faq_heading_title {
            ${fonts.font_heading_4};
          }
        }
      }
      .container_faq_list {
        padding: 0 40px;
        gap: 20px;
        .component_faq_collapse {
          .component_faq_collapse_panel {
            .ant-collapse-header {
              ${fonts.font_normal_medium};
            }
            .ant-collapse-content-box {
              ${fonts.font_small};
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    .faq_section_wrapper {
      padding-bottom: 20px;
      .container_faq_heading {
        margin-bottom: 40px;
        .component_faq_heading_row {
          .component_faq_heading_title {
            ${fonts.font_heading_5};
            margin-bottom: 20px;
          }
          .component_faq_heading_subtitle {
            ${fonts.font_small};
          }
        }
      }
      .container_faq_list {
        padding: 0 16px;
        gap: 12px;
        flex-direction: column;
        .component_faq_collapse {
          .component_faq_collapse_panel {
            .ant-collapse-header {
              ${fonts.font_normal_medium};
            }
            .ant-collapse-content-box {
              ${fonts.font_small};
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.phone}) {
    .faq_section_wrapper {
      .container_faq_heading {
        margin-bottom: 40px;
        .component_faq_heading_row {
          .component_faq_heading_title {
            ${fonts.font_heading_5};
            margin-bottom: 20px;
            max-width: 328px;
          }
          .component_faq_heading_subtitle {
            ${fonts.font_small};
            max-width: 328px;
          }
        }
      }
      .container_faq_list {
        padding: 0 16px;
        gap: 12px;
        flex-direction: column;
        .component_faq_collapse {
          .component_faq_collapse_panel {
            .ant-collapse-header {
              ${fonts.font_small_medium};
            }
            .ant-collapse-content-box {
              ${fonts.font_extra_small};
            }
          }
        }
      }
    }
  }
`;

export const CTAWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding: 60px 80px;
  .cta_section_wrapper {
    padding: 80px 0;
    background-color: ${colors.blue10};
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px #1118280f;
    .container_cta_heading {
      margin-bottom: 40px;
      .component_cta_heading_row {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-items: center;
        .component_cta_heading_title {
          ${fonts.font_heading_1}
          color: ${colors.black100};
          margin-bottom: 32px;
        }
        .component_cta_heading_subtitle {
          ${fonts.font_normal};
          color: ${colors.black100};
          max-width: 836px;
        }
      }
    }

    .container_cta_list {
      gap: 40px;
      .cta_form_wrapper {
        margin: 0 auto;
        max-width: 770px;
      }
    }
    .component_cta_benefit {
      margin-top: 36px;
      .component_cta_benefit_row {
        display: flex;
        justify-content: center;
        column-gap: 40px !important;
        .component_cta_benefit_icon svg {
          height: 24px;
          width: 24px;
        }
        .component_cta_benefit_label {
          ${fonts.font_large};
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    padding: 40px;
    .cta_section_wrapper {
      padding: 40px 0;
      .container_cta_heading {
        .component_cta_heading_row {
          .component_cta_heading_title {
            ${fonts.font_heading_4};
          }
        }
      }
      .container_cta_list {
        padding: 0 40px;
        gap: 20px;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    padding: 40px 20px;
    .cta_section_wrapper {
      padding-bottom: 28px;
      .container_cta_heading {
        margin-bottom: 24px;
        .component_cta_heading_row {
          justify-content: center;
          .component_cta_heading_title {
            ${fonts.font_heading_5};
            margin-bottom: 20px;
          }
          .component_cta_heading_subtitle {
            ${fonts.font_small};
            max-width: 240px;
          }
        }
      }
      .container_cta_list {
        padding: 0 16px;
        gap: 12px;
        flex-direction: column;
      }
      .component_cta_benefit {
        margin-top: 28px;
        .component_cta_benefit_row {
          flex-direction: column;
          align-items: center;
          row-gap: 16px !important;
          .component_cta_benefit_icon svg {
            height: 20px;
            width: 20px;
          }
          .component_cta_benefit_label {
            ${fonts.font_small};
          }
        }
      }
    }
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  padding: 60px 80px 0 80px;
  .footer_wrapper {
    .container_footer_primary {
      max-width: 1200px;
      .container_footer_primary_row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px !important;
        .component_footer_main {
          .component_footer_main_row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: space-between;
            /* gap: 40px !important; */
            .component_footer_base {
              max-width: 290px;
              /* width: max-content; */
              .component_footer_base_row {
                display: flex;
                flex-direction: column;
                .component_footer_base_logo {
                  margin-bottom: 24px;
                  .component_footer_base_logo_row {
                    display: flex;
                    flex-direction: column;
                    gap: 16px !important;
                    .component_footer_base_logo_image {
                      > div img {
                        width: 141px;
                        height: 32px;
                      }
                    }
                    .component_footer_base_logo_tagline {
                      ${fonts.font_normal};
                      color: ${colors.black100};
                      max-width: 200px;
                    }
                  }
                }
                .component_footer_base_contact {
                  margin-bottom: 36px;
                  .component_footer_base_contact_row {
                    display: flex;
                    flex-direction: column;
                    gap: 16px !important;
                    .component_footer_base_contact_content {
                      .component_footer_base_contact_content_icon {
                        svg {
                          height: 20px;
                          width: 20px;
                          path {
                            fill: ${colors.black100};
                          }
                        }
                      }
                      .component_footer_base_contact_content_label {
                        ${fonts.font_small_medium};
                        color: ${colors.black100};
                      }
                    }
                  }
                }
                .component_footer_base_social_media {
                  .component_footer_base_social_media_follow {
                    ${fonts.font_small_bold};
                    color: ${colors.black100};
                  }
                  .component_footer_base_social_media_list {
                    display: flex;
                    flex-direction: row;
                    gap: 24px;
                    > * :not(:nth-child(2)) {
                      path {
                        fill: ${colors.black50};
                      }
                    }
                    > :nth-child(2) {
                      path {
                        fill: ${colors.blue70};
                      }
                    }
                  }
                }
              }
            }
            .component_footer_office {
              max-width: 290px;
              /* width: max-content; */
              .component_footer_office_row {
                display: flex;
                flex-direction: column;
                gap: 24px !important;
                .component_footer_office_heading {
                  ${fonts.font_large_bold};
                  color: ${colors.black100};
                }
                .component_footer_office_content {
                  .component_footer_office_content_title {
                    ${fonts.font_normal_bold};
                    color: ${colors.black100};
                  }
                  .component_footer_office_content_desc {
                    ${fonts.font_small};
                    color: ${colors.black100};
                    max-width: 290px;
                  }
                }
              }
            }
          }
        }

        .component_footer_nav {
          .component_footer_nav_list {
            display: grid;
            /* column-gap: 40px; */
            grid-template-columns: auto auto auto;
            justify-content: space-between;
            .component_footer_company {
              max-width: 180px;
              width: max-content;
              .component_footer_company_row {
                display: flex;
                flex-direction: column;
                gap: 20px !important;
                .component_footer_company_heading {
                  ${fonts.font_large_bold};
                  color: ${colors.black100};
                }
                .component_footer_company_content {
                  .component_footer_company_content_list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px !important;
                    .component_footer_company_content_list_item {
                      ${fonts.font_normal};
                      color: ${colors.black100};
                      cursor: pointer;
                      :hover {
                        text-decoration: underline;
                        font-weight: 500;
                      }
                    }
                  }
                }
              }
            }
            .component_footer_services {
              max-width: 180px;
              width: max-content;
              .component_footer_services_row {
                display: flex;
                flex-direction: column;
                gap: 20px !important;
                .component_footer_services_heading {
                  ${fonts.font_large_bold};
                  color: ${colors.black100};
                }
                .component_footer_services_content {
                  .component_footer_services_content_list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px !important;
                    .component_footer_services_content_list_item {
                      ${fonts.font_normal};
                      color: ${colors.black100};
                      cursor: pointer;
                      :hover {
                        text-decoration: underline;
                        font-weight: 500;
                      }
                    }
                  }
                }
              }
            }
            .component_footer_resources {
              max-width: 180px;
              width: max-content;
              .component_footer_resources_row {
                display: flex;
                flex-direction: column;
                gap: 20px !important;
                .component_footer_resources_heading {
                  ${fonts.font_large_bold};
                  color: ${colors.black100};
                }
                .component_footer_resources_content {
                  .component_footer_resources_content_list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px !important;
                    .component_footer_resources_content_list_item {
                      ${fonts.font_normal};
                      color: ${colors.black100};
                      cursor: pointer;
                      :hover {
                        text-decoration: underline;
                        font-weight: 500;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .container_footer_secondary {
      padding-top: 24px;
      padding-bottom: 27px;
      border-top: 1px solid ${colors.black30};
      margin-top: 48px;
      .container_footer_secondary_row {
        display: grid;
        grid-template-columns: auto auto;
        gap: 40px !important;
        justify-content: space-between;
        align-items: center;
        .container_footer_secondary_copyright {
          ${fonts.font_small};
          color: ${colors.black60};
        }
        .container_footer_secondary_services {
          .container_footer_secondary_services_list {
            display: grid;
            grid-template-columns: repeat(4, auto);
            justify-content: space-between;
            gap: 60px !important;
            .container_footer_secondary_services_list_item {
              ${fonts.font_small_medium};
              color: ${colors.black100};
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    padding: 40px 40px 0 40px;
    .footer_wrapper {
      .container_footer_primary {
        .container_footer_primary_row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px !important;
          .component_footer_main {
            .component_footer_main_row {
              display: grid;
              grid-template-columns: auto auto;
              justify-content: flex-start;
            }
          }
          .component_footer_nav {
            .component_footer_nav_list {
              display: grid;
              grid-template-columns: auto auto auto;
              justify-content: flex-start !important;
              gap: 60px !important;
            }
          }
        }
      }
      .container_footer_secondary {
        padding-top: 24px;
        padding-bottom: 27px;
        border-top: 1px solid ${colors.black30};
        margin-top: 48px;
        .container_footer_secondary_row {
          display: grid;
          grid-template-columns: auto;
          gap: 16px !important;
          .container_footer_secondary_copyright {
            ${fonts.font_small};
            color: ${colors.black60};
          }
          .container_footer_secondary_services {
            flex: auto;
            .container_footer_secondary_services_list {
              display: grid;
              grid-template-columns: repeat(4, auto);
              justify-content: space-between;
              gap: 60px;
              .container_footer_secondary_services_list_item {
                ${fonts.font_small_medium};
                color: ${colors.black100};
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    padding: 30px 16px 0 16px;
  }

  @media screen and (max-width: ${breakpoints.phone}) {
    padding: 20px 16px 0 16px;
    .footer_wrapper {
      .container_footer_primary {
        .container_footer_primary_row {
          gap: 36px !important;
          .component_footer_main {
            .component_footer_main_row {
              grid-template-columns: 1fr;
              gap: 36px !important;
              .component_footer_base {
                .component_footer_base_row {
                  .component_footer_base_logo {
                    margin-bottom: 24x;
                    .component_footer_base_logo_row {
                      display: flex;
                      flex-direction: column;
                      gap: 12px !important;
                      .component_footer_base_logo_image {
                        > div img {
                          width: 124px !important;
                          height: 28px !important;
                        }
                      }
                      .component_footer_base_logo_tagline {
                        ${fonts.font_small};
                        max-width: unset !important;
                      }
                    }
                  }
                  .component_footer_base_contact {
                    margin-bottom: 32px;
                    .component_footer_base_contact_row {
                      gap: 8px !important;
                    }
                  }
                }
              }
              .component_footer_office {
                max-width: 328px;
                .component_footer_office_row {
                  display: flex;
                  flex-direction: column;
                  gap: 20px !important;
                  .component_footer_office_heading {
                    font-size: 16px !important;
                  }
                  .component_footer_office_content {
                    .component_footer_office_content_title {
                      font-size: 14px !important;
                    }
                    .component_footer_office_content_desc {
                      font-size: 12px !important;
                      max-width: 328px;
                    }
                  }
                }
              }
            }
          }

          .component_footer_nav {
            .component_footer_nav_list {
              display: grid;
              grid-template-columns: auto auto;
              gap: 36px !important;
              .component_footer_company {
                .component_footer_company_row {
                  .component_footer_company_heading {
                    font-size: 16px !important;
                  }
                  .component_footer_company_content {
                    .component_footer_company_content_list {
                      gap: 16px !important;
                      .component_footer_company_content_list_item {
                        font-size: 14px !important;
                      }
                    }
                  }
                }
              }
              .component_footer_services {
                .component_footer_services_row {
                  .component_footer_services_heading {
                    font-size: 16px !important;
                  }
                  .component_footer_services_content {
                    .component_footer_services_content_list {
                      gap: 16px !important;
                      .component_footer_services_content_list_item {
                        font-size: 14px !important;
                      }
                    }
                  }
                }
              }
              .component_footer_resources {
                .component_footer_resources_row {
                  .component_footer_resources_heading {
                    font-size: 16px !important;
                  }
                  .component_footer_resources_content {
                    .component_footer_resources_content_list {
                      gap: 16px !important;
                      .component_footer_resources_content_list_item {
                        font-size: 14px !important;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      .container_footer_secondary {
        padding-top: 24px;
        padding-bottom: 24px;
        border-top: 1px solid ${colors.black30};
        margin-top: 24px;
        .container_footer_secondary_row {
          display: grid;
          grid-template-columns: auto;
          gap: 16px !important;
          .container_footer_secondary_copyright {
            ${fonts.font_extra_small};
            color: ${colors.black100};
          }
          .container_footer_secondary_services {
            flex: auto;
            .container_footer_secondary_services_list {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              gap: 24px !important;
              .container_footer_secondary_services_list_item {
                ${fonts.font_extra_small_medium};
                color: ${colors.black100};
              }
            }
          }
        }
      }
    }
  }
`;
