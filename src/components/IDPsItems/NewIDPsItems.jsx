/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@alfalab/core-components-skeleton";
import style from "./IDPsItems.module.css";
import FilterStatus from "../FilterStatus/FilterStatus";
import ButtonSort from "../Buttons/ButtonSort/ButtonSort";
import { fetchGetIdps, idpsCurrent } from "../../store/idpSlice";

export default function IDPsTable({ isPersonalPage }) {
  const dispatch = useDispatch();
  const { idps, loading } = useSelector(idpsCurrent);

  useEffect(() => {
    dispatch(fetchGetIdps());
  }, [dispatch]);

  return (
    <>
      <Skeleton visible={loading}>
        <div className={style.buttonContainer}>
          <div className={style.buttonsSortFilter}>
            {isPersonalPage ? null : ( // На личной странице не отображаем первый Skeleton
              <ButtonSort
                BTitle={"Сотрудник"}
                BSortKey={"date"}
                style={{ display: "block" }}
              />
            )}
            <ButtonSort BTitle={"План развития"} BSortKey={"date"} />
            <ButtonSort BTitle={"Срок завершения"} BSortKey={"date"} />
            <div style={{ display: "inline-block" }}>
              <FilterStatus />
            </div>
          </div>
          <button className={style.btnExport} />
        </div>
      </Skeleton>
      {idps.map((item) => (
        <ul className={style.columnTable} key={item.idp_id}>
          {/* ФИО(ФИ) юзера */}
          {isPersonalPage ? null : ( // На личной странице не отображаем первый Skeleton
            <li className={style.tableElement} style={{ width: "326px" }}>
              <div
                className={style.textContainer}
                style={{ paddingLeft: "36px" }}
              >
                {/*юзер*/}
              </div>
            </li>
          )}

          {/* Название плана */}

          <li
            className={style.tableElement}
            style={{ width: isPersonalPage ? "425px" : "271px" }}
          >
            <div
              className={style.textContainer}
              style={{ paddingLeft: "84px" }}
            >
              {item.name}
            </div>
          </li>

          {/* Дата */}

          <li
            className={style.tableElement}
            style={{ width: isPersonalPage ? "240px" : "151px" }}
          >
            <div
              className={style.textContainer}
              style={{ textAlign: "center", width: "100%" }}
            >
              {item.end_date_plan.slice(0, 10)}
            </div>
          </li>

          {/* Статус выполнения */}

          <li
            className={style.tableElement}
            style={{ width: isPersonalPage ? "247px" : "163px" }}
          >
            <div className={style.statusContainer}>
              <div
                className={style.textContainer}
                style={{ textAlign: "center", width: "100%" }}
              >
                {item.status == "active" ? "В работе" : "Выполнен"}{" "}
                {/* Еще есть статус Просрочен */}
              </div>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
}
