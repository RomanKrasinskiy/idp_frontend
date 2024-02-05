import style from "./HeaderNavBar.module.css";
import { Link } from "react-router-dom";

export default function HeaderNavBar() {
  return (
    <nav className={style.navContainer}>
      <ul>
        <li className={style.navItem}>
          <Link to="/contacts">Контакты</Link>
        </li>
        <li className={style.navItem}>
          <Link to="/about">Всё о работе</Link>
        </li>
        <li className={style.navItem}>
          <Link to="/departments">Подразделения</Link>
        </li>
      </ul>
    </nav>
  );
}
