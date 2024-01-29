import style from "./PetalsList.module.css";
import Petals from "../Petals/Petals";
import PropTypes from "prop-types";
import { Skeleton } from "@alfalab/core-components-skeleton";
export default function PetalsList({ total, active, overdue, completed }) {
  return (
    <section className={style.container}>
      <div className={style.list}>
        <Skeleton visible={false}>
          <Petals name={"Всего"} count={total} />
        </Skeleton>
        <Skeleton visible={false}>
          <Petals name={"В работе"} count={active} />
        </Skeleton>
        <Skeleton visible={false}>
          <Petals name={"Выполнено"} count={completed} />
        </Skeleton>
        <Skeleton visible={false}>
          <Petals name={"Просрочено"} count={overdue} />
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
