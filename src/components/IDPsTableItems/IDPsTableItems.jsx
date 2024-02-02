import style from "./IDPsTableItems.module.css";
import { Skeleton } from "@alfalab/core-components-skeleton";
import StatusTable from "../StatusTable/StatusTable";
import IDPsButtonsContainer from "../IDPsButtonsContainer/IDPsButtonsContainer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  useGetIdpPrivateQuery,
  useGetIdpEmployeeQuery,
} from "../../store/api/idpApi";
import { useEffect, useState } from "react";

export default function IDPsTableItems({ isPersonalPage }) {
  const [page, setPage] = useState(1);

  const dataQuery = isPersonalPage
    ? useGetIdpPrivateQuery
    : useGetIdpEmployeeQuery;

  const { data, isFetching, isLoading } = dataQuery(page);

  const dataResult = data?.results ?? [];

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

  return (
    <>
      {!dataResult ? (
        <p></p>
      ) : (
        <>
          <IDPsButtonsContainer
            dataItem={Boolean(!isLoading && data)}
            isPersonalPage={isPersonalPage}
          />
          <div className={style.idpsConrainer}>
            {!isLoading &&
              dataResult.map((item) => (
                <Skeleton visible={isLoading} key={item.idp_id}>
                  <Link
                    className={style.link}
                    key={item.idp_id}
                    to={`/idp/${item.idp_id}`}
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
                      ) : null}

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
                          {item.end_date_plan.slice(0, 10)}
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
