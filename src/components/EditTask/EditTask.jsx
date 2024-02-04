import style from "./EditTask.module.css";
import { useState } from "react";
import { Input } from "@alfalab/core-components-input";
import { Textarea } from "@alfalab/core-components-textarea";
import { Attach } from "@alfalab/core-components-attach";
import { Button } from "@alfalab/core-components-button";
import { Skeleton } from "@alfalab/core-components-skeleton";
import CalendarInput from "../CreateTask/CalendarInput/CalendarInput";
import Popup from "../Popup/Popup";
import EditWorker from "../CreateTask/EditWorker/EditWorker";
import CommentInput from "../CreateTask/CommentInput/CommentInput";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { openPopup1 } from "../../store/actions/popup1Actions";
import { useGetTaskByIdpIdQuery } from "../../store/api/idpApi";

export default function EditTask() {
  const { taskId, idpId } = useParams();

  const { data, isLoading } = useGetTaskByIdpIdQuery({ idpId, taskId });

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
  console.log(data)
  //Вызов dispatch для открытия попапа
  const dispatch = useDispatch();

  const popup1IsOpen = useSelector((state) => state.popup1.isOpen);

  //функция для назначения стейтов с инпутов
  function handleChange(name, value) {
    setTask_dataValue((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  }

  function handleChangeFile(name, e) {
    setTask_dataValue((prevdata) => ({
      ...prevdata,
      [name]: e.target.files[0],
    }));
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

  return (
    <>
      {/* Попап выбора ментора */}
      {popup1IsOpen && (
        <Popup
          title="Ментор"
          buttonText="Сохранить"
          cancelButtonText="Отмена"
          search={true}
        />
      )}
      {!isLoading && (
        // {/* Редактирование задачи */}
        <section className={style.container}>
          <h2 className={style.title}>{data.task_name}</h2>
          <Skeleton style={{ marginBottom: "20px" }} visible={false}>
            <Textarea
              defaultValue={data.task_name}
              name="task_title"
              onChange={(e) => handleChange("task_title", e.target.value)}
              style={{ width: "522px"}}
              block={true}
              className={style.input}
              type="text"
              minRows={3}
            />
          </Skeleton>
          <Skeleton style={{ marginBottom: "20px" }}>
            <Textarea
              name="task_description"
              defaultValue={data.task_description}
              onChange={(e) => handleChange("task_description", e.target.value)}
              style={{ width: "522px" }}
              block={true}
              className={style.input}
              type="text"
              minRows={3}
            />
          </Skeleton>

          {/* Текст с инпутом для комментария руководителя */}
          <CommentInput
            name="chief"
            value={data.task_note_chief}
            onChange={handleChange}
            title="Комментарий руководителя"
          />

          {/* Текст с инпутом для комментария ментора */}
          <CommentInput
            name="mentor"
            value={data.task_note_mentor}
            onChange={handleChange}
            title="Комментарий ментора"
          />

          {/* Текст с инпутом для комментария сотрудника */}
          <CommentInput
            name="worker"
            value={data.task_note_employee}
            onChange={handleChange}
            title="Комментарий сотрудника"
          />

          {/* Контейнер с данными ментора */}
          {data.task_mentor ? (<EditWorker
            handleOpenEdit={() => dispatch(openPopup1())}
            title="Ментор"
            text="Выбрать ментора"
            nameWorker={data.task_mentor.first_name }
            lastNameWorker={data.task_mentor.last_name}
          />) : (<EditWorker
            handleOpenEdit={() => dispatch(openPopup1())}
            title="Ментор"
            text="Выбрать ментора"
          />)}
          
          {/* Календарь */}
          <p className={style.text}>Выполнить до</p>
          <CalendarInput
            onClear={onClearCalendar}
            name="calendar"
            value={task_data.calendar}
            onChange={handleChange}
          />
          {/* Прикрепление файла */}
          <Attach
            onClear={onClearFile}
            maxFilenameLength={10}
            type="file"
            onChange={(e) => handleChangeFile("file", e)}
            className={style.attach}
          />

          <Link className={style.button__delete__container} to="/idps">
            <Button
              style={{ backgroundColor: "black", color: "white" }}
            >Сохранить изменения</Button>
            <Button
              className={style.delete__button}
            >Удалить задачу</Button>
          </Link>
        </section>
      )}
    </>
  );
}

EditTask.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
};
