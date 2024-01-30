import style from './NotificationBell.module.css'
import { BellMIcon } from "@alfalab/icons-glyph/BellMIcon";
import { Badge } from '@alfalab/core-components-badge';

export default function NotificationBell() {
  return (
    <div className={style.bellContainer}>
      <button className={style.bellButton}>
        <div className={style.bellIco}>
          <BellMIcon />
          <div className={style.bellCount}>
            <Badge view="count" />
          </div>
        </div>
      </button>
    </div>
  );
}
