/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import style from "./FilterStatus.module.css";
import { Select } from "@alfalab/core-components-select";
import { FilterTag } from "@alfalab/core-components-filter-tag";


  export default function FilterStatus() {
    const options =  [
        { key: '1', content: "В работе" },
        { key: '2', content: "Черновик" },
        { key: '3', content: "Выполнен" },
        { key: '4', content: "Просрочен" },
        { key: '5', content: "Отменён" },
      ];
    
    const [selectedMultiple, setSelectedMultiple] = useState([]);
    const handleChangeMultiple = ({ selectedMultiple }) => {
        setSelectedMultiple(selectedMultiple.map((option) => option.key));
    };
  
    return (
      <div style={{ display: "inline-block" }}>
        <Select
          allowUnselect={true}
          popoverPosition='bottom-start'
          options={options}
          Field={CustomFieldMultiple}
          onChange={handleChangeMultiple}
          selected={selectedMultiple}
          fieldProps={{ size: "xs" }}
          multiple={true}
          optionClassName={style.selectText}
        />
      </div>
    );
  }
  
  const CustomFieldMultiple = ({
    label,
    selected,
    setSelectedItems,
    selectedMultiple,
    innerProps: { ref, ...restInnerProps },
    ...restProps
}) => {
    const content = selected && selected.content;

    const checkedContent = (
        <span>
            {!label && 'Статус:'}
            <b>
                {' '}
                {selectedMultiple.length !== 1 ? `Выбрано: ${selectedMultiple.length}` : content}
            </b>
        </span>
    );

    const contentLabel = <span>Статус</span>;

    return (
        <div ref={ref}>
            <FilterTag
                view={'filled'}
                onClear={() => setSelectedItems([])}
                checked={selected}
                {...restInnerProps}
                {...restProps} 
            >
                {selected ? checkedContent : contentLabel}
            </FilterTag>
        </div>
    );
};
