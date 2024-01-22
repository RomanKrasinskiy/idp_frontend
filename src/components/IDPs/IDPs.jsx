import React from "react";
import style from "./IDPs.module.css";
import PetalsList from "../PetalsList/PetalsList";

import { Tabs, Tab } from '@alfalab/core-components-tabs';
import { Button } from "@alfalab/core-components-button";
import { Space } from "@alfalab/core-components-space";
import { UniversalDateInput } from "@alfalab/core-components-universal-date-input";
// import { CalendarRange } from "@alfalab/core-components-calendar-range";
import { Calendar } from "@alfalab/core-components-calendar";
import CustomSearch from "../CustomSearch/CustomSearch";

export default function IDPs() {
    const TABS = [
        { title: 'Личные', id: 'tab-1' },
        { title: 'Сотрудников', id: 'tab-2' },
    ];
    const [selectedId, setSelectedId] = React.useState(TABS[0].id);
    const [disabled, setDisabled] = React.useState(false);
    
    const handleChange = (event, { selectedId }) => {
        setSelectedId(selectedId);
    };

    const [value, setValue] = React.useState('');
    const handleChangeCalendar = (_, { value }) => {
        setValue(value);
    };

    return(
        <section className={style.container}>
            <h1 className={style.title}>Планы развития</h1>

        {/* Переключатель Личные планы или Сотрудников*/}
            <Tabs size='xs' selectedId={selectedId} onChange={handleChange}>
                {TABS.map((item) => (
                    <Tab title={item.title} id={item.id} key={item.id} />
                ))}
            </Tabs>
            <Space direction='horizontal' align='center'>
                <Button disabled={disabled} view='accent' size='s'>
                    Создать
                </Button>
            </Space>
            <PetalsList />
            <UniversalDateInput
                breakpoint={500}
                style={{
                    width: 252
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
                calendarProps={{
                    selectorView: 'month-only',
                }}
                clear={true}
                onClear={(e) => {
                    e.stopPropagation();
                    setValue('');
                }}
            /> 
            <CustomSearch />
            
        </section>
    );
}
