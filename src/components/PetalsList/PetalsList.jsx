import style from "./PetalsList.module.css";
import Petals from "../Petals/Petals";
import { Skeleton } from "@alfalab/core-components-skeleton";
export default function PetalsList() {
  return (
    <section className={style.container}>
      <div className={style.list}>
        <Skeleton visible={false}>
          <Petals name={"Всего"} count={0} />
        </Skeleton>
        <Skeleton visible={false}>
          <Petals name={"В работе"} count={0} />
        </Skeleton>
        <Skeleton visible={false}>
          <Petals name={"Выполнено"} count={0} />
        </Skeleton>
        <Skeleton visible={false}>
          <Petals name={"Просрочено"} count={0} />
        </Skeleton>
      </div>
    </section>
  );
}
