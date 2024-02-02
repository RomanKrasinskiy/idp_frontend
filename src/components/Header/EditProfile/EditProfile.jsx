import { useNavigate } from 'react-router-dom';
import style from './EditProfile.module.css'

export default function EditProfile() {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.clear();
    navigate("/auth");
    console.log("exit");
        
     
  };
  return (
    <div className={style.editContainer}>
      <button title="Нажмите для выхода" className={style.avatar} onClick={handleSignOut}>

      </button>
      
    </div>
  )

}
