import { Button } from "@alfalab/core-components-button";
import style from "./PopupAppointment.module.css";
import icon from "../../images/IconClose.svg";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../store/popupSlice";
export default function PopupAppointment() {
  //Состояние попапа
  const popup = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  //Функция закрытия попапа
  function handleClosePopup() {
    dispatch(closePopup());
  }

  return (
    <div
      className={`${style.container} ${
        popup.isOpen ? style.container__show : ""
      }`}
    >
      <div className={style.popup}>
        <h2 className={style.title}>Назначить встречу</h2>

        <img
          onClick={handleClosePopup}
          className={style.icon}
          src={icon}
          alt="Иконка закрытия попапа"
        />

        <div className={style.container__worker}>
          <p className={style.userTitle}>Сотрудник</p>
          <p className={style.userName}>Константин Константинопольский</p>
          <p className={style.post}>JS разработчик</p>
        </div>

        <div className={style.button_container}>
          <Button style={{ width: "152px" }} className={style.button}>
            Назначить
          </Button>
          <Button
            onClick={handleClosePopup}
            style={{ width: "152px" }}
            className={style.button}
            view="link"
          >
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
}
