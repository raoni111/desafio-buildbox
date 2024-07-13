import { SetStateAction, useEffect, useState } from "react";
import { DeleteImgContent, ImgInputComponent } from "./styles";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { FiTrash } from "react-icons/fi";

interface ImgInputPros {
    onChange?: (img: string | null) => void
    setRef?: React.Dispatch<SetStateAction<{reset?: () => void}>>
}

export default function ImgInput({ onChange, setRef}: ImgInputPros) {
    const [userImg, setUserImg] = useState<string | null>(null);

    const inputImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;

        if (!input?.files) {
            return;
        }

        const file = input.files[0];

        const render = new FileReader();

        render.onload = (ev) => {
            if (!ev.target?.result) {
                setUserImg(null);
                onChange ? onChange(null) : undefined;
                return;
            }
            if (typeof ev.target.result !== 'string') {
                setUserImg(null);
                onChange ? onChange(null) : undefined;
                return;
            }

            setUserImg(ev.target.result);

            onChange ? onChange(ev.target.result) : undefined;
        }

        render.readAsDataURL(file);
    }

    const UserImgContent = () => {
        if (userImg) {
            return <img className="user-img-element" src={userImg} alt="" />
        }

        return <MdOutlineAddPhotoAlternate className="default-img-icon" />
    }

    
    const resetImg = () => {
        setUserImg(null);
    }

    useEffect(() => {
        if (!setRef) {
            return;
        }

        setRef({
            reset: () => {
                resetImg();
            }
        })
    }, []);

    return (
        <>
            <DeleteImgContent className={`disable-${!userImg ? true : false}`} onClick={resetImg}>
                <FiTrash />
            </DeleteImgContent>
            <ImgInputComponent>
                <label className="img-user-content" htmlFor="input-img-user">
                    <UserImgContent />
                </label>
                <input className="input-img-user" id='input-img-user' type="file" onChange={inputImgChange} />
            </ImgInputComponent>
        </>
    )
}