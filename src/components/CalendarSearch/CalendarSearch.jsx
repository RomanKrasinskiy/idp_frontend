import style from "./CalendarSearch.module.css";
import { useState } from 'react';

import { UniversalDateInput } from '@alfalab/core-components-universal-date-input';
import { Calendar } from "@alfalab/core-components-calendar";
import CustomSearch from "../CustomSearch/CustomSearch";


export default function CalendarSearch() {
  const [value, setValue] = useState('');
  const handleChangeCalendar = (_, { value }) => {
    setValue(value);
}; 

  return (
    <div className={style.containerCalendarSearch}>
                <UniversalDateInput
                    breakpoint={500}
                    style={{
                        width: 252,
                    }}
                    size='s'
                    value={value}
                    rangeBehavior={'clarification'}
                    view='date-range'
                    label='Дата или период'
                    labelView={'outer'}
                    picker={'clarification'}
                    onChange={handleChangeCalendar}
                    Calendar={Calendar}
                    minDate={new Date(new Date().getTime() - 24 * 60 * 60 * 1000)} // вычитаем 1 день в миллисекундах
                    clear={true}
                    onClear={(e) => {
                        e.stopPropagation();
                        setValue('');
                    }}
                /> 
                <CustomSearch />
            </div>
  )
}
