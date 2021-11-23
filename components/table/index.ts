import styled from "styled-components";
import { Table as TableAntd } from "antd";
import colors from "../../configs/colors";
import fonts from "../../configs/fonts";

const Table: typeof TableAntd = styled(TableAntd)`
  .ant-table-title {
    display: none;
  }
  .ant-table {
    overflow: hidden;
    color: ${colors.black100};
    padding: 0;
    border-radius: 10px;
    border: 1px solid ${colors.black30};
    background-color: ${colors.white100};
    font-size: 16px;
  }

  .ant-table-thead > tr > th {
    background-color: ${colors.white100};
    color: ${colors.black100};
    padding: 16px;
    ${fonts.font_small_medium};
  }

  .ant-table-tbody > tr:last-child > td {
    border-bottom: unset;
  }
  .ant-table-column-sorters {
    padding: 0;
  }

  .ant-table-tbody > .ant-table-row:nth-child(odd) {
    background-color: ${colors.black10};
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background-color: ${colors.blue10};
  }

  .ant-table-tbody > tr > td {
    padding: 12px 16px;
    ${fonts.font_small};
    color: ${colors.black100};
    cursor: pointer;
  }

  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    width: 0px;
  }

  &.hide-sort {
    td.ant-table-column-sort {
      background-color: unset;
    }
    .ant-table-thead th.ant-table-column-has-sorters {
      cursor: unset;
    }
    .ant-table-thead th.ant-table-column-has-sorters:hover {
      background-color: unset;
    }
  }
`;

export default Table;
