import styled from "styled-components";
import fonts from "../../configs/fonts";

const Wrapper = styled.div`
  font-family: Raleway;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${fonts.font_heading_5};
`;

export default Wrapper;
