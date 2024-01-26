/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import style from "./IDPsItems.module.css";


// import { Table } from "@alfalab/core-components-table";
// import { Gap } from "@alfalab/core-components-gap";
// import { PickerButton } from '@alfalab/core-components-picker-button';
// import { Typography } from "@alfalab/core-components-typography";
import { Button } from "@alfalab/core-components-button";
import { Skeleton } from "@alfalab/core-components-skeleton";

import { TSortableHeadCell } from "@alfalab/core-components-table/components";
import { Select } from "@alfalab/core-components-select";
import { FilterTag } from "@alfalab/core-components-filter-tag";
import { PickerButton } from "@alfalab/core-components-picker-button";
import { useInView } from "react-intersection-observer";
import FilterStatus from "../FilterStatus/FilterStatus";

export default function IDPsTable() {
  const options = React.useMemo(
  () => [
    { key: '1', content: "Auurum" },
    { key: '2', content: "Bercelium" },
    { key: '3', content: "Curium" },
    { key: '4', content: "Neptunium" },
    { key: '5', content: "Plutonuim" },
  ],
  []
);

  const [sortKey, setSortKey] = useState(undefined);
  const [isSortedDesc, setIsSortedDesc] = useState(undefined);



  const defaultIsSortedDesc = false;

  const handleSort = (key) => {
    setSortKey(key);

    if (isSortedDesc !== undefined) {
      setIsSortedDesc(!isSortedDesc ? undefined : defaultIsSortedDesc);
    } else {
      setIsSortedDesc(!defaultIsSortedDesc);
    }
  };

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

  // Множественный выбор
  const CustomFieldMultiple = ({
    // eslint-disable-next-line react/prop-types, no-unused-vars
    label,
    selected,
    setSelectedItems,
    selectedMultiple,
    innerProps: { ref, ...restInnerProps },
    ...restProps
  }) => {
    const content = selected && selected.content;

    const checkedContent = (
      <span>
        <b >
          {selectedMultiple.length !== 1
            ? `Выбрано: ${selectedMultiple.length}`
            : content}
        </b>
      </span>
    );

    const contentLabel = <span>Статус</span>;

    return (
      <div ref={ref} className={style.filterStatus}>
        <FilterTag
          view={'filled'}
          onClear={() => setSelectedItems([])}
          checked={selected}
          {...restInnerProps}
          {...restProps}
        >
          {selected && contentLabel}
        </FilterTag>
      </div>
    );
  };
  const [selectedUserId, setSelectedUserId] = useState(null);

  const [selectedMultiple, setSelectedMultiple] = React.useState([]);

  const handleChangeMultiple = ({ selectedMultiple }) => {
    setSelectedMultiple(selectedMultiple.map((option) => option.key));
    // Если выбран хотя бы один userId, то берем первый
    const newUserId = selectedMultiple.length > 0 ? parseInt(selectedMultiple[0].key, 10) : null;
    setSelectedUserId(newUserId);
  
    // Перерендерим задачи с учетом нового фильтра
    loadIDPs(1, newUserId);
  };
  
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
      .then((response) => {
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
          <Button
            size="xs"
            style={{
              borderRadius: 99,
              padding: "0 16px 0 16px",
              // marginBottom: 16,
              marginRight: 12,
              backgroundColor: "#E7E8EB",
            }}
            onClick={() => handleSort("date")}
          >
            <TSortableHeadCell
              style={{
                padding: 0,
                border: "none",
                backgroundColor: "transparent",
                textTransform: "none",
                letterSpacing: "normal",
                fontFamily: "Segoe UI", //
                fontSize: "14px", //
                fontStyle: "normal", //
                fontWeight: "400", //
                lineHeight: "20px", //
              }}
              title="Дата"
              defaultIsSortedDesc={defaultIsSortedDesc}
              isSortedDesc={sortKey === "date" ? isSortedDesc : undefined}
              onSort={() => handleSort("date")}
            >
              Сотрудник
            </TSortableHeadCell>
          </Button>
          <Button
            size="xs"
            style={{
              borderRadius: 99,
              padding: "0 16px 0 16px",

              // marginBottom: 16,
              marginRight: 12,
              backgroundColor: "#E7E8EB",
            }}
            onClick={() => handleSort("date")}
          >
            <TSortableHeadCell
              style={{
                padding: 0,
                border: "none",
                backgroundColor: "transparent",
                textTransform: "none",
                letterSpacing: "normal",
                fontFamily: "Segoe UI", 
                fontSize: "14px", 
                fontStyle: "normal", 
                fontWeight: "400", 
                lineHeight: "20px", 
              }}
              title="Дата"
              defaultIsSortedDesc={defaultIsSortedDesc}
              isSortedDesc={sortKey === "date" ? isSortedDesc : undefined}
              onSort={() => handleSort("date")}
            >
              План развития
            </TSortableHeadCell>
          </Button>
          <Button
            size="xs"
            style={{
              padding: "0 16px 0 16px",

              borderRadius: 99,
              // marginBottom: 16,
            }}
            onClick={() => handleSort("title")}
          >
            <TSortableHeadCell
              style={{
                padding: 0,
                border: "none",
                backgroundColor: "transparent",
                textTransform: "none",
                letterSpacing: "normal",
                fontFamily: "Segoe UI",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "20px",
              }}
              title="Срок завершения"
              defaultIsSortedDesc={defaultIsSortedDesc}
              isSortedDesc={sortKey === "title" ? isSortedDesc : undefined}
              onSort={() => handleSort("title")}
            >
              Срок завершения
            </TSortableHeadCell>
          </Button>
          <div style={{ display: "inline-block" }}>
            {/* <Select
              allowUnselect={true}
              popoverPosition="bottom-start"
              options={options}
              Field={CustomFieldMultiple}
              onChange={handleChangeMultiple}
              selected={selectedMultiple}
              multiple={true}
              
              fieldProps={{ 
                size: "xs",
                marginLeft: '16px',
                

              }}
            /> */}
          <FilterStatus />
          </div>
        </div>
        <button className={style.btnExport} />
      </div>

      <section>
        {data.map((item) => (
          <ul className={style.columnTable} key={item.id} ref={ref} >
            <Skeleton visible={skeleton}>
              <li className={style.tableElement}>
                <div className={style.textContainer}>{item.title}</div>
              </li>
            </Skeleton>

            <Skeleton visible={skeleton}>
              <li className={style.tableElement}>
                <div className={style.textContainer}>{item.body}</div>
              </li>
            </Skeleton>

            <Skeleton visible={skeleton}>
              <li className={style.tableElement}>
                <div className={style.textContainer}>{item.id}</div>
              </li>
            </Skeleton>
            
            <Skeleton visible={skeleton} >
              <li  className={style.tableElement}>
                <div className={style.textContainer}>{item.userId}</div>
              </li>
            </Skeleton>
            
          </ul>
        ))}
      </section>
    </>
  );
}
