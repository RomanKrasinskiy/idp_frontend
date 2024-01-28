import { useState } from "react";
import { Button } from "@alfalab/core-components-button";


export default function ButtonSort({ BTitle, BSortKey }) {
  const [sortKey, setSortKey] = useState(undefined);
  const [isSortedDesc, setIsSortedDesc] = useState(undefined);

  const defaultIsSortedDesc = false;

  const handleSort = (key) => {
    setSortKey(key);

    if (isSortedDesc !== undefined) {
      setIsSortedDesc(!isSortedDesc ? undefined : defaultIsSortedDesc);
    } else {
      setIsSortedDesc(!defaultIsSortedDesc);
    }
  };
  return (
    

      <Button
      size="xs"
      // rightAddons={}
      style={{
        borderRadius: 99,
        padding: "0 16px 0 16px",
        marginRight: 12,
        textTransform: "none",
        letterSpacing: "normal",
        fontFamily: "Segoe UI",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "20px",



        //   backgroundColor: "#E7E8EB",
      }}
      onClick={() => handleSort("date")}
    >{BTitle}
      {/* <TSortableHeadCell
        style={{
          padding: 0,
          border: "none",
          backgroundColor: "transparent",
          textTransform: "none",
          letterSpacing: "normal",
          fontFamily: "Segoe UI",
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "20px",
        }}
        title={BTitle}
        defaultIsSortedDesc={defaultIsSortedDesc}
        isSortedDesc={sortKey === BSortKey ? isSortedDesc : undefined}
        onSort={() => handleSort(BSortKey)}
      >
        {BTitle}
      </TSortableHeadCell> */}
    </Button>
    
  );
}
