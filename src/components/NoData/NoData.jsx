import style from "./NoData.module.css";

export default function NoData() {
  return (
    <section className={style.noData}>
      <div className={style.container}>
        <div className={style.findImg} alt="Картинка лупы поиска" />
        <div>
          <h3 className={style.title}>Пока что тут ничего нет</h3>
        </div>
      </div>
    </section>
  );
}
