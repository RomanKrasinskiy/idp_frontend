import style from './Nitifications.module.css'
import { useState } from "react";
// import { IoIosNotificationsOutline } from "react-icons/io";

const Notifications = () => {
  const [showDropDown, setShowDropDown] = useState(true);
  const [accept, setAccept] = useState("Accept");

  return (
    <div className={style.notificationContainer}>
      <div
        className={style.notification}
        onClick={() => setShowDropDown(!showDropDown)}
      >
        {/* <IoIosNotificationsOutline size={36} /> */}
      </div>
      <div
        className={style.notificationBox}
        style={{
          opacity: !showDropDown ? "0.8" : "1",
          transition: "0.3s ease",
          visibility: showDropDown ? "hidden" : "visible",
          transform: showDropDown ? "scale(0.9)" : "scale(1)",
          transformOrigin: "top right",
        }}
      >
        <div className={style.notificationsHeader}>
          <h2>Notifications</h2>
        </div>
        <div className={style.user}>
          <div className={style.photoURL}>
            <img src="Add-demo-profile-image-here" alt="User Avatar" />
          </div>
          <div className={style.userDetails}>
            <div className={style.notifyMessage}>
              <span className={style.textBold}>James William</span> shared the file{" "}
              <span className={style.foxtfold}>Notification figma file</span> with you
            </div>
            <div className={style.notifyTime}>an hour ago</div>
            <div className={style.buttons}>
              <button className={style.decline}>Decline</button>
              <button className={style.accept} onClick={() => setAccept("Accepted!")}>
                {accept}
              </button>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
};

export default Notifications;
