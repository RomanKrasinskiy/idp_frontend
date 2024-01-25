import style from "./PetalsList.module.css";
import Petals from "../Petals/Petals";
export default function PetalsList () {

    return (
        <section className={style.container}>
            <div className={style.list}>
                <Petals name={"Всего"} count={2} />
                <Petals name={"В работе"} count={2}/>
                <Petals name={"Выполнено"} count={2}/>
                <Petals name={"Просрочено"} count={2}/>
            </div>
        </section>
    );
  }
  