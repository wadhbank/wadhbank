import { Dropdown, Pagination } from "antd";
import styled from "styled-components";
import breakpoints from "../../configs/breakpoints";
import colors from "../../configs/colors";
import fonts from "../../configs/fonts";

const Wrapper = styled.div`
  font-family: Raleway;
  min-width: 1200px;
  .container_waiting_list {
    display: flex;
    justify-content: center;
    .component_waiting_list_header {
      margin-top: 40px;
      margin-bottom: 32px;
      .component_waiting_list_header_title {
        ${fonts.font_heading_5};
        color: ${colors.black100};
      }
      .component_waiting_list_header_export {
        .ant-btn {
          padding: 0 12px;
          height: 40px;
        }
        .component_waiting_list_header_export_label {
          min-width: 118px;
          text-align: left;
          padding: 0 !important;
          ${fonts.font_small_bold};
        }
      }
    }

    > div {
      width: 1060px;
    }
  }

  .component_waiting_list_table {
    max-height: 920px;
    margin-bottom: 60px;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    border-radius: 10px;
    border-bottom: 1px solid ${colors.black30};
    &::-webkit-scrollbar {
      height: 0;
      width: 0;
    }

    .component_waiting_list_table_header {
      position: sticky;
      top: 0;
      z-index: 2;
      border-radius: 0 0 10px 10px;
      background-color: ${colors.white100};
      .component_waiting_list_table_header_row {
        background-color: ${colors.white100};
        padding: 16px;
        border: 1px solid ${colors.black30};
        border-radius: 10px 10px 10px 10px;
        .component_waiting_list_table_header_total {
          ${fonts.font_normal};
          color: ${colors.black60};
          .component_total_bold {
            ${fonts.font_normal_bold};
            color: ${colors.black100};
          }
        }
        .component_waiting_list_table_header_pagination {
          .component_pagination_showing {
            color: ${colors.black60};
          }
          .component_pagination_handler_arrow {
            .ant-btn {
              padding: 0;
              height: unset !important;
            }
            svg path {
              /* fill: yellow; */
            }
          }
        }
      }
    }
    .component_waiting_list_table_content {
      padding-top: 20px;
    }
  }
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
      cursor: pointer;
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

export const DropdownMenus: typeof Dropdown = styled(Dropdown)`
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

export const PaginationCustom = styled(Pagination)`
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .ant-pagination-item,
  .ant-pagination-jump-next,
  .ant-pagination-jump-prev {
    display: none;
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    min-width: unset;
    width: unset;
    height: unset;
    display: grid;
  }
  .ant-pagination-prev {
    margin-right: 12px;
  }
  .ant-pagination-disabled svg path {
    fill: ${colors.black50};
  }
`;
