import style from "./CreateTask.module.css";
import { useState } from "react";
import { Input } from "@alfalab/core-components-input";
import { Textarea } from "@alfalab/core-components-textarea";
import { Attach } from "@alfalab/core-components-attach";
import { Button } from "@alfalab/core-components-button";
import { Skeleton } from "@alfalab/core-components-skeleton";
import CalendarInput from "./CalendarInput/CalendarInput";
import Popup from "../Popup/Popup";
import EditWorker from "./EditWorker/EditWorker";
import CommentInput from "./CommentInput/CommentInput";
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux";
import { openPopup } from "../../store/popupSlice";
import { Link } from "react-router-dom";

export default function CreateTask({title, buttonText}) {
  //Значение инпутов
  const [value, setValue] = useState("");

  const dispatch = useDispatch()

  function handleOpenPopup() {
    dispatch(openPopup())
  }

  return (
    <>
      {/* Попап выбора ментора */}
      <Popup title="Ментор" buttonText="Сохранить" cancelButtonText="Отмена" handleOpenPopup={handleOpenPopup} search={true} />

      {/* Создание новой задачи */}
      <section className={style.container}>
        <h2 className={style.title}>{title}</h2>
        <Skeleton style={{ marginBottom: "20px" }} visible={false}>
          <Input
            style={{ width: "522px" }}
            className={style.input}
            label="Название задачи"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Skeleton>
        <Skeleton style={{ marginBottom: "20px" }}>
          <Textarea
            style={{ width: "522px" }}
            label="Описание задачи"
            block={true}
            className={style.input}
            type="text"
            minRows={3}
          />
        </Skeleton>
        {/* Текст с инпутом для комментария руководителя */}
        <CommentInput title="Комментарий руководителя" />

        {/* Текст с инпутом для комментария ментора */}
        <CommentInput title="Комментарий ментора" />

        {/* Текст с инпутом для комментария сотрудника */}

        <CommentInput title="Комментарий сотрудника" />

        {/* Контейнер с данными ментора */}
        <EditWorker handleOpenEdit={handleOpenPopup} title="Ментор" text="Выбрать ментора" />

        {/* Календарь */}
        <p className={style.text}>Выполнить до</p>
        <CalendarInput />

        {/* Прикрепление файла */}
        <Attach className={style.attach} />
        <Link to='/'>
        <Button style={{ backgroundColor: "black", color: "white" }}>
          {buttonText}
        </Button>
        </Link>
      </section>
    </>
  );
}

CreateTask.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string
}
