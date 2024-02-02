import { useDispatch, useSelector } from "react-redux";

import style from "./IDP.module.css";
import TaskProgress from "../Progress/Progress";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import { Input } from "@alfalab/core-components-input";
import CommentInput from "../CreateTask/CommentInput/CommentInput";
import EditWorker from "../CreateTask/EditWorker/EditWorker";
import { Skeleton } from "@alfalab/core-components-skeleton";
import { openPopup1 } from "../../store/actions/popup1Actions";
import Popup from "../Popup/Popup";

export default function IDP() {
  const dispatch = useDispatch();

  const popup1IsOpen = useSelector((state) => state.popup1.isOpen);

  // Деструктуризация с проверкой наличия end_date_plan
  const { end_date_plan, start_date, name } = idp || {};

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
      <LeftNavBar />
      <section className={style.container}>
        <h1 className={style.title}>План развития</h1>
        <div className={style.info}>
          <div className={style.infoDate}>
            <Skeleton visible={loading}>
              <p className={style.subtitle}>до {end_date_plan?.slice(0, 10)}</p>
            </Skeleton>
            <Skeleton visible={loading}>
              <TaskProgress
                end_date_plan={end_date_plan}
                start_date={start_date}
              />
            </Skeleton>
          </div>

          <div className={style.planName}>
            <p className={style.name}>Название</p>
            <Skeleton visible={loading}>
              <Input
                className={style.input}
                labelView="inner"
                label=""
                value={name}
              />
            </Skeleton>
          </div>
          <CommentInput title="Добавить описание" />
          <div className={style.employee}>
            <EditWorker
              handleOpenEdit={() => dispatch(openPopup1())}
              text="Сотрудник"
            />
            <div className={style.container__worker}>
              <p className={style.userName}>Константин Константинопольский</p>
              <p className={style.post}>JS разработчик</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
