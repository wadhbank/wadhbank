import { Dropdown } from "antd";
import styled from "styled-components";
import breakpoints from "../../configs/breakpoints";
import colors from "../../configs/colors";
import fonts from "../../configs/fonts";

const Wrapper = styled.div`
  font-family: Raleway;
`;

export default Wrapper;

export const Header = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 40;
  .container_header {
    position: relative;
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
      position: absolute;
      height: 100%;
      display: flex;
      align-items: center;
      left: 50%;
      transform: translateX(-50%);
      ${fonts.font_small_medium};
      color: ${colors.black100};
      ::before {
        position: absolute;
        content: "";
        height: 2px;
        width: 77px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${colors.blue70};
      }
    }

    .component_menus {
      cursor: pointer;
    }
  }

  @media screen and (max-width: ${breakpoints.tab_large}) {
    .container_header {
      padding: 16px 40px;
    }
  }
`;

export const DropdownMenus = styled(Dropdown)`
  .ant-dropdown-menu {
    padding: 0 !important;
  }
  .component_dropdown_menus {
    min-width: 230px;
    border-radius: 4px;
    border: 1px solid ${colors.black20};
    overflow: hidden;
    box-shadow: none;
    box-shadow: 0px 0px 10px 0px #1118280d;
    .component_dropdown_menus_item {
      padding: 0;
      &.account {
        padding: 12px 16px;
        background-color: ${colors.white100};
        .component_account {
          ${fonts.font_small_medium};
          color: ${colors.black100};
        }
        .component_account_role {
          ${fonts.font_extra_small};
          color: ${colors.black60};
        }
      }
      &.links {
        background-color: ${colors.white100};
        padding: 8px 0;
        .component_link {
          padding: 12px 16px !important;
          ${fonts.font_small_bold};
          :hover {
            background-color: ${colors.blue10};
          }
        }
      }
    }
  }
`;
