import styles from './CustomButton.module.css'
import { RiDeleteBin2Fill } from "react-icons/ri";
import { RiCheckLine } from "react-icons/ri";
import { RiProgress5Line } from "react-icons/ri";
import { RiZzzLine } from "react-icons/ri";
import { RiEraserLine } from "react-icons/ri";

// Компонент кнопки - действие и название
function CustomButton({design, text, buttonIcon, listener}){

    function iconByText(bI){
        if (bI==='del') return <RiDeleteBin2Fill />
        if (bI==='complete') return <RiCheckLine />
        if (bI==='uncomplete') return <RiProgress5Line />
        if (bI==='clearall') return <RiZzzLine />
        if (bI==='clearcompleted') return <RiEraserLine />
        return <span>{text}</span>
    }



    function getDesign(design){
        if (design === 'del') return styles.deleteIcon;
        if (design === 'complete') return styles.checkIcon;
        return styles.custom_button
    }

    const action = ()=>{listener()}
    return <button className={getDesign(design)} onClick={action}>{iconByText(buttonIcon)}</button>
}

export default CustomButton