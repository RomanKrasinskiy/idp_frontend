import { Button } from "@alfalab/core-components-button";
import style from "./Popup.module.css";
import PropTypes from "prop-types";
import icon from "../../images/IconClose.svg";
import { useDispatch, useSelector } from "react-redux";
import { closePopup } from "../../store/popupSlice";
import CustomSearch from "../CustomSearch/CustomSearch";
import React from "react";

export default function Popup({
  title,
  search,
  input,
  text,
  buttonText,
  cancelButtonText,
}) {
  //Состояние попапа
  const popup = useSelector((state) => state.popup);
  const dispatch = useDispatch();

  //Функция закрытия попапа
  function handleClosePopup() {
    dispatch(closePopup());
  }

  const users = [
    "Константин Константинопольский",
    "Сергей Есенин",
    "Иван Бунин",
    "Константин Константинопольский",
    "Сергей Есенин",
    "Иван Бунин",
    "",
    "",
  ];

  return (
    <div
      className={`${style.container} ${
        popup.isOpen ? style.container__show : ""
      }`}
    >
      <div className={style.popup}>
        <h2 className={style.title}>{title}</h2>
        {search && <CustomSearch />}
        <div className={style.usersContainer}>
          <div className={style.scrollableContainer}>
            {users.map((user, index) => (
              <React.Fragment key={user}>
                <p className={style.user}>{user}</p>
                {index !== users.length - 1 && (
                  <div className={style.grayLine} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
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
            style={{ width: "152px" }}
            className={style.button}
            view="link"
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
  search: PropTypes.bool,
};
