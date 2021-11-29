import { useRef, useState } from "react";
import { Prisma } from "prisma";
import { Col, Row, Input, Collapse, message } from "antd";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import prisma from "../lib/prisma";
import { fetcher } from "../utils/fetcher";
import { Header, Swiper, Form, Button, ModalWaitingList } from "../components";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconChevronUp,
  IconFacebook,
  IconFemale,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconMale,
  IconPhone,
  IconStar,
  IconTiktok,
  IconTwitter,
  ImageAIKMD,
  ImageBlackstone,
  ImageCardPodium,
  ImageCentralFloridaUniversity,
  ImageGeorgetownUniversity,
  ImageLightCircleOrnament,
  ImageLighterCircleOrnament,
  ImageLineOrnament,
  ImageMap,
  ImageSkeletonCard,
  ImageWadhbank,
} from "../assets";
import {
  advantagesList,
  FAQList,
  invitationList,
  testimonialList,
} from "../configs/content";
import Wrapper, {
  AboutAdvantageWrapper,
  AboutWrapper,
  AdvantageWrapper,
  CTAWrapper,
  FAQWrapper,
  FooterWrapper,
  FormWrapper,
  HeroWrapper,
  InvitationWrapper,
  TestimonialWrapper,
} from "./index.style";
import breakpoints from "../configs/breakpoints";
import { onValidateEmail } from "../utils/commonUtils";

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

export async function getServerSideProps() {
  const users: Prisma.UserUncheckedCreateInput[] = await prisma.user.findMany();
  return {
    props: { initialUsers: users },
  };
}

export default function Home({ initialUsers }) {
  const [users, setUsers] =
    useState<Prisma.UserUncheckedCreateInput[]>(initialUsers);

  const [modalWaitingList, setModalWaitingList] = useState({
    visible: false,
    totalUsers: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveInvitationRow, setIsActiveInvitationRow] = useState("01");

  const prevSlideBtn = useRef(null);
  const nextSlideBtn = useRef(null);
  const signUpForm = useRef(null);
  const faqRef = useRef(null);
  const [firstForm] = Form.useForm();
  const [secondForm] = Form.useForm();

  const desktopScreen = useMediaQuery({ maxWidth: breakpoints.desktop });
  const tabLargeScreen = useMediaQuery({ maxWidth: breakpoints.tab_large });
  const tabScreen = useMediaQuery({ maxWidth: breakpoints.tab });
  const phoneScreen = useMediaQuery({ maxWidth: breakpoints.phone });

  const onSliderHandler = () => {
    if (phoneScreen) return { slidesPerView: 2, slidesPerGroup: 2 };
    if (desktopScreen) return { slidesPerView: 3, slidesPerGroup: 3 };
    return { slidesPerView: 4, slidesPerGroup: 4 };
  };

  const onGetFaqList = () => {
    const slicing = Math.ceil(FAQList.length / 2);
    let firstHalf = [];
    let secondHalf = [];
    if (tabScreen) {
      firstHalf = FAQList.slice(0, slicing);
      secondHalf = FAQList.slice(-slicing);
    } else {
      firstHalf = FAQList.filter((item) => {
        return item.key % 2 !== 0;
      });
      secondHalf = FAQList.filter((item) => {
        return item.key % 2 === 0;
      });
    }
    return [firstHalf, secondHalf];
  };

  const onScrollIntoSignUp = () => {
    signUpForm.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const onScrollIntoFAQSection = () => {
    faqRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const onSubmitRegister = (values) => {
    const body: Prisma.UserCreateInput = {
      fullName: values?.name?.trim(),
      email: values?.email?.trim(),
    };
    setIsLoading(true);
    fetcher("/api/create", { user: body })
      .then((res) => {
        const totalUsers = [...users, res];
        setUsers(totalUsers);
        setModalWaitingList({
          visible: true,
          totalUsers: totalUsers?.length,
        });
        firstForm.resetFields();
        secondForm.resetFields();
      })
      .catch((err) => {
        message.error(err?.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Wrapper>
      <Head>
        <title>Wadhbank</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalWaitingList
        visible={modalWaitingList?.visible}
        totalUsers={modalWaitingList?.totalUsers}
        onCancel={() => {
          setModalWaitingList((prev) => {
            return { ...prev, visible: false };
          });
        }}
      />
      <Header onScrollIntoSignUp={onScrollIntoSignUp} />
      <HeroWrapper>
        <Row className="hero_section_wrapper">
          <Col className="container_hero_text">
            <Row>
              <Col span={24} className="component_bonus">
                <Row gutter={12} wrap={false} align="middle">
                  <Col>
                    <IconStar height={20} width={20} />
                  </Col>
                  <Col>Get up to $250 when you open up an account</Col>
                </Row>
              </Col>
              <Col span={24} className="component_title">
                Digital halal banking made for everyone
              </Col>
              <Col span={24}>
                <Col className="component_subtitle">
                  Combining the latest blockchain technology and islamic financial
                  guidelines to deliver safe and secure islamic banking service
                  through our mobile platform.
                </Col>
              </Col>
              <Col span={24} className="component_invitation">
                Join our waiting list to get early access to halal, ethical
                banking services.&nbsp;
                <span
                  aria-hidden
                  onClick={onScrollIntoFAQSection}
                  className="learn_more"
                >
                  Learn more
                </span>
              </Col>
              <Col span={24} className="component_form">
                <FormWrapper className="cta_form_wrapper">
                  <Form
                    form={firstForm}
                    onFinish={onSubmitRegister}
                    className={tabScreen ? "" : "error_message_absolute"}
                  >
                    <Row className="component_form_row">
                      <Col span={24}>
                        <Form.Item
                          name="name"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your full name",
                            },
                          ]}
                        >
                          <Input placeholder="Full name" />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Please enter your email",
                            },
                            {
                              validator(_, value) {
                                if (value && !onValidateEmail(value)) {
                                  return Promise.reject(
                                    new Error("Please enter valid email")
                                  );
                                }
                                return Promise.resolve();
                              },
                            },
                          ]}
                        >
                          <Input placeholder="Email" />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Button
                          htmlType="submit"
                          block
                          type="primary"
                          size="middle"
                          loading={isLoading}
                        >
                          Sign Up
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </FormWrapper>
              </Col>
              <Col span={24}>
                <Row align="middle" className="component_sponsor">
                  <Col>
                    <Image
                      src={ImageGeorgetownUniversity}
                      alt="georgetown-university"
                      layout="intrinsic"
                    />
                  </Col>
                  <Col>
                    <Image
                      src={ImageCentralFloridaUniversity}
                      alt="university-central-florida"
                      layout="intrinsic"
                    />
                  </Col>
                  <Col>
                    <Image
                      src={ImageBlackstone}
                      alt="blackstone"
                      layout="intrinsic"
                    />
                  </Col>
                  <Col>
                    <Image src={ImageAIKMD} alt="aikmd" layout="intrinsic" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="container_hero_image">
            <Image
              src={ImageCardPodium}
              alt="card-podium"
              layout="intrinsic"
              quality={100}
            />
          </Col>
        </Row>
      </HeroWrapper>
      <AboutAdvantageWrapper>
        <Col className="about_advantage_section_Wrapper">
          <AboutWrapper>
            <Row className="about_section_wrapper">
              <Col className="container_about_base">
                <Row className="component_about_base_row">
                  <Col span={24} className="component_about_base_title">
                    The easiest-way to bank riba-free for all your banking
                    needs.
                  </Col>
                  <Col span={24} className="component_about_base_subtitle">
                    With WadhBank, you can bank everywhere.
                  </Col>
                  <Col span={24} className="component_about_base_get_more">
                    <Button type="text">Get to know more about WadhBank</Button>
                  </Col>
                </Row>
                <Col className="component_about_base_bg">
                  <Image
                    src={ImageLightCircleOrnament}
                    alt=""
                    layout="intrinsic"
                  />
                </Col>
              </Col>
              <Col className="container_about_advisory">
                <Row
                  className="component_about_advisory_row"
                  justify="start"
                  wrap={false}
                >
                  <Col>
                    <Row className="component_about_advisor_content">
                      <Col className="component_about_advisory_count">
                        1.5K+
                      </Col>
                      <Col className="component_about_advisory_desc">
                        Excited waitlisted customers around the world
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="component_about_advisor_content">
                      <Col className="component_about_advisory_count">150+</Col>
                      <Col className="component_about_advisory_desc">
                        Years of advisory board experience
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Col className="component_about_advisory_bg">
                  <Image src={ImageMap} alt="card-podium" layout="intrinsic" />
                </Col>
              </Col>
            </Row>
          </AboutWrapper>
          <AdvantageWrapper>
            <Row className="advantage_section_wrapper">
              <Col span={24} className="container_advantage_base">
                <Row
                  justify="space-between"
                  wrap={false}
                  align="bottom"
                  className="component_advantage_base_row"
                >
                  <Col span={24} className="component_advantage_base_title">
                    Join with us and get the advantages
                  </Col>
                  <Col className="component_advantages_base_bg">
                    <Image
                      src={ImageLighterCircleOrnament}
                      alt=""
                      layout="intrinsic"
                    />
                  </Col>
                  <Col className="component_advantage_base_slider_handler">
                    <Row gutter={24} wrap={false} align="middle">
                      <Col ref={prevSlideBtn}>
                        <Button type="link">
                          <IconArrowLeft />
                        </Button>
                      </Col>
                      <Col ref={nextSlideBtn}>
                        <Button type="link">
                          <IconArrowRight />
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col className="container_advantage_slider">
                <Swiper
                  {...onSliderHandler()}
                  loop={true}
                  spaceBetween={20}
                  nextOnClick={nextSlideBtn}
                  prevOnClick={prevSlideBtn}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  dataSource={advantagesList}
                  renderItem={(item, index) => {
                    return (
                      <Row key={index} className="component_slider_item">
                        <Col className="component_slider_item_icon">
                          <Image title="icon" src={item?.icon} alt="" />
                        </Col>
                        <Col span={24}>
                          <Row className="component_slider_item_text">
                            <Col className="component_slider_item_text_title">
                              {item?.label}
                            </Col>
                            <Col className="component_slider_item_text_desc">
                              {item?.desc}
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    );
                  }}
                />
              </Col>
            </Row>
          </AdvantageWrapper>
          <Col className="component_about_advantage_bg">
            <Image src={ImageLineOrnament} alt="" layout="intrinsic" />
          </Col>
        </Col>
      </AboutAdvantageWrapper>
      <InvitationWrapper>
        <Row className="invitation_section_wrapper">
          <Col span={24} className="container_invitation_heading">
            <Row
              align="middle"
              wrap={false}
              className="component_invitation_heading_row"
            >
              <Col span={24} className="component_invitation_heading_title">
                Get ready to join WadhBank
              </Col>
              <Col span={24} className="component_invitation_heading_subtitle">
                WadhBank is for those who want the best in latest in fintech
                technologies and the strong traditions of Islamic finance. All
                at your fingertips.
              </Col>
            </Row>
          </Col>
          <Col span={24} className="container_invitation_list">
            <Row className="component_invitation_list_row">
              <Col className="component_invitation_image">
                <Image src={ImageSkeletonCard} alt="" layout="intrinsic" />
              </Col>
              <Col className="component_invitation_list">
                <Collapse
                  accordion={!tabLargeScreen}
                  ghost
                  className="component_invitation_collapse"
                  activeKey={(() => {
                    if (!tabLargeScreen) return isActiveInvitationRow;
                    return ["01", "02", "03"];
                  })()}
                >
                  {invitationList?.map((item) => {
                    return (
                      <Collapse.Panel
                        key={item?.key}
                        header={(() => {
                          return (
                            <Row
                              aria-hidden
                              onClick={() => {
                                const key = item?.key;
                                setIsActiveInvitationRow(key);
                              }}
                              className="component_invitation_collapse"
                            >
                              <Col className="component_invitation_collapse_key">
                                {item?.key}
                              </Col>
                              <Col className="component_invitation_collapse_label">
                                {item?.label}
                              </Col>
                            </Row>
                          );
                        })()}
                        showArrow={false}
                        className="component_invitation_collapse_panel"
                      >
                        {item?.desc}
                      </Collapse.Panel>
                    );
                  })}
                </Collapse>
              </Col>
            </Row>
          </Col>
        </Row>
      </InvitationWrapper>
      <TestimonialWrapper>
        <Row justify="center" align="middle" className="container_testimonial">
          <Col className="component_testimonial_title">
            What people are saying about WadhBank
          </Col>
          <Col className="component_testimonial_slider">
            <Swiper
              slidesPerGroup={1}
              slidesPerView="auto"
              loop={true}
              centeredSlides
              nextOnClick={nextSlideBtn}
              prevOnClick={prevSlideBtn}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              dataSource={testimonialList}
              renderItem={(item, index) => {
                return (
                  <Col
                    key={index}
                    className="component_testimonial_slider_item"
                  >
                    <Row className="component_testimonial_slider_item_row">
                      <Col className="component_testimonial_slider_item_desc">
                        {`"${item?.testimonial}"`}
                      </Col>
                      <Col className="component_testimonial_slider_item_bio">
                        <Row justify="start" align="middle" gutter={12} wrap>
                          <Col className="component_testimonial_slider_item_bio_avatar">
                            <Image
                              src={
                                item?.gender === "male" ? IconMale : IconFemale
                              }
                              alt="avatar"
                            />
                          </Col>
                          <Col className="component_testimonial_slider_item_bio_text">
                            <Row className="component_testimonial_slider_item_bio_text_row">
                              <Col
                                span={24}
                                className="component_testimonial_slider_item_bio_name"
                              >
                                {item?.name}
                              </Col>
                              <Col
                                span={24}
                                className="component_testimonial_slider_item_bio_origin"
                              >
                                {item?.origin}
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                );
              }}
            />
          </Col>
        </Row>
        <Col className="component_testimonial_base_bg">
          <Image src={ImageLightCircleOrnament} alt="" layout="intrinsic" />
        </Col>
      </TestimonialWrapper>
      <FAQWrapper>
        <Row ref={faqRef} className="faq_section_wrapper">
          <Col span={24} className="container_faq_heading">
            <Row
              align="middle"
              wrap={false}
              className="component_faq_heading_row"
            >
              <Col span={24} className="component_faq_heading_title">
                Frequently Asked Questions
              </Col>
              <Col span={24} className="component_faq_heading_subtitle">
                We know you have some questions in mind, we’ve tried to list the
                most important ones
              </Col>
            </Row>
          </Col>
          <Col span={24} className="container_faq_list">
            {onGetFaqList().map((items, index) => {
              return (
                <Collapse
                  key={index}
                  className="component_faq_collapse"
                  ghost
                  expandIconPosition="right"
                  expandIcon={({ isActive }) => {
                    return (
                      <IconChevronUp
                        className={`component_faq_collapse_expand_icon ${
                          isActive ? "active" : ""
                        }`}
                      />
                    );
                  }}
                >
                  {items.map((item) => {
                    return (
                      <Collapse.Panel
                        header={item?.label}
                        key={item?.key}
                        className="component_faq_collapse_panel"
                      >
                        {item?.desc}
                      </Collapse.Panel>
                    );
                  })}
                </Collapse>
              );
            })}
          </Col>
        </Row>
      </FAQWrapper>
      <CTAWrapper ref={signUpForm}>
        <Row className="cta_section_wrapper">
          <Col span={24} className="container_cta_heading">
            <Row
              align="middle"
              wrap={false}
              className="component_cta_heading_row"
            >
              <Col span={24} className="component_cta_heading_title">
                Join our waiting list
              </Col>
              <Col span={24} className="component_cta_heading_subtitle">
                Get advantages and early access to WadhBank right now
              </Col>
            </Row>
          </Col>
          <Col span={24} className="container_cta_list">
            <FormWrapper className="cta_form_wrapper">
              <Form form={secondForm} onFinish={onSubmitRegister}>
                <Row className="component_form_row">
                  <Col span={24}>
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your full name",
                        },
                      ]}
                    >
                      <Input placeholder="Full name" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email",
                        },
                        {
                          validator(_, value) {
                            if (value && !onValidateEmail(value)) {
                              return Promise.reject(
                                new Error("Please enter valid email")
                              );
                            }
                            return Promise.resolve();
                          },
                        },
                      ]}
                    >
                      <Input placeholder="Email" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Button
                      htmlType="submit"
                      block
                      type="primary"
                      size="middle"
                      loading={isLoading}
                    >
                      Sign Up
                    </Button>
                  </Col>
                </Row>
              </Form>
            </FormWrapper>
          </Col>
          <Col span={24} className="component_cta_benefit">
            <Row className="component_cta_benefit_row">
              <Col>
                <Row gutter={8} align="middle" wrap>
                  <Col className="component_cta_benefit_icon">
                    <IconCheck viewBox="0 0 20 20" />
                  </Col>
                  <Col className="component_cta_benefit_label">
                    Early access to use WadhBank
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row gutter={8} align="middle" wrap>
                  <Col className="component_cta_benefit_icon">
                    <IconCheck viewBox="0 0 20 20" />
                  </Col>
                  <Col className="component_cta_benefit_label">
                    Special promo for early access user
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </CTAWrapper>
      <FooterWrapper>
        <Row className="footer_wrapper">
          <Col span={24} className="container_footer_primary">
            <Row className="container_footer_primary_row">
              <Col className="component_footer_main">
                <Row className="component_footer_main_row">
                  <Col className="component_footer_base">
                    <Row className="component_footer_base_row">
                      <Col className="component_footer_base_logo">
                        <Row className="component_footer_base_logo_row">
                          <Col className="component_footer_base_logo_image">
                            <Image src={ImageWadhbank} alt="wadhbank" />
                          </Col>
                          <Col className="component_footer_base_logo_tagline">
                            Digital halal banking made for everyone
                          </Col>
                        </Row>
                      </Col>
                      <Col className="component_footer_base_contact">
                        <Row className="component_footer_base_contact_row">
                          <Col className="component_footer_base_contact_content">
                            <Row
                              gutter={8}
                              wrap
                              align="middle"
                              className="component_footer_base_contact_content_row"
                            >
                              <Col className="component_footer_base_contact_content_icon">
                                <IconMail viewBox="0 0 20 20" />
                              </Col>
                              <Col className="component_footer_base_contact_content_label">
                                hello@wadhbank.com
                              </Col>
                            </Row>
                          </Col>
                          <Col className="component_footer_base_contact_content">
                            <Row
                              gutter={8}
                              wrap
                              align="bottom"
                              className="component_footer_base_contact_content_row"
                            >
<!--                               <Col className="component_footer_base_contact_content_icon">
                                <IconPhone viewBox="0 0 20 20" />
                              </Col>
                              <Col className="component_footer_base_contact_content_label">
                                646-397-9255
                              </Col> -->
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="component_footer_base_social_media">
                        <Row
                          gutter={[16, 16]}
                          wrap
                          className="component_footer_base_social_media_row"
                        >
                          <Col
                            span={24}
                            className="component_footer_base_social_media_follow"
                          >
                            Follow our social media
                          </Col>
                          <Col
                            span={24}
                            className="component_footer_base_social_media_list"
                          >
                            <a
                              target="_blank"
                              href={"//www.instagram.com/wadhbank/?hl=en"}
                              rel="noreferrer"
                            >
                              <IconInstagram />
                            </a>
                            <a
                              target="_blank"
                              href={"//www.facebook.com/wadhbank"}
                              rel="noreferrer"
                            >
                              <IconFacebook />
                            </a>
                            <a
                              target="_blank"
                              href={"//www.twitter.com/wadhbank"}
                              rel="noreferrer"
                            >
                              <IconTwitter />
                            </a>
                            <a
                              target="_blank"
                              href={"//www.linkedin.com/company/wadhbank/"}
                              rel="noreferrer"
                            >
                              <IconLinkedin />
                            </a>
                            <a
                              target="_blank"
                              href={"//www.tiktok.com/@wadhbank"}
                              rel="noreferrer"
                            >
                              <IconTiktok />
                            </a>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="component_footer_office">
                    <Row className="component_footer_office_row">
                      <Col className="component_footer_office_heading">
                        Office Address
                      </Col>
                      <Col className="component_footer_office_content">
                        <Row gutter={[8, 8]}>
                          <Col
                            span={24}
                            className="component_footer_office_content_title"
                          >
                            Global Headquarters
                          </Col>
                          <Col
                            span={24}
                            className="component_footer_office_content_desc"
                          >
                            2200 Pennsylvania Avenue NW 4th Floor, Washington,
                            D.C 20037
                          </Col>
                        </Row>
                      </Col>
                      <Col className="component_footer_office_content">
                        <Row gutter={[8, 8]}>
                          <Col
                            span={24}
                            className="component_footer_office_content_title"
                          >
                            Morocco Office
                          </Col>
                          <Col
                            span={24}
                            className="component_footer_office_content_desc"
                          >
                            Mahaj Ryad Center Bureaux 5th floor, Building 7,
                            Rabat 10100, Morocco
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col className="component_footer_nav">
                <Row className="component_footer_nav_list">
                  <Col className="component_footer_company">
                    <Row className="component_footer_company_row">
                      <Col className="component_footer_company_heading">
                        Company
                      </Col>
                      <Col className="component_footer_company_content">
                        <Row className="component_footer_company_content_list">
                          <Col className="component_footer_company_content_list_item">
                            Our Story
                          </Col>
                          <Col className="component_footer_company_content_list_item">
                            Meet the Team
                          </Col>
                          <Col className="component_footer_company_content_list_item">
                            Shariah Board
                          </Col>
                          <Col className="component_footer_company_content_list_item">
                            Careers
                          </Col>
                          <Col className="component_footer_company_content_list_item">
                            Contact Us
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="component_footer_services">
                    <Row className="component_footer_services_row">
                      <Col className="component_footer_services_heading">
                        Services
                      </Col>
                      <Col className="component_footer_services_content">
                        <Row className="component_footer_services_content_list">
                          <Col className="component_footer_services_content_list_item">
                            Personal
                          </Col>
                          <Col className="component_footer_services_content_list_item">
                            Business
                          </Col>
                          <Col className="component_footer_services_content_list_item">
                            Student
                          </Col>
                          <Col className="component_footer_services_content_list_item">
                            Private
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="component_footer_resources">
                    <Row className="component_footer_resources_row">
                      <Col className="component_footer_resources_heading">
                        Resources
                      </Col>
                      <Col className="component_footer_resources_content">
                        <Row className="component_footer_resources_content_list">
                          <Col className="component_footer_resources_content_list_item">
                            Market Research
                          </Col>
                          <Col className="component_footer_resources_content_list_item">
                            Financial Calculators
                          </Col>
                          <Col className="component_footer_resources_content_list_item">
                            FAQs
                          </Col>
                          <Col className="component_footer_resources_content_list_item">
                            Financial Reports
                          </Col>
<!--                           <Col className="component_footer_resources_content_list_item">
                            Private
                          </Col> -->
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="container_footer_secondary">
            <Row className="container_footer_secondary_row">
              <Col className="container_footer_secondary_copyright">
                2021 Copyright WadhBank, LLC. All rights reserved
              </Col>
              <Col className="container_footer_secondary_services">
                <Row className="container_footer_secondary_services_list">
                  <Col className="container_footer_secondary_services_list_item">
                    Service Agreement
                  </Col>
                  <Col className="container_footer_secondary_services_list_item">
                    Privacy Policy
                  </Col>
                  <Col className="container_footer_secondary_services_list_item">
                    Cookies
                  </Col>
                  <Col className="container_footer_secondary_services_list_item">
                    RSS
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </FooterWrapper>
    </Wrapper>
  );
}
