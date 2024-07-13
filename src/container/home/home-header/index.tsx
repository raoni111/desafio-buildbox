import { Header, Logo, LogoContent, SubTitle } from "./styles";

export default function HomeHeader(): JSX.Element {
    return (
        <Header>
            <LogoContent>
                <Logo>buildbox</Logo>
                <SubTitle>WEB CHALLENGE</SubTitle>
            </LogoContent>
        </Header>
    );
}