import style from "../CreateTask.module.css";
import edit from "../../../images/Edit.svg";

import PropTypes from "prop-types";


export default function EditWorker({title, text, handleOpenEdit }) {

  return (
    <div className={style.mentor__container}>
      <h3 className={style.text}>{title}</h3>
      <div className={style.text__container}>
        <p
          onClick={() => handleOpenEdit()}
          style={{ cursor: "pointer" }}
          className={style.subtitle}
        >
          {text}
        </p>
        <img
          onClick={() => handleOpenEdit()}
          className={style.edit__button}
          src={edit}
          alt="edit icon"
        />
      </div>
    </div>
  );
}

EditWorker.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    handleOpenEdit: PropTypes.func
}