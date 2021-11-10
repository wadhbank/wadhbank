import { Col, Row } from "antd";
import { Modal } from "..";
import { IconFacebook, IconLinkedin, IconTwitter } from "../../assets";
import ModalWrapper from "./style";

const Index = (props) => {
  const { visible, onCancel, totalUsers, ...otherProps } = props;
  return (
    <Modal
      {...otherProps}
      closable
      centered
      visible={visible}
      onCancel={onCancel}
      width={1060}
      footer={false}
    >
      <ModalWrapper>
        <Row className="container_modal_waiting_list">
          <Col className="component_modal_waiting_list_title">
            You successfully join our waiting list!
          </Col>
          <Col className="component_modal_waiting_list_subtitle">
            We’ll keep you posted on our latest updates, news and early-bird
            special offers through your email
          </Col>
          <Col className="component_modal_waiting_list_sequence">
            There are&nbsp;
            <span className="bold">{totalUsers - 1}</span>
            &nbsp;people ahead of you
          </Col>
          <Col className="component_modal_waiting_list_social_share">
            Share and refer your friends to join our waiting list and get
            early-bird advantages
          </Col>
          <Col className="component_modal_waiting_list_social_list">
            <IconFacebook />
            <IconTwitter />
            <IconLinkedin />
          </Col>
        </Row>
      </ModalWrapper>
    </Modal>
  );
};

export default Index;
