/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { FeedContent, HomeFeedContainer } from "./style";
import Message from "../../../components/feed";

export default function HomeFeed() {
    const messages = useSelector(state => state.message.messages);

    return (
        <HomeFeedContainer>
            <h1>Feed</h1>
            <FeedContent>
                {messages.map((message: any) => {
                    return <Message message={message} />
                })}
            </FeedContent>
        </HomeFeedContainer>
    )
}