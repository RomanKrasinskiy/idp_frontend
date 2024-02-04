import style from "./NoData.module.css";

export default function NoData({text}) {
  return (
    <section className={style.noData}>
      <div className={style.container}>
        <div className={style.findImg} alt="Картинка лупы поиска" />
        <div>
          {text ? (
            <h3 className={style.title}>{text}</h3>
          ) : (
            <>
              <h3 className={style.title}>Пока что тут ничего нет</h3>
              <p className={style.text}>Создайте новый план развития</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
