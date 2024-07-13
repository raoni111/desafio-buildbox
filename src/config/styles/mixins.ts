import {css} from "styled-components";

type FlexDirectionType = "row" | "row-reverse" | "column" | "column-reverse";
type JustifyContentType = "flex-start" | "flex-end" | "center" | "space-between";
type AlignItemsType = "start" | "end" | "center";

export function DisplayFlex(flexDirection:  FlexDirectionType, justifyContent: JustifyContentType, alignItems: AlignItemsType) {
    return css`
        display: flex;
        flex-direction: ${flexDirection};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
    `;
}