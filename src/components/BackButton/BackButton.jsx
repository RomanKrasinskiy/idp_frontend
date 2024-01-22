import icon from "../../images/BackButton.svg";
import style from './BackButton.module.css'

export default function BackButton({handleBackNavigate}) {

  return (
    <button onClick={handleBackNavigate} className={style.button}>
      <img src={icon} alt="icon back button" />
      Назад
    </button>
  );
}
