import { Attach } from "@alfalab/core-components-attach";
import style from "./CreateTask.module.css";
import { Button } from "@alfalab/core-components-button";
import { UniversalDateInput } from "@alfalab/core-components-universal-date-input";
import { Input } from "@alfalab/core-components-input";
import plus from "../../images/Добавить.svg";

export default function CreateTask() {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Новая задача</h2>
      <Input
        placeholder="Название задачи"
        block={true}
        className={style.input}
      />
      <Input
        placeholder="Описание задачи"
        block={true}
        className={style.input}
      />

      <div className={style.button__container}>
        <img className={style.button_add} src={plus} alt="add icon" />
        <p className={style.text}>Комментарий руководителя</p>
      </div>
      <div className={style.button__container}>
        <img className={style.button_add} src={plus} alt="add icon" />
        <p className={style.text}>Комментарий ментора</p>
      </div>
      <div className={style.button__container}>
        <img className={style.button_add} src={plus} alt="add icon" />
        <p className={style.text}>Комментарий сотрудника</p>
      </div>
      <div className={style.mentor__container}>
        <h3 className={style.text}>Ментор</h3>
        <p className={style.subtitle}>Яна Лапкина</p>
      </div>

      <p className={style.text}>Выполнить до</p>
      <UniversalDateInput
        block={true}
        view="date"
        label="Дата"
        size="m"
        clear={true}
      />
      <Attach />
      <Button>Создать</Button>
    </section>
  );
}
