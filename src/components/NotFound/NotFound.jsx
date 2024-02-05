import styles from "./NotFound.module.css";
import { Button } from "@alfalab/core-components-button";
const NotFound = () => {
  const disabled = false;
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Страница не найдена</h2>
      </div>

      <Button
        className={styles.btn}
        disabled={disabled}
        view="accent"
        onClick={() => window.history.back()}
      >
        Назад
      </Button>
    </div>
  );
};

export default NotFound;
