import style from '../LeftNavBar.module.css'

export function NavBarItem({ icon, title,isActive }) {
  return (
    <button className={`${style.button} ${isActive ? `${style.button_active}` : `${style.button}`}`}>
        <img src={icon} alt="" />
        {title}
    </button>
  )
}

export default NavBarItem;