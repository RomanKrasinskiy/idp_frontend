import style from "./IDPsTableItems.module.css";
import { Skeleton } from "@alfalab/core-components-skeleton";
import StatusTable from "../StatusTable/StatusTable";
import IDPsButtonsContainer from "../IDPsButtonsContainer/IDPsButtonsContainer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import NoData from "../NoData/NoData";

export default function IDPsTableItems({
  data,
  isLoading,
  isFetching,
  page,
  setPage,
  isPersonalPage,
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
      ) : data.detail ? (
        <NoData text={data.detail} />
      ) : (
        <>
          <IDPsButtonsContainer
            dataItem={Boolean(!isLoading && data)}
            isPersonalPage={isPersonalPage}
          />
          <div className={style.idpsConrainer}>
            {!isLoading &&
              data.results.map((item) => (
                <Skeleton visible={isLoading} key={item.idp_id}>
                  <Link
                    className={style.link}
                    key={item.idp_id}
                    to={`/idp/${item.idp_id}/${item.employee.last_name}/${item.employee.first_name}`}
                  >
                    <ul className={style.columnTable} key={item.idp_id}>
                      {/* ФИО(ФИ) юзера */}
                      {isPersonalPage ? (
                        <li
                          className={style.tableElement}
                          style={{ width: "298px" }}
                        >
                          <div
                            className={style.textContainer}
                            style={{ paddingLeft: "36px" }}
                          >
                            {`${item.employee.last_name} ${item.employee.first_name}`}
                          </div>
                        </li>
                      ) : (
                        <li
                          className={style.tableElement}
                          style={{ width: "298px" }}
                        >
                          <div
                            className={style.textContainer}
                            style={{ paddingLeft: "36px" }}
                          >
                            {`${item.employee.last_name} ${item.employee.first_name}`}
                          </div>
                        </li>
                      )}

                      {/* Название плана */}
                      <li
                        className={style.tableElement}
                        style={{ width: isPersonalPage ? "298px" : "425px" }}
                      >
                        <div
                          className={style.textContainer}
                          style={{ paddingLeft: "64px" }}
                        >
                          {item.name}
                        </div>
                      </li>

                      {/* Дата */}
                      <li
                        className={style.tableElement}
                        style={{ width: isPersonalPage ? "151px" : "240px" }}
                      >
                        <div
                          className={style.textContainer}
                          style={{
                            paddingLeft: isPersonalPage ? "66px" : "126px",
                          }}
                        >
                          {formatDate(item.end_date_plan)}
                        </div>
                      </li>

                      {/* Статус выполнения */}
                      <li
                        className={style.tableElement}
                        style={{ width: isPersonalPage ? "163px" : "247px" }}
                      >
                        <StatusTable
                          isPersonalPage={isPersonalPage}
                          title={item.status}
                        />
                      </li>
                    </ul>
                  </Link>
                </Skeleton>
              ))}
          </div>
        </>
      )}
    </>
  );
}
IDPsTableItems.propTypes = {
  isPersonalPage: PropTypes.bool,
};
