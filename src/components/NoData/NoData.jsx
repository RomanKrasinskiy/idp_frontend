import style from "./NoData.module.css";

// eslint-disable-next-line react/prop-types
export default function NoData({ text, subtitle }) {
  return (
    <section className={style.noData}>
      <div className={style.container}>
        <div className={style.findImg} alt="Картинка лупы поиска" />
        <div>
          {text ? (
            <>
              <h3 className={style.title}>{text}</h3>
              <p className={style.text}>{subtitle}</p>
            </>
          ) : (
            <>
              <h3 className={style.title}>Пока что тут ничего нет</h3>
              <p className={style.text}>Создайте новый план развития</p>
            </>
          )}
          {/* <h3 className={style.title}>Пока что тут ничего нет</h3> */}
        </div>
      </div>
    </section>
  );
}
