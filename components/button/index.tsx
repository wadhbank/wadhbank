interface ButtonInterface {
  theme?: "primary" | "secondary" | "default";
  size?: "medium" | "small";
  type?: "button" | "reset" | "submit";
  children?: any;
  onClick?: () => void;
  className?: any;
}

const Index = (props: ButtonInterface) => {
  const { theme, size, children, className, ...otherProps } = props;

  const onGetThemes = () => {
    switch (theme) {
      case "primary":
        return `text-white-100 bg-${theme}-base hover:bg-${theme}-hover active:bg-${theme}-focus`;
      case "secondary":
        return "text-white-100 bg-none border border-white-60 active:bg-white-10";
      case "default":
        return "text-blue-70 bg-white-100 border border-blue-70 hover:bg-blue-10 active:bg-blue-20";
      default:
        return "";
    }
  };

  const onGetSizes = () => {
    switch (size) {
      case "medium":
        return "py-5 px-6 text-normal font-bold";
      case "small":
        return "py-14 px-6 text-small font-bold";
      default:
        return "";
    }
  };

  return (
    <button
      className={`${className} box-border transition-all duration-300 rounded-10 text ${onGetThemes()} ${onGetSizes()}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default Index;
