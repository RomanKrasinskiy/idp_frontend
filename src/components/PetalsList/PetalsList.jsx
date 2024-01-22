import { Grid } from "@alfalab/core-components-grid";
import style from "./PetalsList.module.css";
import { Gap } from "@alfalab/core-components-gap";
import Petals from "../Petals/Petals";
export default function PetalsList () {

    return (
        <section className={style.container}>
            <div className={style.list}>
                <Petals name={"Выполнено"} count={2} />
                <Petals name={"Выполнено"} count={2}/>
                <Petals name={"Выполнено"} count={2}/>
                <Petals name={"Выполнено"} count={2}/>
            </div>
        </section>
    );
  }
  