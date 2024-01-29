import EditProfile from "./EditProfile/EditProfile";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavBar from "./HeaderNavBar/HeaderNavBar";
import NotificationBell from "./NotificationBell/NotificationBell";

export default function Header() {
  return (
    <header>
      <div>
        <HeaderLogo />
        <HeaderNavBar />
        <NotificationBell />
        <EditProfile />
      </div>
    </header>
  )
}
