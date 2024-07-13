import styled from "styled-components";
import { colors } from "../../../config/styles/consmetics";
import { DisplayFlex } from "../../../config/styles/mixins";

export const Header = styled.header`
    position: fixed;
    top: 0px;
    ${DisplayFlex('row', 'center', 'center')}
    width: 100vw;
    background-color: ${colors.bgHeader};
    z-index: 3;
`;

export const LogoContent = styled.div`
    ${DisplayFlex('column', 'center', 'center')}
    padding: 3rem 0rem;
`;

export const Logo = styled.h1`
    font-size: 2.8rem;
    color: ${colors.green};
    font-weight: 900;
`;

export const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    color: ${colors.sFontColor};
`;