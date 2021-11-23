const Index = (props) => {
  const { children, placeholder, className, ...otherProps } = props;
  return (
    <input
      placeholder={placeholder}
      className={`${className} w-full outline-none border border-black-60 rounded-10 p-4`}
      {...otherProps}
    >
      {children}
    </input>
  );
};
export default Index;
