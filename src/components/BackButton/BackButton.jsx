import { Link, useNavigate } from "react-router-dom";
import icon from "../../images/BackButton.svg";
import style from "./BackButton.module.css";

export default function BackButton() {
  const navigate = useNavigate();

  function handleBackNavigate() {
    navigate(-1);
  }

  return (
    <Link onClick={handleBackNavigate} className={style.button}>
      <img src={icon} alt="icon back button" />
      Назад
    </Link>
  );
}
