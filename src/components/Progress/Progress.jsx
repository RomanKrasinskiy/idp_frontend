import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ProgressBar } from "@alfalab/core-components-progress-bar";
import style from "./Progress.module.css";

const TaskProgress = ({ start_date, end_date_plan }) => {
  const [elapsedDuration, setCompletionPercentage] = useState(0);

  useEffect(() => {
    // Получаем текущую дату и время
    const now = new Date();

    // Преобразовываем строки в объекты Date
    const startDate = new Date(start_date);
    const endDatePlan = new Date(end_date_plan);

    // Если сегодняшняя дата больше даты конца плана, используем дату конца плана
    const endDate = now > endDatePlan ? endDatePlan : now;

    // Вычисляем общую длительность задачи и времени, прошедшего с начала выполнения
    const totalDuration = endDatePlan - startDate;
    const elapsedDuration = endDate - startDate;

    // Вычисляем процент выполнения
    const newCompletionPercentage = (elapsedDuration / totalDuration) * 100;

    // Приводим к диапазону от 0 до 100
    const boundedPercentage = Math.min(
      Math.max(newCompletionPercentage, 0),
      100
    );

    // Обновляем состояние completionPercentage
    setCompletionPercentage(boundedPercentage);
  }, [start_date, end_date_plan]);

  return (
    <div>
      {/* Пример использования ProgressBar с изменяемым значением */}
      <ProgressBar className={style.progressBar} value={elapsedDuration} />
    </div>
  );
};

export default TaskProgress;
TaskProgress.propTypes = {
  start_date: PropTypes.string,
  end_date_plan: PropTypes.string,
};
