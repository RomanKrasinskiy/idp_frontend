import style from "./StatusTable.module.css";

// eslint-disable-next-line react/prop-types
export default function StatusTable({ title }) {
    // const title = 'В работе';
    // const title = 'Черновик';
    // const title = 'Выполнен';
    // const title = 'Просрочен';
    // const title = 'Отменен';

  const isDeadlineClose = true;
  const isClock = false;
  const getColorByTitle = (title) => {
    switch (title) {
      case 'В работе':
        return 'rgba(14, 14, 14, 1)';
      case 'Черновик':
        return 'rgba(117, 117, 126, 1)';
      case 'Выполнен':
        return 'rgba(19, 164, 99, 1)';
      case 'Просрочен':
        return 'rgba(239, 49, 36, 1)';
      case 'Отменен':
        return 'rgba(233, 146, 24, 1)';
      default:
        return 'rgba(14, 14, 14, 1)';
    }
  };
  const color = getColorByTitle(title);
  return (
    <div className={style.statusContainer}>
        <div className={style.icoContainer}>
        {isDeadlineClose ? (
        <div className={`${style.ico} ${style.fireIco}`} />
      ) : null}

      {isClock ? (
        <div className={`${style.ico} ${style.clockIco}`} />
      ) : null}
        </div>
      

      <div
        className={style.textContainer}
        style={{ textAlign: 'center', width: '100%', color: color }}
      >
        {title}
      </div>
    </div>
  );
}
