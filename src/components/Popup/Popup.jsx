import { Button } from "@alfalab/core-components-button";
import style from "./Popup.module.css";
import PropTypes from "prop-types";
import icon from "../../images/IconClose.svg";
import { useDispatch, useSelector } from "react-redux";
import CustomSearch from "../CustomSearch/CustomSearch";
import { closePopup1 } from "../../store/actions/popup1Actions";
import React from "react";

export default function Popup({
  title,
  search,
  input,
  text,
  buttonText,
  cancelButtonText,
}) {
  const isOpen = useSelector((state) => state.popup1.isOpen);
  const dispatch = useDispatch();

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
    <>
      {isOpen && (
        <div
          className={`${style.container} ${
            isOpen ? style.container__show : ""
          }`}
        >
          <div className={style.popup}>
            <h2 className={style.title}>{title}</h2>
            {search && <CustomSearch />}
            <div className={style.usersContainer}>
              <div className={style.scrollableContainer}>
                {users.map((user, index) => (
                  <React.Fragment key={index}>
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
                onClick={() => dispatch(closePopup1())}
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
                onClick={() => dispatch(closePopup1())}
                style={{ width: "152px" }}
                className={style.button}
                view="link"
              >
                {cancelButtonText}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
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
