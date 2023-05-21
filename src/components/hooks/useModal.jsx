import { useState } from "react";
import MyAlert from "../utils/MyAlert";
function useModal() {
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [clickEvent, setClickEvent] = useState()
    const show = (message, onClick) => {
        setMessage(message)
        setClickEvent(() => onClick)
        setIsVisible(true)
    }
    const onModalClick = () => {
        clickEvent && clickEvent()
        setIsVisible(false)
    }

    const modal = <MyAlert modalVisible={isVisible} modalMessage={message} onClick={onModalClick} />

    return [modal, show]
}
export default useModal