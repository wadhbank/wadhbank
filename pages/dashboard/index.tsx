import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { Col, Row, Menu, Spin } from "antd";
import {
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconFile,
  IconLogout,
  IconMale,
  ImageWadhbank,
} from "../../assets";
import Wrapper, { DropdownMenus, Header, PaginationCustom } from "./style";
import { Table, Button } from "../../components";
import URL from "../../configs/baseUrl";

const waitingList = [
  {
    id: "1",
    email: "john.doe@gmail.com",
    name: "John Doe",
    created_at: "8/16/05",
  },
  {
    id: "2",
    email: "debra.holt@example.com",
    name: "Guy Hawkins",
    created_at: "8/16/14",
  },
  {
    id: "3",
    email: "bill.sanders@example.com",
    name: "Ralph Edwards",
    created_at: "8/16/15",
  },
  {
    id: "4",
    email: "felicia.reid@example.com",
    name: "Darlene Robertson",
    created_at: "8/16/16",
  },
  {
    id: "5",
    email: "curtis.weaver@example.com",
    name: "Cody Fisher",
    created_at: "2/11/12",
  },
  {
    id: "6",
    email: "georgia.young@example.com",
    name: "Bessie Cooper",
    created_at: "12/10/13",
  },
  {
    id: "7",
    email: "willie.jennings@example.com",
    name: "Leslie Alexander",
    created_at: "5/7/16",
  },
  {
    id: "8",
    email: "jackson.graham@example.com",
    name: "Wade Warren",
    created_at: "5/27/15",
  },
  {
    id: "9",
    email: "debra.holt@example.com",
    name: "Brooklyn Simmons",
    created_at: "5/30/14",
  },
  {
    id: "10",
    email: "debbie.baker@example.com",
    name: "Floyd Miles",
    created_at: "8/30/14",
  },
  {
    id: "11",
    email: "john.doe@gmail.com",
    name: "John Doe",
    created_at: "8/16/05",
  },
  {
    id: "12",
    email: "debra.holt@example.com",
    name: "Guy Hawkins",
    created_at: "8/16/14",
  },
  {
    id: "13",
    email: "bill.sanders@example.com",
    name: "Ralph Edwards",
    created_at: "8/16/15",
  },
  {
    id: "14",
    email: "felicia.reid@example.com",
    name: "Darlene Robertson",
    created_at: "8/16/16",
  },
  {
    id: "15",
    email: "curtis.weaver@example.com",
    name: "Cody Fisher",
    created_at: "2/11/12",
  },
  {
    id: "16",
    email: "georgia.young@example.com",
    name: "Bessie Cooper",
    created_at: "12/10/13",
  },
  {
    id: "17",
    email: "willie.jennings@example.com",
    name: "Leslie Alexander",
    created_at: "5/7/16",
  },
  {
    id: "18",
    email: "jackson.graham@example.com",
    name: "Wade Warren",
    created_at: "5/27/15",
  },
  {
    id: "19",
    email: "debra.holt@example.com",
    name: "Brooklyn Simmons",
    created_at: "5/30/14",
  },
  {
    id: "20",
    email: "debbie.baker@example.com",
    name: "Floyd Miles",
    created_at: "8/30/14",
  },
  {
    id: "21",
    email: "john.doe@gmail.com",
    name: "John Doe",
    created_at: "8/16/05",
  },
  {
    id: "22",
    email: "debra.holt@example.com",
    name: "Guy Hawkins",
    created_at: "8/16/14",
  },
  {
    id: "23",
    email: "bill.sanders@example.com",
    name: "Ralph Edwards",
    created_at: "8/16/15",
  },
  {
    id: "24",
    email: "felicia.reid@example.com",
    name: "Darlene Robertson",
    created_at: "8/16/16",
  },
  {
    id: "25",
    email: "curtis.weaver@example.com",
    name: "Cody Fisher",
    created_at: "2/11/12",
  },
  {
    id: "26",
    email: "georgia.young@example.com",
    name: "Bessie Cooper",
    created_at: "12/10/13",
  },
  {
    id: "27",
    email: "willie.jennings@example.com",
    name: "Leslie Alexander",
    created_at: "5/7/16",
  },
  {
    id: "28",
    email: "jackson.graham@example.com",
    name: "Wade Warren",
    created_at: "5/27/15",
  },
  {
    id: "29",
    email: "debra.holt@example.com",
    name: "Brooklyn Simmons",
    created_at: "5/30/14",
  },
  {
    id: "30",
    email: "debra.holt@example.com",
    name: "Brooklyn Simmons",
    created_at: "5/30/14",
  },
];

const menu = (
  <Menu className="component_dropdown_menus">
    <Menu.Item key="0" className="component_dropdown_menus_item account">
      <Row gutter={[4, 4]}>
        <Col span={24} className="component_account">
          john.doe@gmail.com
        </Col>
        <Col span={24} className="component_account_role">
          Admin
        </Col>
      </Row>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1" className="component_dropdown_menus_item links">
      <Row gutter={[4, 4]}>
        <Col
          span={24}
          className="component_link"
          onClick={() => {
            signOut({ redirect: false, callbackUrl: URL.LOGIN });
          }}
        >
          <Row gutter={12} align="middle">
            <Col>
              <IconLogout />
            </Col>
            <Col>Logout</Col>
          </Row>
        </Col>
      </Row>
    </Menu.Item>
  </Menu>
);

const pageSize = 25;
export default function Index() {
  const router = useRouter();

  const [session, loading] = useSession();
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(waitingList);
    setIsLoading(false);
  }, []);

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
    if (!isSessionValid(session)) {
      router.push(URL.LOGIN);
      return null;
    }
  }

  const onGetCurrentShowing = () => {
    const indexOfLast = (currentPage + 1) * pageSize;
    const indexOfFirst = indexOfLast - pageSize;
    const currentData = userList?.slice(indexOfFirst, indexOfLast);
    const startIndex = currentPage * pageSize + 1;
    const endIndex = currentPage * pageSize + currentData?.length;
    return `Showing ${startIndex}-${endIndex} data of ${userList?.length} data`;
  };

  const columns = [
    {
      title: "No.",
      dataIndex: "id",
      // width: 41,
      render: (value, record, index) => {
        return currentPage * pageSize + index + 1;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      // width: 297,
    },
    {
      title: "Full Name",
      dataIndex: "name",
      // width: 297,
    },
    {
      title: "Registered Date",
      dataIndex: "created_at",
      // width: 297,
    },
  ];

  return (
    <Wrapper>
      <Head>
        <title>Wadhbank - Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Row className="container_header">
          <Col
            className="component_logo"
            onClick={() => {
              router.push(URL.LANDING);
            }}
          >
            <Image src={ImageWadhbank} alt="wadhbank" objectFit="cover" />
          </Col>
          <Col className="component_nav">Waiting List</Col>
          <Col className="component_menus">
            <DropdownMenus
              trigger={["click"]}
              overlay={menu}
              overlayClassName="component_menus_overlay"
              getPopupContainer={(trigger) => {
                return trigger;
              }}
              placement="bottomRight"
            >
              <Row gutter={8} align="middle">
                <Col>
                  <Image src={IconMale} height={36} width={36} alt="avatar" />
                </Col>
                <Col>
                  <IconChevronDown />
                </Col>
              </Row>
            </DropdownMenus>
          </Col>
        </Row>
      </Header>
      <Col span={24} className="container_waiting_list">
        <Row>
          <Col span={24} className="component_waiting_list_header">
            <Row justify="space-between" align="middle">
              <Col className="component_waiting_list_header_title">
                Waiting List
              </Col>
              <Col className="component_waiting_list_header_export">
                <Button type="default">
                  <Row align="middle" gutter={16}>
                    <Col className="component_waiting_list_header_export_icon">
                      <IconFile />
                    </Col>
                    <Col className="component_waiting_list_header_export_label">
                      Export to excel
                    </Col>
                  </Row>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col span={24} className="component_waiting_list_table">
            <Col span={24} className="component_waiting_list_table_header">
              <Row
                justify="space-between"
                align="middle"
                className="component_waiting_list_table_header_row"
              >
                <Col className="component_waiting_list_table_header_total">
                  Total user on waiting list:&nbsp;
                  <span className="component_total_bold">{`${userList?.length} people`}</span>
                </Col>
                {userList?.length !== 0 && (
                  <Col className="component_waiting_list_table_header_pagination">
                    <Row gutter={16} align="middle" wrap={false}>
                      <Col className="component_pagination_showing">
                        {onGetCurrentShowing()}
                      </Col>
                      <Col className="component_pagination_handler">
                        <PaginationCustom
                          current={currentPage + 1}
                          total={userList.length}
                          pageSize={pageSize}
                          onChange={(page) => {
                            setCurrentPage(page - 1);
                          }}
                          itemRender={(_, type, originElement) => {
                            if (type === "prev") {
                              return <IconChevronLeft />;
                            }
                            if (type === "next") {
                              return <IconChevronRight />;
                            }
                            return originElement;
                          }}
                        />
                      </Col>
                    </Row>
                  </Col>
                )}
              </Row>
            </Col>
            <Col span={24} className="component_waiting_list_table_content">
              <Table
                dataSource={userList}
                columns={columns}
                rowKey="id"
                loading={isLoading}
                pagination={{
                  pageSize,
                  style: { display: "none" },
                  current: currentPage + 1,
                }}
              />
            </Col>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
}
