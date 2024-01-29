import style from "./CalendarSearch.module.css";
import { useState } from 'react';

import { UniversalDateInput } from '@alfalab/core-components-universal-date-input';
import { Calendar } from "@alfalab/core-components-calendar";
import CustomSearch from "../CustomSearch/CustomSearch";


export default function CalendarSearch() {
  const [value, setValue] = useState('');

  const handleChangeCalendar = async (_, { value }) => {
    setValue(value);

    // Предполагая, что value представляет собой диапазон дат в формате "start_date – end_date"
    const [startDate, endDate] = value.split(' – ');

    // Проверяем, выбраны ли обе даты начала и окончания
    if (startDate && endDate) {
      try {
        // Выполняем асинхронный вызов на сервер с startDate и endDate
        const response = await fetch(`ваш_серверный_эндпоинт?startDate=${startDate}&endDate=${endDate}`);
        // Предполагая, что ответ в формате JSON
        const data = await response.json();
        // Делаем что-то с данными, например, обновляем состояние или выполняем дополнительные действия
        console.log(data);
      } catch (error) {
        console.error('Ошибка при получении данных с сервера:', error);
      }
    }
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
