import style from "./IDPsTableItems.module.css";
import { Skeleton } from "@alfalab/core-components-skeleton";
import StatusTable from "../StatusTable/StatusTable";
import IDPsButtonsContainer from "../IDPsButtonsContainer/IDPsButtonsContainer";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useGetIdpQuery } from "../../store/api/idpApi";
import { useSelector } from "react-redux";

export default function IDPsTableItems({ isPersonalPage }) {
  const user = useSelector(state => state.users)
  
  const {data, isLoading} = useGetIdpQuery({}, {skip: !user.token})

  return (
    <>
    {!data ? <p></p> : (
      <>
    
      <IDPsButtonsContainer dataItem={!isLoading && data} isPersonalPage={isPersonalPage} />
      <div className={style.idpsConrainer}>
        {!isLoading && data.map((item) => (
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
                      Иванов Иван Иванович
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
                    title={item.status == "active" ? "В работе" : "Выполнен"}
                  />{" "}
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
