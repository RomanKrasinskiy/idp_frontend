import style from "./NewIDP.module.css";
import { Input } from "@alfalab/core-components-input";
import CommentInput from "../CreateTask/CommentInput/CommentInput";
import EditWorker from "../CreateTask/EditWorker/EditWorker";
import Popup from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@alfalab/core-components-button";
import PropTypes from "prop-types";
import PetalsList from "../PetalsList/PetalsList";
import { ProgressBar } from "@alfalab/core-components-progress-bar";
import IDPsTableItems from "../IDPsTableItems/IDPsTableItems";
import { Link } from "react-router-dom";
import PopupAppointment from "../PopupAppointment/PopupAppointment";
import { openPopup1 } from "../../store/actions/popup1Actions";
import { useState } from "react";


export default function NewIDP({ title }) {
  const [value, setValue] = useState({
    idpComment: null,
  });

  const onChange = (name, value) => {
    setValue((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };
  const dispatch = useDispatch();
  const popup1IsOpen = useSelector((state) => state.popup1.isOpen);
  const popup2IsOpen = useSelector((state) => state.popup2.isOpen);

  return (
    <>
      {popup1IsOpen && (
        <Popup
          title="Сотрудник"
          buttonText="Сохранить"
          cancelButtonText="Отмена"
          search={true}
        />
      )}

      {popup2IsOpen && <PopupAppointment />}

      <section className={style.container}>
        <h2 className={style.title}>{title ? title : "Новая задача"}</h2>
        <p className={style.subtitle}>до 19.10.2024</p>
        <ProgressBar className={style.progressBar} value={0.5} />
        <p
          style={{ marginBottom: "4px", fontSize: "var(--fz-text)" }}
          className={style.subtitle}
        >
          Название *
        </p>
        <Input className={style.input} labelView="inner" label="" />
        <div style={{ marginBottom: "7px" }}>
          <CommentInput
            title="Добавить описание"
            value={value.idpComment}
            onChange={onChange}
            name="idpComment"
          />
        </div>
        <EditWorker
          handleOpenEdit={() => dispatch(openPopup1())}
          text="Сотрудник"
        />
        <div className={style.container__worker}>
          
        </div>
        <div className={style.container__task}>
          <h3 className={style.title__task}>Задачи плана</h3>
          <Link to="/newTask">
            <Button
              className={style.button}
              shape="rectangular"
              view="tertiary"
              size="m"
            >
              <p className={style.text}>Добавить задачу</p>
            </Button>
          </Link>
        </div>
        <PetalsList />
        <div className={style.task__items}>
          <IDPsTableItems />
        </div>
      </section>
    </>
  );
}

NewIDP.propTypes = {
  title: PropTypes.string,
};
