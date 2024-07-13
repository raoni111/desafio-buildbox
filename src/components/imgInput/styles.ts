import styled from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";
import { colors } from "../../config/styles/consmetics";

export const ImgInputComponent = styled.div`
  ${DisplayFlex("row", "center", "center")}
  position: relative;
  margin-top: 2rem;
  z-index: 2;
  cursor: pointer;
  .img-user-content {
      overflow: hidden;
      width: 90px;
      height: 90px;
      border: 1px solid ${colors.gray};
      background-color: ${colors.bgElementsColor};
      border-radius: 35px;
    ${DisplayFlex("row", "center", "center")}
    .user-img-element {
      width: 200%;
    }
    .default-img-icon {
      font-size: 2.5rem;
      color: ${colors.IconColor};
      cursor: pointer;
    }
  }
  .input-img-user {
    display: none;
  }
`;

export const DeleteImgContent = styled.div`
    position: absolute;
    top: 50px;
    left: 50%;
    font-size: 2.5rem;
    z-index: 1;
    color: ${colors.TrashColor};
    opacity: 0;
    transition: all 0.5s ease-in-out;
    z-index: 1;
    &.disable-false {
        cursor: pointer;
        top: 50px;
        left: 60%;
        opacity: 1;
        z-index: 2;
    }
`;
