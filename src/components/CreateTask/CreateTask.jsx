import style from "./CreateTask.module.css";
import { useState } from "react";
import { Input } from "@alfalab/core-components-input";
import { Textarea } from "@alfalab/core-components-textarea";
import { Attach } from "@alfalab/core-components-attach";
import { Button } from "@alfalab/core-components-button";
import { Skeleton } from "@alfalab/core-components-skeleton";
import plus from "../../images/AddPlus.svg";
import edit from "../../images/Edit.svg";
import CalendarInput from "./CalendarInput/CalendarInput";
import Popup from "../Popup/Popup";
import { useDispatch } from "react-redux";
import { openPopup } from "../../store/popupSlice";

export default function CreateTask() {
  //Вызов диспетчера для изменения состояния попапа
  const dispatch = useDispatch()

  //Функция открытия попапа
  function handleOpenEdit() {
    dispatch(openPopup())
  }

  //Значение инпутов
  const [value, setValue] = useState("");

  //Состояние кнопки добавления комментария
  const [commentState, setCommentStates] = useState({
    chief: false,
    mentor: false,
    coworker: false,
  });

  // Показывает инпут в зависимости от того от кого комментарий нужно оставить
  function handleCommentChoice(position) {
    setCommentStates((prevState) => ({
      ...prevState,
      [position]: !prevState[position],
    }));
  }

  return (
    <>
    {/* Попап выбора ментора */}
    <Popup title='Ментор' buttonText="Сохранить" cancelButtonText="Отмена"/>
    
    {/* Создание новой задачи */}
    <section className={style.container}>
      <h2 className={style.title}>Новая задача</h2>
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
          // disabled={true}
          block={true}
          className={style.input}
          type="text"
          minRows={3}
        />
      </Skeleton>
      {/* Текст с инпутом для комментария руководителя */}
      <div className={style.button__container}>
        <img
          onClick={() => handleCommentChoice("chief")}
          className={style.button_add}
          src={plus}
          alt="add icon"
        />
        <p
          onClick={() => handleCommentChoice("chief")}
          className={style.text__comment}
        >
          Комментарий руководителя
        </p>
      </div>
      {commentState.chief && (
        <Textarea
          minRows={3}
          style={{ width: "522px" }}
          className={style.input}
        />
      )}

      {/* Текст с инпутом для комментария ментора */}

      <div className={style.button__container}>
        <img
          onClick={() => handleCommentChoice("mentor")}
          className={style.button_add}
          src={plus}
          alt="add icon"
        />
        <p
          onClick={() => handleCommentChoice("mentor")}
          className={style.text__comment}
        >
          Комментарий ментора
        </p>
      </div>
      {commentState.mentor && (
        <Textarea
          minRows={3}
          style={{ width: "522px" }}
          className={style.input}
        />
      )}
      {/* Текст с инпутом для комментария сотрудника */}

      <div className={style.button__container}>
        <img
          onClick={() => handleCommentChoice("coworker")}
          className={style.button_add}
          src={plus}
          alt="add icon"
        />
        <p
          onClick={() => handleCommentChoice("coworker")}
          className={style.text__comment}
        >
          Комментарий сотрудника
        </p>
      </div>
      {commentState.coworker && (
        <Textarea
          minRows={3}
          style={{ width: "522px" }}
          className={style.input}
        />
      )}

      {/* Контейнер с данными ментора */}
      <div className={style.mentor__container}>
        <h3 className={style.text}>Ментор</h3>
        <div className={style.text__container}>
          <p onClick={handleOpenEdit} style={{cursor: 'pointer'}} className={style.subtitle}>Выбрать ментора</p>
          <img onClick={handleOpenEdit} className={style.edit__button} src={edit} alt="edit icon" />
        </div>
      </div>

      {/* Календарь */}
      <p className={style.text}>Выполнить до</p>
      <CalendarInput />

      {/* Прикрепление файла */}
      <Attach className={style.attach} />
      <Button style={{ backgroundColor: "black", color: "white" }}>
        Создать
      </Button>
    </section>
    </>

  );
}
