/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./FilterStatus.module.css";
import { Select } from "@alfalab/core-components-select";
import { FilterTag } from "@alfalab/core-components-filter-tag";

export default function FilterStatus() {
  const options = [
    { key: "1", content: "Черновик", status: "draft_approval, draft" },
    { key: "2", content: "В работе", status: "two_weeks, active" },
    { key: "3", content: "Просрочен", status: "overdue" },
    { key: "4", content: "Выполнен", status: "completed_approval, closed" },
    { key: "5", content: "Отменён", status: "cancelled" },
  ];

  const [selectedMultiple, setSelectedMultiple] = useState([]);
  const handleChangeMultiple = ({ selectedMultiple }) => {
    setSelectedMultiple(selectedMultiple.map((option) => option.key));
  };

  return (
    <div style={{ display: "inline-block" }}>
      <Select
        allowUnselect={true}
        popoverPosition="bottom-start"
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
      {!label && "Статус:"}
      <b>
        {" "}
        {selectedMultiple.length !== 1
          ? `Выбрано: ${selectedMultiple.length}`
          : content}
      </b>
    </span>
  );

  const contentLabel = <span>Статус</span>;

  return (
    <div ref={ref}>
      <FilterTag
        view={"filled"}
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
