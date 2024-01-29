import { useEffect, useRef, useState } from "react";
import style from "./IDPsTableItems.module.css";

import { Skeleton } from "@alfalab/core-components-skeleton";
import { useInView } from "react-intersection-observer";
import StatusTable from "../StatusTable/StatusTable";
import IDPsButtonsContainer from "../IDPsButtonsContainer/IDPsButtonsContainer";
import PropTypes from "prop-types";

export default function IDPsTableItems({ isPersonalPage }) {
  let selectedUserId = null;
  const nextPage = useRef(1);
  const [data, setData] = useState([]);
  const [skeleton, setSkeleton] = useState(true);

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
      // fetch('https://localhost:8000/api/v1/idp', {
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
        setData([...data, ...newData]); // Заменяем текущие данные новыми данными
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
  }, [inView, selectedUserId]);

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
      { threshold: 0.5 }
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

  return (
    <>
      <IDPsButtonsContainer dataItem={data} isPersonalPage={isPersonalPage} />

      {data.map((item) => (
        <ul className={style.columnTable} key={item.id} ref={ref}>
          {/* ФИО(ФИ) юзера */}
          {isPersonalPage ? (
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
          ) : null}

          {/* Название плана */}
          <Skeleton visible={skeleton}>
            <li
              className={style.tableElement}
              style={{ width: isPersonalPage ? "271px" : "425px" }}
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
              style={{ width: isPersonalPage ? "151px" : "240px" }}
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
              style={{ width: isPersonalPage ? "163px" : "247px" }}
            >
              <StatusTable title={item.title} />
            </li>
          </Skeleton>
        </ul>
      ))}
    </>
  );
}
IDPsTableItems.propTypes = {
  isPersonalPage: PropTypes.bool,
};
