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
import PetalsList from "../PetalsList/PetalsList";
import IDPsTableItems from "../IDPsTableItems/IDPsTableItems";
import { useParams } from "react-router-dom";
import { useGetIdpByIdQuery } from "../../store/api/idpApi";
import TaskTableItems from "../TasksTableItems/TaskTableItems";
import { useState } from "react";

export default function IDP() {
  const [value, setValue] = useState({
    idpComment: ''
  });

  const onChange = (name,value) => {
    setValue((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();
  const { idpId, last_name, first_name } = useParams();

  const { data, isLoading } = useGetIdpByIdQuery(idpId);
  console.log(data)

  const popup1IsOpen = useSelector((state) => state.popup1.isOpen);

  // Деструктуризация с проверкой наличия end_date_plan
  const { end_date_plan, start_date, name } = data || {};

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
      {isLoading ? (
        <Skeleton></Skeleton>
      ) : (
        <>
          <LeftNavBar />
          <section className={style.container}>
            <h1 className={style.title}>{data.name}</h1>
            <div className={style.info}>
              <div className={style.infoDate}>
                <Skeleton visible={isLoading}>
                  <p className={style.subtitle}>
                    до {end_date_plan?.slice(0, 10)}
                  </p>
                </Skeleton>
                <Skeleton visible={isLoading}>
                  <TaskProgress
                    end_date_plan={end_date_plan}
                    start_date={start_date}
                  />
                </Skeleton>
              </div>

              <div className={style.planName}>
                <p className={style.name}>Название</p>
                <Skeleton visible={isLoading}>
                  <Input
                    className={style.input}
                    labelView="inner"
                    label=""
                    value={data.name}
                  />
                </Skeleton>
              </div>
              <CommentInput
                name='idpComment'
                onChange={onChange}
                value={value.idpComment}
                title="Добавить описание"
              />
              <div className={style.employee}>
                <EditWorker
                  handleOpenEdit={() => dispatch(openPopup1())}
                  text="Сотрудник"
                />
                <div style={{marginBottom:'20px'}} className={style.container__worker}>
                  <p className={style.userName}>
                    {first_name} {last_name}
                  </p>
                  <p className={style.post}>JS разработчик</p>
                </div>
              </div>
            </div>
            <TaskTableItems idp_id={idpId} data={data.tasks} />
          </section>
        </>
      )}
    </>
  );
}
