import style from "./NewIDP.module.css";
import { Input } from "@alfalab/core-components-input";
import CommentInput from "../CreateTask/CommentInput/CommentInput";
import EditWorker from "../CreateTask/EditWorker/EditWorker";
import Popup from "../Popup/Popup";
import { useDispatch, useSelector } from "react-redux";
import { openPopup } from "../../store/popupSlice";
import { Button } from "@alfalab/core-components-button";
import PropTypes from "prop-types";
import PetalsList from "../PetalsList/PetalsList";
import { ProgressBar } from "@alfalab/core-components-progress-bar";
import IDPsTableItems from "../IDPsTableItems/IDPsTableItems";
import { Link } from "react-router-dom";
import { fetchGetIdps, idpsCurrent } from "../../store/idpSlice";
import { useEffect } from "react";
import { Skeleton } from "@alfalab/core-components-skeleton";
import { getCounts } from "../../utils/getCounts";

export default function NewIDP({ title }) {
  const dispatch = useDispatch();

  function handleOpenPopup() {
    dispatch(openPopup());
  }

  useEffect(() => {
    dispatch(fetchGetIdps());
  }, [dispatch]);

  const { idps, loading } = useSelector(idpsCurrent);

  const { activeCount, overdueCount, completedCount } = getCounts(idps);

  return (
    <>
      <Popup
        title="Сотрудник"
        buttonText="Сохранить"
        cancelButtonText="Отмена"
      />

      <section className={style.container}>
        <h2 className={style.title}>{title ? title : "Новая задача"}</h2>
        <p className={style.subtitle}>до 19.10.2024</p>
        <ProgressBar className={style.progressBar} value={80} />
        <p
          style={{ marginBottom: "4px", fontSize: "var(--fz-text)" }}
          className={style.subtitle}
        >
          Название *
        </p>
        <Input className={style.input} labelView="inner" label="" />
        <div style={{ marginBottom: "7px" }}>
          <CommentInput title="Добавить описание" />
        </div>
        <EditWorker handleOpenEdit={handleOpenPopup} text="Сотрудник" />
        <div className={style.container__worker}>
          <span className={style.text}>Сотрудник</span>
          <span style={{ marginTop: "0px" }} className={style.subtitle}>
            Сотрудник
          </span>
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
        <Skeleton visible={loading} className={style.skeleton}>
          <PetalsList
            total={idps.length}
            active={activeCount}
            completed={completedCount}
            overdue={overdueCount}
          />
        </Skeleton>
        <div className={style.task__items}>
          <Skeleton visible={loading}>
            <IDPsTableItems idps={idps} />
          </Skeleton>
        </div>
      </section>
    </>
  );
}

NewIDP.propTypes = {
  title: PropTypes.string,
};
