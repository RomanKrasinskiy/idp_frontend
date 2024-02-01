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
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { openPopup } from "../../store/popupSlice";
import { Link } from "react-router-dom";
import CustomSearch from "../CustomSearch/CustomSearch";

export default function CreateTask({ title, buttonText }) {
  
  //Значение инпутов
  const [task_data, setTask_dataValue] = useState({
    chief: "",
    mentor: "",
    worker: "",
    task_title: "",
    calendar: "",
    task_description: "",
    file: {},
  });

  //Вызов dispatch для открытия попапа
  const dispatch = useDispatch();

  function handleOpenPopup() {
    dispatch(openPopup());
  }

  //функция для назначения стейтов с инпутов
  function handleChange(name, value) {
    setTask_dataValue((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  }

  function handleChangeFile(name,e) {
    setTask_dataValue(prevdata => ({
      ...prevdata,
      [name]:e.target.files[0]
    }))
  }

  //Функция для очистки календаря
  function onClearCalendar() {
    setTask_dataValue((prevdata) => ({
      ...prevdata,
      calendar: "",
    }));
  }

  function onClearFile() {
    setTask_dataValue((prevdata) => ({
      ...prevdata,
      file: {},
    }));
  }

  console.log(task_data)
  return (
    <>
      {/* Попап выбора ментора */}
      <Popup
        title="Ментор"
        buttonText="Сохранить"
        cancelButtonText="Отмена"
        handleOpenPopup={handleOpenPopup}
        search={true}
      />

      {/* Создание новой задачи */}
      <section className={style.container}>
        <h2 className={style.title}>{title}</h2>
        <Skeleton style={{ marginBottom: "20px" }} visible={false}>
          <Input
            name="task_title"
            style={{ width: "522px" }}
            className={style.input}
            label="Название задачи"
            type="text"
            value={task_data.task_title}
            onChange={(e) => handleChange("task_title", e.target.value)}
          />
        </Skeleton>
        <Skeleton style={{ marginBottom: "20px" }}>
          <Textarea
            name="task_description"
            value={task_data.task_description}
            onChange={(e) => handleChange("task_description", e.target.value)}
            style={{ width: "522px" }}
            label="Описание задачи"
            block={true}
            className={style.input}
            type="text"
            minRows={3}
          />
        </Skeleton>

        {/* Текст с инпутом для комментария руководителя */}
        <CommentInput
          name="chief"
          value={task_data.chief}
          onChange={handleChange}
          title="Комментарий руководителя"
        />

        {/* Текст с инпутом для комментария ментора */}
        <CommentInput
          name="mentor"
          value={task_data.mentor}
          onChange={handleChange}
          title="Комментарий ментора"
        />

        {/* Текст с инпутом для комментария сотрудника */}
        <CommentInput
          name="worker"
          value={task_data.worker}
          onChange={handleChange}
          title="Комментарий сотрудника"
        />

        {/* Контейнер с данными ментора */}
        <EditWorker
          handleOpenEdit={handleOpenPopup}
          title="Ментор"
          text="Выбрать ментора"
        />

        {/* Календарь */}
        <p className={style.text}>Выполнить до</p>
        <CalendarInput
          onClear={onClearCalendar}
          name="calendar"
          value={task_data.calendar}
          onChange={handleChange}
        />
        {/* Прикрепление файла */}
        <Attach onClear={onClearFile} maxFilenameLength={10} type='file' onChange={(e) => handleChangeFile('file', e)} className={style.attach} />

        <Link to="/idps">
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
  buttonText: PropTypes.string,
};
