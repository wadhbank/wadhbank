const columns = (props) => {
  const { currentPage, pageSize } = props;
  return [
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
};

export default columns;
