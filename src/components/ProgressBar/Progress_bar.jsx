import { ProgressBar } from "@alfalab/core-components-progress-bar";
import s from "./Progress_bar.module.css";

export const Progress_bar = () => {
  return (
    <>
      <ProgressBar view="link" className={s.progress_bar} size="m" value={12} />
    </>
  );
};
