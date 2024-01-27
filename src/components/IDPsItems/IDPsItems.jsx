import React from "react";
import style from "./IDPsItems.module.css";


// import { Table } from "@alfalab/core-components-table";
// import { Gap } from "@alfalab/core-components-gap";
// import { PickerButton } from '@alfalab/core-components-picker-button';
// import { Typography } from "@alfalab/core-components-typography";
import { Button } from "@alfalab/core-components-button";
import { Skeleton } from "@alfalab/core-components-skeleton";

import { TSortableHeadCell } from "@alfalab/core-components-table/components";

export default function IDPsTable() {
  const newdata = [
    {
      id: 1,
      date: "27.06.2022",
      title: "ежз",
      subtitle: "Услуги по ремонту за июнь, НДС не облагается",
      sum: 21000000,
    },
    {
      id: 2,
      date: "28.06.2022",
      title: "деж",
      subtitle:
        "Оказание услуг по договору № 26/09 на основании акта № 1450 от 30 июня 2020 года, в т.ч. НДС 18%",
      sum: 10002030,
    },
    {
      id: 3,
      date: "29.06.2022",
      title: "где",
      sum: 3000069,
    },
    {
      id: 4,
      date: "30.06.2022",
      title: "вгд",
      sum: 42130000,
    },
    {
      id: 5,
      date: "30.06.2022",
      title:
        "бвгffffffffffffffffffffffffffffffffffffffffffffапрррррррррррррррррррррррррррff",
      sum: 42130000,
    },
    {
      id: 6,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 7,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 8,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 9,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 10,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 11,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 12,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 13,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 14,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 15,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 16,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },

    {
      id: 17,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 18,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 19,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 20,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 21,
      date: "30.06.2022",
      title:
        "бвгffffffffffffffffffffffffffffffffffffffffffffапрррррррррррррррррррррррррррff",
      sum: 42130000,
    },
    {
      id: 22,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 23,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 24,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 25,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 26,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 27,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 28,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 29,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 30,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 31,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 32,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },

    {
      id: 33,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 34,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 35,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },
    {
      id: 36,
      date: "30.06.2022",
      title: "абв",
      sum: "",
    },

  ];

  const [sortKey, setSortKey] = React.useState(undefined);
  const [isSortedDesc, setIsSortedDesc] = React.useState(undefined);

  const defaultIsSortedDesc = false;

  const handleSort = (key) => {
    setSortKey(key);

    if (isSortedDesc !== undefined) {
      setIsSortedDesc(!isSortedDesc ? undefined : defaultIsSortedDesc);
    } else {
      setIsSortedDesc(!defaultIsSortedDesc);
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortKey || isSortedDesc === undefined) return newdata;

    return [...newdata].sort((a, b) => {
      if (sortKey === "sum") {
        return isSortedDesc ? b.sum - a.sum : a.sum - b.sum;
      }
      if (sortKey === "date") {
        return isSortedDesc
          ? b.date.localeCompare(a.date)
          : a.date.localeCompare(b.date);
      }
      if (sortKey === "title") {
        return isSortedDesc
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      }
    });
  }, [newdata, isSortedDesc, sortKey]);
  return (
    <>
      <div className={style.buttonConteiner}>
        <div className={style.buttonsSortFilter}>
          <Button
            size="xs"
            style={{
              borderRadius: 16,

              // marginBottom: 16,
              marginRight: 12,
              backgroundColor: "#E9EAEA",
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
              borderRadius: 16,

              // marginBottom: 16,
              marginRight: 12,
              backgroundColor: "#E9EAEA",
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
              План развития
            </TSortableHeadCell>
          </Button>
          <Button
            size="xs"
            style={{
              borderRadius: 16,
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
        </div>
        <button className={style.btnExport} />
      </div>

      <section>
        {sortedData.map((item) => (
          <ul className={style.columnTable} key={item.id}>
            <Skeleton visible={false}>
              <li className={style.tableElement}>
                <div className={style.textContainer}>{item.title}</div>
              </li>
            </Skeleton>

            <Skeleton visible={false}>
              <li className={style.tableElement}>
                <div className={style.textContainer}>{item.subtitle}</div>
              </li>
            </Skeleton>

            <Skeleton visible={false}>
              <li className={style.tableElement}>
                <div className={style.textContainer}>{item.date}</div>
              </li>
            </Skeleton>

            <Skeleton visible={false}>
              <li className={style.tableElement}>
                <div className={style.textContainer}>Статус</div>
              </li>
            </Skeleton>
          </ul>
        ))}
      </section>
    </>
  );
}
