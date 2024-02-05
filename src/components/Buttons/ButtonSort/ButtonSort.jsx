import { useState } from "react";
import { Button } from "@alfalab/core-components-button";
import { ListDefaultSIcon } from "@alfalab/icons-glyph/ListDefaultSIcon";
import { ListDecSIcon } from "@alfalab/icons-glyph/ListDecSIcon";
import { ListAscSIcon } from "@alfalab/icons-glyph/ListAscSIcon";

// eslint-disable-next-line react/prop-types
export default function ButtonSort({ BTitle, BSortKey }) {
  const [sortKey, setSortKey] = useState(undefined);
  const [isSortedDesc, setIsSortedDesc] = useState(false);

  const handleSort = (key) => {
    if (sortKey === key) {
      // Если по тому же ключу кликнули снова, переключите направление сортировки
      setIsSortedDesc(!isSortedDesc);
    } else {
      // Если кликнули по другому ключу, установите новый ключ сортировки и направление
      setSortKey(key);
      setIsSortedDesc(false); // По умолчанию устанавливаем сортировку по возрастанию
    }
  };
  const getSortIcon = () => {
    // Определите подходящую иконку на основе состояния сортировки
    if (sortKey === BSortKey) {
      return isSortedDesc ? <ListAscSIcon /> : <ListDecSIcon />;
    }
    return <ListDefaultSIcon />;
  };

  return (
    <Button
      size="xs"
      rightAddons={getSortIcon()}
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
      }}
      onClick={() => handleSort(BSortKey)}
    >
      {BTitle}
    </Button>
  );
}
