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
import { useParams } from "react-router-dom";
import { useGetIdpByIdQuery } from "../../store/api/idpApi";
import TaskTableItems from "../TasksTableItems/TaskTableItems";
import { useState } from "react";

export default function IDP() {
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
  const { idpId, last_name, first_name } = useParams();

  const { data, isLoading } = useGetIdpByIdQuery(idpId);
  console.log(data);

  const popup1IsOpen = useSelector((state) => state.popup1.isOpen);

  // Деструктуризация с проверкой наличия end_date_plan
  const { end_date_plan } = data || {};

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
            <h1 className={style.title}>План развития</h1>
            <div className={style.info}>
              <div className={style.infoDate}>
                <Skeleton visible={isLoading}>
                  <p className={style.subtitle}>
                    до {end_date_plan?.slice(0, 10)}
                  </p>
                </Skeleton>
                <Skeleton visible={isLoading}>
                  <TaskProgress
                    end_date_plan={"2024-03-05T15:10:54Z"}
                    start_date={"2024-03-05T15:10:54Z"}
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
                name="idpComment"
                onChange={onChange}
                value={value.idpComment}
                title="Добавить описание"
              />
              <div className={style.employee}>
                <EditWorker
                  handleOpenEdit={() => dispatch(openPopup1())}
                  text="Руководитель"
                />
                <div
                  style={{ marginBottom: "20px" }}
                  className={style.container__worker}
                >
                  <p className={style.userName}>
                    {first_name} {last_name}
                  </p>
                  <p className={style.post}>Руководитель разработки</p>
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
