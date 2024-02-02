import style from "./PetalsList.module.css";
import Petals from "../Petals/Petals";
import { Skeleton } from "@alfalab/core-components-skeleton";
import { useGetIdpEmployeeQuery } from "../../store/api/idpApi";
export default function PetalsList() {

  const { data, isLoading } = useGetIdpEmployeeQuery();

  return (
    <section className={style.container}>
      <div className={style.list}>
        <Skeleton visible={isLoading}>
          <Petals name={"Всего"} count={data?.in_total} />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <Petals name={"В работе"} count={data?.active} />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <Petals name={"Выполнено"} count={data?.closed} />
        </Skeleton>
        <Skeleton visible={isLoading}>
          <Petals name={"Просрочено"} count={data?.overdue} />
        </Skeleton>
      </div>
    </section>
  );
}
