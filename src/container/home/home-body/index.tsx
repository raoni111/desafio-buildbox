/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import Button from "../../../components/button";
import ImgInput from "../../../components/imgInput";
import { HomeBodyContainer, InputContent } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../../features/messages";

export default function HomeBody() {
    const [ref, setRef] = useState<{reset?: () => void}>({});

    const messages = useSelector((state: any) => state.message.messages);

    const dispatch = useDispatch();

    const refUserName = useRef<HTMLInputElement | null>(null);
    const refMsg = useRef<HTMLTextAreaElement | null>(null);

    const [imgUrl, setImgUrl] = useState<string>('');

    const formSubmitCapture = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!refMsg || !refMsg.current || !refUserName || !refUserName.current || !imgUrl) {
            return;
        }

        const message = {
            message: refMsg.current.value,
            userName: refUserName.current.value,
            userAvatarUrl: imgUrl,
        }
        dispatch(increment(message));

        reset();
    }
    
    const onChange = (imgUrl: string | null) => {
        if (!imgUrl) {
            return;
        }
        setImgUrl(imgUrl);
    }
    
    const reset = () => {
        if (!ref.reset || !refMsg || !refMsg.current || !refUserName || !refUserName.current) {
            return;
        }
        
        
        refUserName.current.value = '';
        refMsg.current.value = ''
        
        ref.reset()
    }
    
    console.log(messages);
    return (
        <HomeBodyContainer>
            <ImgInput setRef={setRef} onChange={onChange} />
            <form className="form-home-content" method="POST" action='/' onSubmit={formSubmitCapture}>
                <InputContent>
                    <input className={`input-element input-text`} placeholder="Digite o seu nome" type="text" ref={refUserName}/>
                </InputContent>
                <InputContent>
                    <textarea className={`input-element input-textarea`} placeholder="Menagem" ref={refMsg} />
                </InputContent>
                <InputContent $buttonContent>
                    <Button type="cancel" className="button-component" onClick={reset}>Descartar</Button>
                    <Button type="submit" className="button-component">Publicar</Button>
                </InputContent>
            </form>
        </HomeBodyContainer>
    )
}