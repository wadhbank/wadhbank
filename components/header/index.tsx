import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Button } from "..";
import { IconHamburger, ImageWadhbank } from "../../assets";
import URL from "../../configs/baseUrl";
import { Wrapper, Menus } from "./style";
import { Col, Divider, Row } from "antd";

const Index = () => {
  const router = useRouter();
  const { pathname } = router;
  const [showMenus, setShowMenus] = useState(false);

  const menus = [
    {
      to: URL.LANDING,
      label: "Personal",
    },
    {
      to: URL.BUSINESS,
      label: "Business",
    },
    {
      to: URL.STUDENT,
      label: "Student",
    },
    {
      to: URL.PRIVATE,
      label: "Private",
    },
  ];

  return (
    <>
      <Wrapper expand={showMenus}>
        <Row className="container_header">
          <Col className="component_logo">
            <Image src={ImageWadhbank} alt="wadhbank" objectFit="cover" />
          </Col>
          <Col className={`component_nav`}>
            <Row className={`component_nav_list`}>
              {menus.map((item) => {
                return (
                  <Col
                    key={item?.to}
                    className={`component_nav_list_item ${
                      pathname === item?.to ? "active" : ""
                    }`}
                  >
                    <Link href={item?.to}>{item?.label}</Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col className="component_menus">
            <Button type="default" className="component_menus_sign_up">
              Sign up for free
            </Button>
            <Button
              type="link"
              className="component_menus_hamburger"
              onClick={() => {
                setShowMenus(!showMenus);
              }}
            >
              <IconHamburger />
            </Button>
          </Col>
        </Row>
      </Wrapper>
      <Menus
        placement="top"
        title={(() => {
          return <Image src={ImageWadhbank} alt="wadhbank" objectFit="cover" />;
        })()}
        visible={showMenus}
        onClose={() => {
          setShowMenus(false);
        }}
        height="auto"
      >
        <Row className={`component_nav_list`}>
          {menus.map((item) => {
            return (
              <Col
                key={item?.to}
                className={`component_nav_list_item ${
                  pathname === item?.to ? "active" : ""
                }`}
              >
                <Link href={item?.to}>{item?.label}</Link>
              </Col>
            );
          })}
          <Divider className="component_list_item_divider" />
          <Col className="component_list_item_divider_button">
            <Button block type="default">
              Sign up for free
            </Button>
          </Col>
        </Row>
      </Menus>
    </>
  );
};

export default Index;
