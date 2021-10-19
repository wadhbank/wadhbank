interface TypographyType {
  weight?: "regular" | "medium" | "bold";
  size?:
    | "heading-1"
    | "heading-5"
    | "heading-6"
    | "large"
    | "normal"
    | "small"
    | "extra-small";
  children?: any;
  onClick?: () => void;
  className?: any;
}

const Index = (props: TypographyType) => {
  const { weight, size, children, className, ...otherProps } = props;

  const onGetWeight = () => {
    if (weight === "regular" || weight === "medium") {
      return `font-${weight} leading-150`;
    }
    return `font-${weight} leading-125`;
  };

  return (
    <div
      className={`${className} text-${size} ${onGetWeight()}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};
export default Index;
