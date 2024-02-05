import style from "../CreateTask.module.css";
import { Textarea } from "@alfalab/core-components-textarea";
import plus from "../../../images/AddPlus.svg";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export default function CommentInput({ name, value, onChange, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editIcon, setEditIcon] = useState(true)

  useEffect(() => {
    if(value !== null ){
      setIsOpen(true);
      setEditIcon(false)
    }
  },[])

  function handleOpen() {
    setIsOpen(!isOpen);
  }

  function handleChange(e) {
    onChange(name, e);
  }

  return (
    <div>
      <div  className={style.button__container}>
        {editIcon ? (<img
          onClick={() => handleOpen()}
          className={style.button_add}
          src={plus}
          alt="add icon"
        />) : null}
        <p onClick={() => handleOpen()} className={style.text__comment}>
          {title}
        </p>
      </div>
      {isOpen && (
        <div style={{marginBottom: '20px'}}> 
        <Textarea
          defaultValue={value}
          name={name}
          onChange={(e) => handleChange(e.target.value)}
          minRows={3}
          style={{ width: "522px" }}
          className={style.input}
        />
        </div>
      )}
    </div>
  );
}

CommentInput.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
