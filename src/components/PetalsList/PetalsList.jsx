import style from "./PetalsList.module.css";
import Petals from "../Petals/Petals";
import PropTypes from "prop-types";
import { Skeleton } from "@alfalab/core-components-skeleton";
export default function PetalsList({ data, isLoading }) {
  const hasDetailData = data && data.detail;

  return (
    <section className={style.container}>
      <div className={style.list}>
        <Skeleton visible={isLoading}>
          <Petals
            name={"Всего"}
            count={hasDetailData ? 0 : data ? data.in_total : "0"}
          />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <Petals
            name={"В работе"}
            count={hasDetailData ? 0 : data ? data.active : "0"}
          />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <Petals
            name={"Выполнено"}
            count={hasDetailData ? 0 : data ? data.closed : "0"}
          />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <Petals
            name={"Просрочено"}
            count={hasDetailData ? 0 : data ? data.overdue : "0"}
          />
        </Skeleton>
      </div>
    </section>
  );
}
PetalsList.propTypes = {
  total: PropTypes.number,
  active: PropTypes.number,
  overdue: PropTypes.number,
  completed: PropTypes.number,
};
