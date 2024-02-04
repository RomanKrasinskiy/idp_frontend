import { Button } from "@alfalab/core-components-button";
import { useDispatch } from "react-redux";
import styles from "./ButtonsNewIdp.module.css";
import PropTypes from "prop-types";

export default function ButtonsNewIdp({ openPopup2, isPersonalPage }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.buttons}>
        {isPersonalPage ? (
          <>
            <Button view="accent">Согласовать с руководителем</Button>
            <Button view="primary">Удалить план</Button>
          </>
        ) : (
          <>
            <Button view="accent">Сохранить план</Button>
            <Button view="primary">Удалить план</Button>
            <Button view="link" onClick={() => dispatch(openPopup2())}>
              Назначить встречу
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

ButtonsNewIdp.propTypes = {
  openPopup2: PropTypes.func,
  isPersonalPage: PropTypes.bool,
};
