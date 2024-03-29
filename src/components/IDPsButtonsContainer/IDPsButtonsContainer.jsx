import style from "./IDPsButtonsContainer.module.css";
import FilterStatus from "../FilterStatus/FilterStatus";
import ButtonSort from "../Buttons/ButtonSort/ButtonSort";
import NoData from "../NoData/NoData";
import PropTypes from "prop-types";

export default function IDPsButtonsContainer({ dataItem, isPersonalPage }) {
  return (
    <>
      {!dataItem ? (
        <NoData />
      ) : (
        <div className={style.buttonContainer}>
          <div>
            {isPersonalPage ? (
              <ButtonSort
                BTitle={"Сотрудник"}
                BSortKey={"date"}
                style={{ display: "block" }}
              />
            ) : null}
            <ButtonSort BTitle={"План развития"} BSortKey={"date"} />
            <ButtonSort BTitle={"Срок завершения"} BSortKey={"date"} />
            <div style={{ display: "inline-block" }}>
              <FilterStatus />
            </div>
          </div>
          <div className={style.btnExportContainer}>
            <button className={style.btnExport} />
          </div>
        </div>
      )}
    </>
  );
}

IDPsButtonsContainer.propTypes = {
  dataItem: PropTypes.bool,
  isPersonalPage: PropTypes.bool,
  length: PropTypes.number,
};
