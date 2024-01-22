import style from "./LeftNavBar.module.css";
import BackButton from "../BackButton/BackButton";
import NavBarItem from "./NavBarItem/NavBarItem";
import idpIcon from '../../images/IdpIcon.svg'
import mentorIcon from '../../images/MentorIcon.svg'
import { useState } from "react";


export default function LeftNavBar() {
    const [isActive, setIsActive] = useState(false)

    return(
        <section className={style.container}>
             <BackButton /> 
            <NavBarItem isActive={isActive} icon={idpIcon} title={'Планы развития'}/>
            <NavBarItem isActive={isActive} icon={mentorIcon} title={'Задачи ментора'}/>
        </section>
    );
}
