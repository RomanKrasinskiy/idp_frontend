import style from "./NotificationUser.module.css";
import ava from "../../../../images/avatarDel.jpg";


export default function NotificationUser() {

  return (
    <div className={style.cardNotification}>
    <div className={style.user}>
      <div className={style.photoURL}>
        <img className={style.avatar} alt="User Avatar" src={ava} />
      </div>
      <div className={style.userDetails}>
        <div className={style.notifyMessage}>
          <h5 className={style.textUserName}>
            Константинопольский Константин
          </h5>
        </div>
      </div>
      <p className={style.notifiTime}>10 часов</p>
    </div>
    <p className={style.textNotifi}>
      Вам создан новый план развития.
    </p>
  </div>
  )
}
