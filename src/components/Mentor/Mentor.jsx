import style from "./Mentor.module.css";
import { Space } from "@alfalab/core-components-space";
import IDPsTableItems from "../IDPsTableItems/IDPsTableItems";
import { fetchGetIdps, idpsCurrent } from "../../store/idpSlice";
import CalendarSearch from "../CalendarSearch/CalendarSearch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Mentor() {
  const dispatch = useDispatch();
  const { idps } = useSelector(idpsCurrent);

  useEffect(() => {
    dispatch(fetchGetIdps());
  }, [dispatch]);

  const isPersonalPage = true;
  return (
    <section className={style.container}>
      <h1 className={style.title}>Задачи ментора</h1>
      <Space direction="horizontal" align="center"></Space>
      <CalendarSearch />
      {/* <IDPsItems isPersonalPage={isPersonalPage} /> */}
      <IDPsTableItems isPersonalPage={isPersonalPage} idps={idps} />
    </section>
  );
}

Mentor.propTypes = {};
