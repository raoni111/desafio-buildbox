import styled from "styled-components";
import { colors } from "../../config/styles/consmetics";

export const ButtonComponent = styled.div`
    .button-element {
        cursor: pointer;
        font-size: 1.5rem;
        border: none;
        padding: 1rem 2rem;
        color: ${colors.bgHeader};
        &.button-type-cancel {
            background-color: #0000;
            border-bottom: 1px solid ${colors.sFontColor};
            padding: 0px;
            color: ${colors.sFontColor};
        }
        &.button-type-submit {
            background-color: ${colors.sFontColor};
            border-radius: 5px;
            transition: all 0.2s ease-in-out;
            &:hover {
                background-color: ${colors.green};
                color: ${colors.pFontColor};
            }
        }
    }
`;