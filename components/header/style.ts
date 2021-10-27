import { Drawer } from "antd";
import styled, { css } from "styled-components";
import breakpoints from "../../configs/breakpoints";
import colors from "../../configs/colors";
import fonts from "../../configs/fonts";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 40;
  .container_header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: ${colors.white100};
    border-bottom: 1px solid ${colors.black20};
    padding: 28px 80px;
    .component_logo {
      display: flex;
      align-items: center;
      width: 141px;
    }
    .component_nav {
      .component_nav_list {
        overflow: hidden;
        list-style: none;
        display: flex;
        gap: 50px;
        align-items: center;
        flex-direction: row;
        flex: 1;
        .component_nav_list_item {
          a {
            ${fonts.font_small_medium};
            color: ${colors.black60};
            :hover {
              color: ${colors.black100};
            }
          }
          &.active a {
            color: ${colors.black100};
          }
        }
      }
    }

    .component_menus {
      display: flex;
      align-items: center;
      gap: 16px;
      .component_menus_sign_up {
        height: 46px;
        padding: 0 24px;
        ${fonts.font_small_bold};
      }
      .component_menus_hamburger {
        display: none;
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    .container_header {
      padding: 16px 18px;
      .component_nav {
        display: none;
      }
      .component_menus {
        .component_menus_hamburger {
          display: block;
          padding: 0;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    .container_header {
      padding: 16px 18px;
      .component_logo {
        width: 106px;
      }
      .component_nav {
        display: none;
      }
      .component_menus {
        .component_menus_sign_up {
          height: 35px;
          padding: 0 12px;
          ${fonts.font_extra_small_bold};
        }
        .component_menus_hamburger {
          display: block;
          padding: 0;
        }
      }
    }
  }
`;

export const Menus = styled(Drawer)`
  display: none;
  @media screen and (max-width: ${breakpoints.tab_large}) {
    display: block;
  }
  .ant-drawer-wrapper-body {
    height: auto;
    .ant-drawer-header {
      padding: 23px 16px;
      .ant-drawer-title {
        width: 106px;
        display: flex;
        align-items: center;
      }
      .ant-drawer-close {
        color: ${colors.black100};
      }
    }
    .ant-drawer-body {
      padding: 24px 16px;
      height: auto;
      .component_nav_list {
        display: flex;
        flex-direction: column;
        row-gap: 24px !important;
        .component_nav_list_item {
          width: 100%;
          display: block;
          a {
            ${fonts.font_normal_medium};
            color: ${colors.black60};
            :hover {
              color: ${colors.black100};
            }
          }
          &.active a {
            color: ${colors.black100};
          }
        }
      }
      .component_list_item_divider {
        margin: 0;
      }
      .component_list_item_divider_button {
        .ant-btn {
          height: 50px;
          padding: 0 24px;
        }
      }
    }
  }
`;
