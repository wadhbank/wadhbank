import styled from "styled-components";
import { Modal as ModalLib } from "antd";
import colors from "../../configs/colors";
import breakpoints from "../../configs/breakpoints";

const Modal = styled(ModalLib)`
  .ant-modal-mask {
    background-color: ${colors.black100} !important;
    opacity: 0.8;
  }

  .ant-modal-content {
    background-color: ${colors.white100};
    border-radius: 10px;
    overflow: hidden;
    .ant-modal-close {
      top: 50%;
      transform: translateY(-50%);
    }
    .ant-modal-header {
      padding: 0;
      background-color: ${colors.black10};
    }
    .ant-modal-body {
      /* padding: 48px 24px 56px 24px; */
      padding: 0;
    }
  }

  .component_modal_header {
    position: relative;
    padding: 32px;
    .component_modal_header_close {
      position: absolute;
      right: 32px;
    }
    .component_modal_header_logo {
      > div {
        display: block !important;
        img {
          width: 200px;
          height: 46px;
        }
      }
    }
  }

  @media screen and (max-width: ${breakpoints.tab}) {
    .component_modal_header {
      position: relative;
      padding: 16px;
      .component_modal_header_close {
        position: absolute;
        right: 16px;
      }
      .component_modal_header_logo {
        > div {
          display: block !important;
          img {
            width: 106px;
            height: 24px;
          }
        }
      }
    }
  }
`;

export default Modal;
