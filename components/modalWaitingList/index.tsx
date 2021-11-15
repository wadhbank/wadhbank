import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { Modal } from "..";
import { IconFacebook, IconLinkedin, IconTwitter } from "../../assets";
import { numberFormatter } from "../../utils/commonUtils";
import ModalWrapper from "./style";

const bodyPost =
  "I just signed up for WadhBank! Join me and let's make halal banking available for everyone! Visit wadhbank on www.wadhbank.com";

const Index = (props) => {
  const { visible, onCancel, totalUsers, ...otherProps } = props;
  const [originUrl, setOriginUrl] = useState("");

  useEffect(() => {
    if (window !== undefined) {
      setOriginUrl(window.location.origin);
    }
  }, []);

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
            <span className="bold">{numberFormatter(totalUsers - 1)}</span>
            &nbsp;people ahead of you
          </Col>
          <Col className="component_modal_waiting_list_social_share">
            Share and refer your friends to join our waiting list and get
            early-bird advantages
          </Col>
          <Col className="component_modal_waiting_list_social_list">
            <FacebookShareButton quote={bodyPost} url={originUrl}>
              <IconFacebook />
            </FacebookShareButton>

            <TwitterShareButton title={bodyPost} url={originUrl}>
              <IconTwitter />
            </TwitterShareButton>
            <LinkedinShareButton
              url={originUrl}
              source={originUrl}
              title={bodyPost}
            >
              <IconLinkedin />
            </LinkedinShareButton>
          </Col>
        </Row>
      </ModalWrapper>
    </Modal>
  );
};

export default Index;
