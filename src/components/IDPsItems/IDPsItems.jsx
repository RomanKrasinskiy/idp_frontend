/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import style from "./IDPsItems.module.css";

// import { Table } from "@alfalab/core-components-table";
// import { Gap } from "@alfalab/core-components-gap";
// import { PickerButton } from '@alfalab/core-components-picker-button';
// import { Typography } from "@alfalab/core-components-typography";
import { Button } from "@alfalab/core-components-button";
import { Skeleton } from "@alfalab/core-components-skeleton";
import { useInView } from "react-intersection-observer";
import FilterStatus from "../FilterStatus/FilterStatus";
import ButtonSort from "../Buttons/ButtonSort/ButtonSort";

export default function IDPsTable() {
 
  // const handleSort = (key) => {
  //   setSortKey(key);

  //   if (isSortedDesc !== undefined) {
  //     setIsSortedDesc(!isSortedDesc ? undefined : defaultIsSortedDesc);
  //   } else {
  //     setIsSortedDesc(!defaultIsSortedDesc);
  //   }
  // };

  // const sortedData = React.useMemo(() => {
  //   if (!sortKey || isSortedDesc === undefined) return newdata;

  //   return [...newdata].sort((a, b) => {
  //     if (sortKey === "sum") {
  //       return isSortedDesc ? b.sum - a.sum : a.sum - b.sum;
  //     }
  //     if (sortKey === "date") {
  //       return isSortedDesc
  //         ? b.date.localeCompare(a.date)
  //         : a.date.localeCompare(b.date);
  //     }
  //     if (sortKey === "title") {
  //       return isSortedDesc
  //         ? a.title.localeCompare(b.title)
  //         : b.title.localeCompare(a.title);
  //     }
  //   });
  // }, [newdata, isSortedDesc, sortKey]);

  const [selectedUserId, setSelectedUserId] = useState(null);


  // const handleChangeMultiple = ({ selectedMultiple }) => {
  //   setSelectedMultiple(selectedMultiple.map((option) => option.key));
  //   // Если выбран хотя бы один userId, то берем первый
  //   const newUserId = selectedMultiple.length > 0 ? parseInt(selectedMultiple[0].key, 10) : null;
  //   setSelectedUserId(newUserId);
  
  //   // Перерендерим задачи с учетом нового фильтра
  //   loadIDPs(1, newUserId);
  // };
  
  const nextPage = useRef(1);
  const [data, setData] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  // const [isLoading, setIsLoading] = useState(false); // Новое состояние

  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const loadIDPs = (page = 1, userId = null) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}${userId ? `&userId=${userId}` : ''}`)
    // fetch('https://51.250.70.185:8000/api/v1/idp', {
    //   method: 'GET', // или другой HTTP метод
    //   mode: 'cors', // важно установить режим CORS
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // Другие необходимые заголовки
    //   }
    // })
    .then((response) => {
      console.log(response)
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
    loadIDPs(1, selectedUserId);
  }, [selectedUserId]); // Пустой массив зависимостей гарантирует выполнение эффекта только при монтировании

  useEffect(() => {
    if (inView) {
      loadIDPs(nextPage.current, selectedUserId);
    }
  }, [inView, selectedUserId]); // Добавлено состояние isLoading в зависимости

  useEffect(() => {
    const lastElement = document.querySelector(`.${style.columnTable}:last-child`);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadIDPs(nextPage.current);
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

  return (
    <>
      <div className={style.buttonConteiner}>
        <div className={style.buttonsSortFilter}>
          <ButtonSort BTitle={'Сотрудник'} BSortKey={'date'}/> 
          <ButtonSort BTitle={'План развития'} BSortKey={'date'}/> 
          <ButtonSort BTitle={'Срок завершения'} BSortKey={'date'}/> 
          <div style={{ display: "inline-block" }}>
            <FilterStatus />
          </div>
        </div>
        <button className={style.btnExport} />
      </div>

      <section>
  {data.map((item) => (
    <ul className={style.columnTable} key={item.id} ref={ref}>
      <Skeleton visible={skeleton}>
        <li className={style.tableElement} style={{ width: '326px'}}>
          <div className={style.textContainer} style={{paddingLeft: '36px'}}>{item.title}</div>
        </li>
      </Skeleton>
      <Skeleton visible={skeleton}>
        <li className={style.tableElement} style={{ width: '271px'}}>
          <div className={style.textContainer} style={{ paddingLeft: '84px'}}>{item.body}</div>
        </li>
      </Skeleton>
      <Skeleton visible={skeleton}>
        <li className={style.tableElement} style={{ width: '151px' }}>
          <div className={style.textContainer} style={{ textAlign: 'center', width: '100%'}}>{item.id}</div>
        </li>
      </Skeleton>
      <Skeleton visible={skeleton}>
        <li className={style.tableElement} style={{ width: '163px' }}>
          <div className={style.textContainer} style={{ textAlign: 'center', width: '100%'}}>{item.userId}</div>
        </li>
      </Skeleton>
    </ul>
  ))}
</section>
    </>
  );
}
