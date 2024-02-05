import style from "./NotificationUser.module.css";
import ava from "../../../../images/avatarDel.jpg";
import ava2 from "../../../../images/ava2.png";
import { useEffect } from "react";

export default function NotificationUser(showDropDown) {
  useEffect(() => {
    if (showDropDown) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDropDown]);
  return (
    <>
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
          <p className={style.notifiTime}>10 мин.</p>
        </div>
        <p className={style.textNotifi}>
          Вам создан новый{" "}
          <span className={style.textNotifi_blue}>план развития.</span>
        </p>
      </div>
      <div className={style.cardNotification}>
        <div className={style.user}>
          <div className={style.photoURL}>
            <img className={style.avatar} alt="User Avatar" src={ava2} />
          </div>
          <div className={style.userDetails}>
            <div className={style.notifyMessage}>
              <h5 className={style.textUserName}>Савичев Алексей</h5>
            </div>
          </div>
          <p className={style.notifiTime}>1 час</p>
        </div>
        <p className={style.textNotifi}>
          В ваш план развития добавлена{" "}
          <span className={style.textNotifi_blue}>новая задача.</span>
        </p>
      </div>
      <div className={style.cardNotification}>
        <div className={style.user}>
          <div className={style.photoURL}>
            <img className={style.avatar} alt="User Avatar" src={ava} />
          </div>
          <div className={style.userDetails}>
            <div className={style.notifyMessage}>
              <h5 className={style.textUserName_grey}>
                Константинопольский Константин
              </h5>
            </div>
          </div>
          <p className={style.notifiTime}>10 янв</p>
        </div>
        <p className={style.textNotifi}>
          Ваша <span className={style.textNotifi_blue}>задача</span> возвращена
          на доработку.
        </p>
      </div>
    </>
  );
}
