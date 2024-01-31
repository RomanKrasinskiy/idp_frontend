import style from "../CreateTask.module.css";
import { Calendar } from "@alfalab/core-components-calendar";
import { UniversalDateInput } from "@alfalab/core-components-universal-date-input";
import PropTypes from "prop-types";

export default function CalendarInput({ name, value, onChange, onClear }) {
  const handleChangeCalendar = (_, { value }) => {
    onChange(name, value);
  };

  return (
    <>
      <UniversalDateInput
        name={name}
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
        minDate={new Date(new Date().getTime() - 24 * 60 * 60)}
        clear={true}
        onClear={(e) => {
          e.stopPropagation();
          onClear("");
        }}
      />
    </>
  );
}

CalendarInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
};
