import HomeBody from "../../container/home/home-body";
import HomeFeed from "../../container/home/home-feed";
import HomeHeader from "../../container/home/home-header";
import { HomeMain } from "./styles"

export default function HomeRoute() {
    return (
        <HomeMain>
            <HomeHeader />
            <HomeBody />
            <HomeFeed />
        </HomeMain>
    );
}