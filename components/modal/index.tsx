import Image from "next/image";
import { Col, Row } from "antd";
import { ModalProps } from "antd/lib/modal";
import Modal from "./style";
import { IconClose, ImageWadhbank } from "../../assets";

interface ModalInterface extends ModalProps {
  children?: any | null;
}

const Index = ({ children, onCancel, ...rest }: ModalInterface) => {
  return (
    <Modal
      {...rest}
      closable={false}
      title={(() => {
        return (
          <Row
            align="middle"
            justify="center"
            className="component_modal_header"
          >
            <Col className="component_modal_header_logo">
              <Image src={ImageWadhbank} alt="wadhbank logo" />
            </Col>
            <Col className="component_modal_header_close" onClick={onCancel}>
              <IconClose />
            </Col>
          </Row>
        );
      })()}
    >
      {children}
    </Modal>
  );
};

export default Index;
