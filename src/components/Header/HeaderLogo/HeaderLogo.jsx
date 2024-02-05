import { Link } from "react-router-dom";
import style from "./HeaderLogo.module.css";

export default function HeaderLogo() {
  return (
    <div className={style.logoContainer}>
      <Link to="/idps">
        <div className={style.logo} />
      </Link>
    </div>
  );
}
