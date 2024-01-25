import React from "react";
import style from "./IDPsItems.module.css";

// import { Table } from "@alfalab/core-components-table";
// import { Gap } from "@alfalab/core-components-gap";
// import { PickerButton } from '@alfalab/core-components-picker-button';
// import { Typography } from "@alfalab/core-components-typography";
import { Button } from "@alfalab/core-components-button";

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
            <li className={style.tableElement}>
              <div className={style.textContainer}>{item.title}</div>
            </li>
            <li className={style.tableElement}>
              <div className={style.textContainer}>{item.subtitle}</div>
            </li>
            <li className={style.tableElement}>
              <div className={style.textContainer}>{item.date}</div>
            </li>
            <li className={style.tableElement}>
              <div className={style.textContainer}>Статус</div>
            </li>
          </ul>
        ))}
      </section>
    </>
  );
}
