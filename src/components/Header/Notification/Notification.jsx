import style from "./Notification.module.css";
// import Notifications from "../../Notifications/Nitifications";
import { useState } from "react";
import NotificationUser from "./NotificationUser/NotificationUser";
import NotificationBellButton from "./NotificationBellButton/NotificationBellButton";

export default function Notification() {
  const [showDropDown, setShowDropDown] = useState(true);

  return (
    <>
      <div className={style.bellContainer}>
        <NotificationBellButton showDropDown={showDropDown} setShowDropDown={setShowDropDown} />

        <div
          className={style.notificationHoverContainer}
          onMouseLeave={() => setShowDropDown(true)}
          style={{
            opacity: !showDropDown && "1",
            transition: "0.2s ease-in-out",
            visibility: showDropDown ? "hidden" : "visible",
            transform: showDropDown ? "scale(0.2)" : "scale(1)",
            transformOrigin: "top right",
            zIndex: 8,
          }}
        >
          <div className={style.notificationBox}>
            <h3 className={style.notificationsHeader}>Уведомления</h3>

            <NotificationUser  />

          </div>
        </div>
      </div>
      <div className={!showDropDown && style.backDrop}></div>
    </>
  );
}
