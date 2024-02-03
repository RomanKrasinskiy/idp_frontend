import style from "./Mentor.module.css";
import { Space } from "@alfalab/core-components-space";
import IDPsTableItems from "../IDPsTableItems/IDPsTableItems";

import CalendarSearch from "../CalendarSearch/CalendarSearch";
import IDPsButtonsContainer from "../IDPsButtonsContainer/IDPsButtonsContainer";

export default function Mentor() {
  const isPersonalPage = true;
  return (
    <section className={style.container}>
      <h1 className={style.title}>Задачи ментора</h1>
      <Space direction="horizontal" align="center"></Space>
      <CalendarSearch />
      {/* <IDPsItems isPersonalPage={isPersonalPage} /> */}
      <IDPsButtonsContainer dataItem={[]} isPersonalPage={isPersonalPage} />
      <IDPsTableItems isPersonalPage={isPersonalPage} />
    </section>
  );
}

Mentor.propTypes = {};
