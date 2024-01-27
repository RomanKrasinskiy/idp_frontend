import { Link, useLocation } from "react-router-dom";
import style from "../LeftNavBar.module.css";
import PropTypes from "prop-types";


export default function NavBarItem({ icon, title, link }) {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link
      to={link}
      className={`${style.button} ${
        isActive ? `${style.button_active}` : `${style.button}`
      }`}
    >
      <img src={icon} alt="" />
      {title}
    </Link>
  );
}

NavBarItem.propTypes ={
  icon: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string
}
