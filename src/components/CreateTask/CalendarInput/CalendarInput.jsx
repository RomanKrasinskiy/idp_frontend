import style from "../CreateTask.module.css";
import { useState } from "react";
import { Calendar } from "@alfalab/core-components-calendar";
import { UniversalDateInput } from "@alfalab/core-components-universal-date-input";

export default function CalendarInput() {
  const [value, setValue] = useState("");

  const handleChangeCalendar = (_, { value }) => {
    setValue(value);
  };

  return (
    <div>
      <UniversalDateInput
        value={value}
        className={style.calendar}
        block={true}
        view="date"
        label="Дата"
        labelView={"inner"}
        size="m"
        onChange={handleChangeCalendar}
        picker={"month-only"}
        Calendar={Calendar}
        calendarProps={{
          selectorView: "month-only",
        }}
        clear={true}
        onClear={(e) => {
          e.stopPropagation();
          setValue("");
        }}
      />
    </div>
  );
}
