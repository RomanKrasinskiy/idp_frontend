import { Button } from "@alfalab/core-components-button";
import style from "./PopupAppointment.module.css";
import icon from "../../images/IconClose.svg";
import { useDispatch, useSelector } from "react-redux";
import { closePopup2 } from "../../store/actions/popup2Actions";
import CustomSearch from "../CustomSearch/CustomSearch";
import { Calendar } from "@alfalab/core-components-calendar";
import { UniversalDateInput } from "@alfalab/core-components-universal-date-input";
import React from "react";
export default function PopupAppointment() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.popup2.isOpen);
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");

  const users = [
    "Константин Константинопольский",
    "Сергей Есенин",
    "Иван Бунин",
    "Константин Константинопольский",
    "Сергей Есенин",
    "Иван Бунин",
  ];

  const handleChange = (_, { value, value2 }) => {
    setValue(value);
    setValue2(value2);
  };

  return (
    <>
      {isOpen && (
        <div
          className={`${style.container} ${
            isOpen ? style.container__show : ""
          }`}
        >
          <div className={style.popup}>
            <h2 className={style.title}>Назначить встречу</h2>

            <CustomSearch />

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

            <img
              onClick={() => dispatch(closePopup2())}
              className={style.icon}
              src={icon}
              alt="Иконка закрытия попапа"
            />

            <div className={style.dataAndTime}>
              <div className={style.data}>
                <UniversalDateInput
                  breakpoint={500}
                  block={true}
                  view="date"
                  label="Дата"
                  labelView={"outer "}
                  size="s"
                  value={value}
                  onChange={handleChange}
                  disableUserInput={false}
                  picker={"full"}
                  Calendar={Calendar}
                  calendarProps={{
                    selectorView: "full",
                  }}
                  clear={true}
                  onClear={(e) => {
                    e.stopPropagation();
                    setValue("");
                  }}
                />
              </div>
              <div className={style.time}>
                <UniversalDateInput
                  value={value2}
                  onChange={handleChange}
                  view="time"
                  label="Время"
                  labelView={"inner"}
                  size="s"
                  breakpoint={500}
                  block={true}
                  clear={true}
                  onClear={(e) => {
                    e.stopPropagation();
                    setValue("");
                  }}
                />
              </div>
            </div>

            <div className={style.button_container}>
              <Button style={{ width: "152px" }} className={style.button}>
                Назначить
              </Button>
              <Button
                onClick={() => dispatch(closePopup2())}
                style={{ width: "152px" }}
                className={style.button}
                view="link"
              >
                Отмена
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
