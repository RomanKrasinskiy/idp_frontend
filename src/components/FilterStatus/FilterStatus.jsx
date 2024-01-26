/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
// import style from "./IDPsItems.module.css";


// import { Table } from "@alfalab/core-components-table";
// import { Gap } from "@alfalab/core-components-gap";
// import { PickerButton } from '@alfalab/core-components-picker-button';
// import { Typography } from "@alfalab/core-components-typography";
// import { Button } from "@alfalab/core-components-button";
// import { Skeleton } from "@alfalab/core-components-skeleton";

// import { TSortableHeadCell } from "@alfalab/core-components-table/components";
import { Select } from "@alfalab/core-components-select";
import { FilterTag } from "@alfalab/core-components-filter-tag";
// import { PickerButton } from "@alfalab/core-components-picker-button";
// import { useInView } from "react-intersection-observer";




  export default function FilterStatus() {
    const options = React.useMemo(
      () => [
        { key: '1', content: "Auurum" },
        { key: '2', content: "Bercelium" },
        { key: '3', content: "Curium" },
        { key: '4', content: "Neptunium" },
        { key: '5', content: "Plutonuim" },
      ],
      []
    );
  
    const [selected, setSelected] = React.useState([options[0]]);
  
    
    const [selectedMultiple, setSelectedMultiple] = React.useState([]);
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
        <div ref={ref} style={{marginLeft: '16px'}}>
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
