import style from "./LeftNavBar.module.css";
import BackButton from "../BackButton/BackButton";
import NavBarItem from "./NavBarItem/NavBarItem";
// import idpIcon from "../../images/IdpIcon.svg";
// import mentorIcon from "../../images/MentorIcon.svg";
import { ArrowUpLineDownMIcon } from '@alfalab/icons-glyph/ArrowUpLineDownMIcon';
import { SquareAcademicCapMIcon } from '@alfalab/icons-glyph/SquareAcademicCapMIcon';


export default function LeftNavBar() {
  return (
    <section className={style.container}>
      <BackButton />
      <NavBarItem link={"/idps"} icon={<ArrowUpLineDownMIcon />} title={"Планы развития"} />
      <NavBarItem link={"/mentor"} icon={<SquareAcademicCapMIcon />} title={"Задачи ментора"} />
    </section>
  );
}
