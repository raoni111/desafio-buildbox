/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoMdCloseCircleOutline } from "react-icons/io";
import { decrement, messagesType } from "../../features/messages";
import { CloseIconContent, MessageComponent, MessageContent, UserAvatar } from "./style";
import { useDispatch} from "react-redux";

type MessageProps = {
    message: messagesType,
}

export default function Message({message}: MessageProps) {
    const dispatch = useDispatch();


    const removeMessage = () => {
        dispatch(decrement({id: message.id}))
    }

    return (
        <MessageComponent>
            <CloseIconContent onClick={removeMessage}>
                <IoMdCloseCircleOutline />
            </CloseIconContent>
            <UserAvatar>
                <img src={message.userAvatarUrl} alt="" />
            </UserAvatar>
            <MessageContent>
                <div className="message-content">
                    <p>{message.message}</p>
                </div>
                <div className="user-name-content">
                    <span>Enviado Por</span>
                    <h2>{message.userName}</h2>
                </div>
            </MessageContent>
        </MessageComponent>
    )
}