import style from "./StatusTable.module.css";

// eslint-disable-next-line react/prop-types
export default function StatusTable({ title, isPersonalPage }) {
    // const title = 'В работе';
    // const title = 'Черновик';
    // const title = 'Выполнен';
    // const title = 'Просрочен';
    // const title = 'Отменен';

  const getColor = (title) => {
    switch (title) {
      case "draft":
        return "rgba(117, 117, 126, 1)";
      case "draft_approval":
        return "rgba(117, 117, 126, 1)";
      case "active":
        return "rgba(14, 14, 14, 1)";
      case "two_weeks":
        return "rgba(14, 14, 14, 1)";
      case "overdue":
        return "rgba(239, 49, 36, 1)";
      case "cancelled":
        return "rgba(233, 146, 24, 1)";
      case "completed_approval":
        return "rgba(14, 14, 14, 1)";
      case "closed":
        return "rgba(14, 14, 14, 1)";
      default:
        return "rgba(48, 122, 239, 1)";
    }
  };
  const getRussianStatus = (title) => {
    switch (title) {
      case "draft":
        return "Черновик";
      case "draft_approval":
        return "Черновик";
      case "active":
        return "В работе";
      case "two_weeks":
        return "В работе";
      case "overdue":
        return "Просрочен";
      case "cancelled":
        return "Отменен";
      case "completed_approval":
        return "Выполнен";
      case "closed":
        return "Выполнен";
      default:
        return "Статус не найден";
    }
  };
  
  const color = getColor(title);
  const statusName = getRussianStatus(title);

  return (
    <div className={style.statusContainer} style={{
      paddingLeft: isPersonalPage ? '45px' : "98px",
    }}>
        <div className={style.icoContainer}>
      {title === "two_weeks" ? (
        <div className={`${style.ico} ${style.fireIco}`} />
      ) : null}

      {title === "completed_approval" ? (
        <div className={`${style.ico} ${style.clockIco}`} />
      ) : null}
        </div>
      
      <div
        className={style.textContainer}
        style={{ textAlign: 'center', width: '100%', color: color }}
      >
        {statusName}
      </div>
    </div>
  );
}
