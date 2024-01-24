import style from "./LeftNavBar.module.css";
import BackButton from "../BackButton/BackButton";
import NavBarItem from "./NavBarItem/NavBarItem";
import idpIcon from "../../images/IdpIcon.svg";
import mentorIcon from "../../images/MentorIcon.svg";

export default function LeftNavBar() {
  return (
    <section className={style.container}>
      <BackButton />
      <NavBarItem link={"/idp"} icon={idpIcon} title={"Планы развития"} />
      <NavBarItem link={"/mentor"} icon={mentorIcon} title={"Задачи ментора"} />
    </section>
  );
}
