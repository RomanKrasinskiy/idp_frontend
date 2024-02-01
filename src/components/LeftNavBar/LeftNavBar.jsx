import { useLocation } from "react-router-dom";
import style from "./LeftNavBar.module.css";
import BackButton from "../BackButton/BackButton";
import NavBarItem from "./NavBarItem/NavBarItem";
// import idpIcon from "../../images/IdpIcon.svg";
// import mentorIcon from "../../images/MentorIcon.svg";
import { ArrowUpLineDownMIcon } from "@alfalab/icons-glyph/ArrowUpLineDownMIcon";
import { SquareAcademicCapMIcon } from "@alfalab/icons-glyph/SquareAcademicCapMIcon";

export default function LeftNavBar() {
  const location = useLocation();

  const currentUrl = location.pathname;

  return (
    <section className={style.container}>
      <BackButton />
      {((currentUrl == "/mentor") ||
        (currentUrl == "/")) && (
          <>
            <NavBarItem
              link={"/"}
              icon={<ArrowUpLineDownMIcon />}
              title={"Планы развития"}
            />
            <NavBarItem
              link={"/mentor"}
              icon={<SquareAcademicCapMIcon />}
              title={"Задачи ментора"}
            />
          </>
        )}
    </section>
  );
}
