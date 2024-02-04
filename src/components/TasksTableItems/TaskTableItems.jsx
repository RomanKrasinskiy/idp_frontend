import style from "./TaskTableItems.module.css";
import { Skeleton } from "@alfalab/core-components-skeleton";
import StatusTable from "../StatusTable/StatusTable";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import NoData from "../NoData/NoData";
import Petals from "../Petals/Petals";
import PetalsList from "../PetalsList/PetalsList";

export default function TaskTableItems({
  data,
  isLoading,
  isFetching,
  page,
  setPage,
  idp_id
}) {

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setPage((prevPage) => prevPage + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("ru-RU", options);
  };
  return (
    <>
      {!data ? (
        <NoData text="У вас нет задач" />
      ) : 
        <>
        <PetalsList />
          <div className={style.idpsConrainer}>
            {!isLoading &&
              data.map((item) => (
                <Skeleton visible={isLoading} key={item.task_id}>
                  <Link
                    className={style.link}
                    key={item.task_id}
                    to={`/${idp_id}/${item.task_id}`}
                  >
                    <ul className={style.columnTable} key={item.task_id}>
                      {/* Название задачи */}
                      <li
                        className={style.tableElement}
                        style={{ width:"298px"}}
                      >
                        <div
                          className={style.textContainer}
                          style={{ paddingLeft: "20px" }}
                        >
                          {item.task_name}
                        </div>
                      </li>

                      {/* Дата */}
                      <li
                        className={style.tableElement}
                        style={{ width:"240px" }}
                      >
                        <div
                          className={style.textContainer}
                          style={{
                            paddingLeft:"66px"
                          }}
                        >
                          {formatDate(item.task_end_date_plan)}
                        </div>
                      </li>

                      {/* Статус выполнения */}
                      <li
                        className={style.tableElement}
                        style={{ width:"163px"}}
                      >
                        <StatusTable
                          isPersonalPage={true}
                          title={item.task_status}
                        />
                      </li>
                    </ul>
                  </Link>
                </Skeleton>
              ))}
          </div>
        </>
      }
    </>
  );
}

TaskTableItems.propTypes = {
  isPersonalPage: PropTypes.bool,
};
