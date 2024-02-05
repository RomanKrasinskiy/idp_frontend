import style from "./Petals.module.css";

// eslint-disable-next-line react/prop-types
export default function Petals({ name, count }) {
  return (
    <div className={style.petals}>
      <div className={style.countContainer}>
        <h4 className={style.petalsName}>{name}</h4>
        <h3 className={style.petalsCount}>{count}</h3>
      </div>
    </div>
  );
}
