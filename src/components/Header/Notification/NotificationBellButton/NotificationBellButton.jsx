import style from "./NotificationBellButton.module.css";
import PropTypes from "prop-types";

import { BellMIcon } from "@alfalab/icons-glyph/BellMIcon";
import { Badge } from "@alfalab/core-components-badge";

export default function NotificationBellButton({
  showDropDown,
  setShowDropDown,
}) {
  return (
    <button
      className={style.bellButton}
      onClick={() => setShowDropDown(!showDropDown)}
      onMouseEnter={() => setShowDropDown(false)}
    >
      <div className={style.bellIco}>
        <BellMIcon />
        <div className={style.bellCount}>
          <Badge view="count" />
        </div>
      </div>
    </button>
  );
}
NotificationBellButton.propTypes = {
  showDropDown: PropTypes.bool.isRequired,
  setShowDropDown: PropTypes.func.isRequired,
};
