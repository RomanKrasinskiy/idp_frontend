import style from "./Header.module.css";
import EditProfile from "./EditProfile/EditProfile";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";
import Notification from "./Notification/Notification";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <HeaderLogo />
        <div className={style.mainHeaderContainer}>
          <HeaderNavBar />
          <div className={style.rightSideHeader}>
            <Notification />
            <EditProfile />
          </div>
        </div>
      </div>
    </header>
  );
}
