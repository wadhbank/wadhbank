import React from "react";
import ButtonAntd from "./style";

const Button: typeof ButtonAntd = (props) => {
  const {
    className,
    type,
    children,
    onClick,
    size,
    style,
    disabled,
    htmlType,
    loading,
  } = props;

  return (
    <ButtonAntd
      className={
        className ? `component_button ${className}` : "component_button"
      }
      loading={loading}
      style={style || null}
      disabled={disabled || false}
      type={type || null}
      onClick={onClick || null}
      htmlType={htmlType || "button"}
      size={size || null}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ButtonAntd>
  );
};

export default Button;
