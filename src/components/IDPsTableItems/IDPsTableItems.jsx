import style from "./IDPsTableItems.module.css";
import { Skeleton } from "@alfalab/core-components-skeleton";
import StatusTable from "../StatusTable/StatusTable";
import IDPsButtonsContainer from "../IDPsButtonsContainer/IDPsButtonsContainer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useGetIdpEmployeeQuery } from "../../store/api/idpApi";
// import { useSelector } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
// import { useInView } from "react-intersection-observer";

export default function IDPsTableItems({ isPersonalPage }) {
  // const [page, setPage] = useState(1);

  // const observerRef = useRef(null);

  // const onScrollOrResize = useCallback(([entry]) => {
  //   if (entry.isIntersecting) {
  //     setPage((prevPage) => prevPage + 1);
  //     console.log(page)
  //   }
  // }, []);


  // useEffect(() => {
  //   const lastElement = document.querySelector(`.${style.columnTable}:last-child`);
  //   observerRef.current = new IntersectionObserver(onScrollOrResize, {
  //     threshold: 0.5,
  //   });

  //   if (lastElement) {
  //     observerRef.current.observe(lastElement);
  //     onScrollOrResize();
  //   }

  //   return () => {
  //     if (lastElement) {
  //       observerRef.current.unobserve(lastElement);
  //     }
  //   };
  // }, [onScrollOrResize]);
  
  //   console.log(isPersonalPage);

    



//   const [page, setPage] = useState(1)
//   const nextPage = useRef(1);
//   const selectedUserId = null;
//   // const page = useRef(1);
//   const {
//     data,
//     isLoading,
//     isFetching,
//     refetch, // Функция для повторного запроса
//   } = useGetIdpEmployeeQuery({ page, userId: selectedUserId });

//   const { ref, inView } = useInView({
//     threshold: 1,
//     triggerOnce: true,
//   });

//  useEffect(() => {
//     const lastElement = document.querySelector(
//       `.${style.columnTable}:last-child`
//     );
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           refetch(nextPage.current);
//         }
//       },
//       { threshold: 0.5 }
//     );
//     if (lastElement) {
//       observer.observe(lastElement);
//     }
//     return () => {
//       if (lastElement) {
//         observer.unobserve(lastElement);
//       }
//     };
//   }, [data]);

const [page, setPage] = useState(1);
  const { data, isFetching, isLoading } = useGetIdpEmployeeQuery(page);
  const dataResult = data?.results ?? [];

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);



  return (
    <>
    {!data ? <p></p> : (
      <>
      <IDPsButtonsContainer dataItem={!isLoading && data} isPersonalPage={isPersonalPage} />
      <div className={style.idpsConrainer}>
        {!isLoading && dataResult.map((item) => (
          <Skeleton visible={isLoading} key={item.idp_id}>
            <Link
              className={style.link}
              key={item.idp_id}
              to={`/idp/${item.idp_id}`}
            >
              <ul className={style.columnTable} key={item.idp_id}>
                {/* ФИО(ФИ) юзера */}
                {isPersonalPage ? (
                  <li className={style.tableElement} style={{ width: "298px" }}>
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
                    // style={{ textAlign: "center", width: "100%" }}
                    style={{ paddingLeft: isPersonalPage ? '66px' : "126px" }}
                  >
                    {item.end_date_plan.slice(0, 10)}
                  </div>
                </li>

                {/* Статус выполнения */}
                <li
                  className={style.tableElement}
                  style={{ width: isPersonalPage ? "163px" : "247px",
                    
                
               }}
                >
                  <StatusTable
                    isPersonalPage={isPersonalPage}
                    title={item.status}
                  />
                  {/* Еще есть статус Просрочен */}
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
