import style from "./PetalsList.module.css";
import Petals from "../Petals/Petals";
import { Skeleton } from "@alfalab/core-components-skeleton";
export default function PetalsList() {
  return (
    <section className={style.container}>
      <div className={style.list}>
        <Skeleton visible={false}>
          <Petals name={"Всего"} count={2} />
        </Skeleton>
        <Skeleton visible={false}>
          <Petals name={"В работе"} count={2} />
        </Skeleton>
        <Skeleton visible={false}>
          <Petals name={"Выполнено"} count={2} />
        </Skeleton>
        <Skeleton visible={false}>
          <Petals name={"Просрочено"} count={2} />
        </Skeleton>
      </div>
    </section>
  );
}
