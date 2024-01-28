/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import style from "./IDPsItems.module.css";

import { Skeleton } from "@alfalab/core-components-skeleton";
import { useInView } from "react-intersection-observer";
import FilterStatus from "../FilterStatus/FilterStatus";
import ButtonSort from "../Buttons/ButtonSort/ButtonSort";
import NoData from "../NoData/NoData";

export default function IDPsTable({ isPersonalPage }) {
  let selectedUserId = null;
  const nextPage = useRef(1);
  const [data, setData] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  // const [isLoading, setIsLoading] = useState(false); // Новое состояние
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const loadIDPsItems = (page = 1, userId = null) => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}${
        userId ? `&userId=${userId}` : ""
      }`
    )
      // fetch('https://51.250.70.185:8000/api/v1/idp', {
      //   method: 'GET', // или другой HTTP метод
      //   mode: 'cors', // важно установить режим CORS
      //   headers: {
      //     'Content-Type': 'application/json',
      //     // Другие необходимые заголовки
      //   }
      // })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((newData) => {
        if (newData.length === 0) {
          return;
        }
        setData(newData); // Заменяем текущие данные новыми данными
        setSkeleton(false);
        nextPage.current += 1;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setSkeleton(false);
      });
  };

  useEffect(() => {
    // Запрос данных при загрузке страницы
    loadIDPsItems(1, selectedUserId);
  }, [selectedUserId]); // Пустой массив зависимостей гарантирует выполнение эффекта только при монтировании

  useEffect(() => {
    if (inView) {
      loadIDPsItems(nextPage.current, selectedUserId);
    }
  }, [inView, selectedUserId]); // Добавлено состояние isLoading в зависимости

  useEffect(() => {
    const lastElement = document.querySelector(
      `.${style.columnTable}:last-child`
    );
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadIDPsItems(nextPage.current);
        }
      },
      { threshold: 0 }
    );

    if (lastElement) {
      observer.observe(lastElement);
    }

    return () => {
      if (lastElement) {
        observer.unobserve(lastElement);
      }
    };
  }, [data]);

    let isDeadlineClose = true;

  return (
    <>
      {data.length === 0 ? (
        <NoData />
      ) : (
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
      )}

      {data.map((item) => (
        <ul className={style.columnTable} key={item.id} ref={ref}>
          {/* ФИО(ФИ) юзера */}
          {isPersonalPage ? null : ( // На личной странице не отображаем первый Skeleton
            <Skeleton visible={skeleton}>
              <li className={style.tableElement} style={{ width: "326px" }}>
                <div
                  className={style.textContainer}
                  style={{ paddingLeft: "36px" }}
                >
                  {item.title}
                </div>
              </li>
            </Skeleton>
          )}

          {/* Название плана */}
          <Skeleton visible={skeleton}>
            <li
              className={style.tableElement}
              style={{ width: isPersonalPage ? "425px" : "271px" }}
            >
              <div
                className={style.textContainer}
                style={{ paddingLeft: "84px" }}
              >
                {item.body}
              </div>
            </li>
          </Skeleton>

          {/* Дата */}
          <Skeleton visible={skeleton}>
            <li
              className={style.tableElement}
              style={{ width: isPersonalPage ? "240px" : "151px" }}
            >
              <div
                className={style.textContainer}
                style={{ textAlign: "center", width: "100%" }}
              >
                {item.id}
              </div>
            </li>
          </Skeleton>

          {/* Статус выполнения */}
          <Skeleton visible={skeleton}>
            <li
              className={style.tableElement}
              style={{ width: isPersonalPage ? "247px" : "163px" }}
            >
              <div className={style.statusContainer}>
                {isDeadlineClose 
                ? (<div className={style.status} />) 
                : null}
              
                <div
                  className={style.textContainer}
                  style={{ textAlign: "center", width: "100%" }}
                >
                  {item.title}
                </div>
              </div>
            </li>
          </Skeleton>
        </ul>
      ))}
    </>
  );
}
