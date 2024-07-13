import styled, { css } from "styled-components";
import { colors } from "../../../config/styles/consmetics";
import { DisplayFlex } from "../../../config/styles/mixins";

export const HomeBodyContainer = styled.section`
    ${DisplayFlex("column", 'flex-start', 'center')}
    position: relative;
    width: 600px;
    min-height: 400px;
    margin-top: 15rem;
    background-color: ${colors.bgElementsColor};
    border-radius: 3px;
    border: 1px solid ${colors.borderColor};
    .form-home-content {
        ${DisplayFlex('column', 'flex-start', 'center')}
        margin-top: 2rem;
        width: 90%;
    }
`;

export const InputContent = styled.section<{$buttonContent?: boolean}>`
    ${props => {
        if (props.$buttonContent) {
            return css`
                ${DisplayFlex("row", 'flex-end', 'center')}
                margin-top: 4rem;
                .button-component {
                    &:nth-child(1) {
                        margin-right: 3rem;
                    }
                }
            `;
        }
    }}
    .input-element {
        width: 100%;
        margin-top: 1rem;
        padding: 1rem 2rem;
        background-color: ${colors.gray};
        border: none;
        border-radius: 5px;
        font-size: 1.5rem;
        color: ${colors.pFontColor};
        &::placeholder {
            color: ${colors.tFontColor};
        }
        &.input-text {

        }
        &.input-textarea {
            min-width: 100%;
            max-width: 100%;
            min-height: 100px;
            max-height: 100px;
        }
    }
    width: 100%;
`