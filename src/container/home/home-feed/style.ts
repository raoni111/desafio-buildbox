import styled from "styled-components";
import { colors } from "../../../config/styles/consmetics";

export const HomeFeedContainer = styled.section`
    width: 600px;
    margin-top: 4rem;
    padding-bottom: 1rem;
    h1 {
        color: ${colors.tFontColor};
    }
`;

export const FeedContent = styled.ul`
    list-style: none;
    width: 100%;
    padding: 0px;
`;