import styled from "styled-components";
import { DisplayFlex } from "../../config/styles/mixins";
import { colors } from "../../config/styles/consmetics";

export const MessageComponent = styled.li`
    position: relative;
    ${DisplayFlex("row", "space-between", "center")}
    width: 100%;
    margin-top: 2rem;
    padding: 2rem;
    background-color: ${colors.bgElementsColor};
    border: 1px solid ${colors.borderColor};
    border-radius: 5px;
`;

export const UserAvatar = styled.div`
    ${DisplayFlex("row", "center", "center")}
    overflow: hidden;
    border-radius: 40%;
    width: 70px;
    height: 70px;
    img {
        width: 200%;
    }
`;

export const MessageContent = styled.div`
    width: 80%;
    margin-top: 3rem;
    .message-content {
        min-height: 50px;
        color: ${colors.tFontColor};
        font-size: 1.6rem;
    }
    .user-name-content {
        margin-top: 1rem;
        span {
            font-size: 1.2rem;
            color: ${colors.sFontColor};
        }
        h2 {
            font-size: 1.1rem;
            margin-top: 0.5rem;
            color: ${colors.tFontColor};
        }
    }
`

export const CloseIconContent = styled.div`
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 2rem;
    color: ${colors.TrashColor};
    cursor: pointer;
`;