import { Button } from "@alfalab/core-components-button";
import style from "./Popup.module.css";
import PropTypes from "prop-types";
import icon from "../../images/IconClose.svg";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../store/popupSlice";

export default function Popup({
  title,
  input,
  text,
  buttonText,
  cancelButtonText,
}) {
  //Состояние попапа
  const popup = useSelector(state => state.popup)
  const dispatch = useDispatch();

  //Функция закрытия попапа
  function handleClosePopup() {
    dispatch(closePopup());
  }
  
  return (
    <div
      className={`${style.container} ${popup.isOpen ? style.container__show : ""}`}
    >
      <div className={style.popup}>
        <h2 className={style.title}>{title}</h2>
        {title === "Отменить выделение" ? (
          <></>
        ) : (
          <img
            onClick={handleClosePopup}
            className={style.icon}
            src={icon}
            alt="Иконка закрытия попапа"
          />
        )}
        {input ? input : <p className={style.text}>{text}</p>}
        <div className={style.button_container}>
          <Button style={{ width: "152px" }} className={style.button}>
            {buttonText}
          </Button>
          <Button
            onClick={handleClosePopup}
            style={{ width: "95px" }}
            className={style.button}
          >
            {cancelButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  title: PropTypes.string,
  input: PropTypes.func,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  cancelButtonText: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};
