import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";
import { Col, Input, message, Row, Spin } from "antd";
import Wrapper from "./style";
import { Form, Button } from "../../../components";
import { IconCircleClose, ImageWadhbank } from "../../../assets";
import URL from "../../../configs/baseUrl";
import { useState } from "react";

const Index = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [session, loading] = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [isErrors, setIsErrors] = useState(false);

  const onChangeInput = () => {
    setIsErrors(false);
  };

  const isSessionValid = (session) => {
    if (
      typeof session !== typeof undefined &&
      session !== null &&
      typeof session.user !== typeof undefined
    ) {
      return true;
    } else {
      return false;
    }
  };

  if (loading) {
    return <Spin />;
  } else {
    if (isSessionValid(session)) {
      router.push(URL.DASHBOARD);
      return null;
    }
  }

  const onSubmit = (values) => {
    setIsLoading(true);
    signIn("credentials", {
      email: values?.email?.trim(),
      password: values?.password?.trim(),
      callbackUrl: `${window.location.origin}${URL.DASHBOARD}`,
      redirect: false,
    })
      .then((res) => {
        if (res?.error !== null) {
          if (res?.status === 401) {
            setIsErrors(true);
          } else {
            message.error("Please check your connection");
          }
        } else {
          router.push(res?.url);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Wrapper isErrors={isErrors}>
      <Head>
        <title>Wadhbank - Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Col className="container_login">
        <Row className="component_login_row">
          <Col className="component_login_card">
            <Row className="component_login_card_row">
              <Col className="component_login_card_logo">
                <Image src={ImageWadhbank} alt="wadhbank logo" />
              </Col>
              <Col className="component_login_card_label">
                Login into your account to continue
              </Col>
              <Form
                form={form}
                onFinish={onSubmit}
                layout="vertical"
                requiredMark={false}
                className="component_login_card_form login-form"
              >
                <Row className="component_login_card_label_form_row">
                  {isErrors && (
                    <Col
                      span={24}
                      className="component_login_card_label_form_message_errors"
                    >
                      <IconCircleClose />
                      Wrong email and password combination
                    </Col>
                  )}
                  <Col
                    span={24}
                    className="component_login_card_label_form_email"
                  >
                    <Form.Item
                      label="Email or username"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email",
                        },
                      ]}
                      initialValue={null}
                    >
                      <Input
                        placeholder="Enter your email or username"
                        onChange={onChangeInput}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      label="Password"
                      name="password"
                      className="password-form"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your password",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="Enter your password"
                        onChange={onChangeInput}
                      />
                    </Form.Item>
                  </Col>
                  <Col
                    span={24}
                    className="component_login_card_label_form_submit"
                  >
                    <Button
                      block
                      type="primary"
                      htmlType="submit"
                      loading={isLoading}
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
          </Col>
          <Col className="component_login_footer">
            2021 Copyright WadhBank, LLC. All right reserved
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};

export default Index;