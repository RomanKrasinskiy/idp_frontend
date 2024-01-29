import { useEffect, useState } from "react";
import style from "./IDPs.module.css";
import PetalsList from "../PetalsList/PetalsList";
import { fetchGetIdps, idpsCurrent } from "../../store/idpSlice";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@alfalab/core-components-tabs";
import { Button } from "@alfalab/core-components-button";
import { Space } from "@alfalab/core-components-space";
import IDPsTableItems from "../IDPsTableItems/IDPsTableItems";

import { Link } from "react-router-dom";
import CalendarSearch from "../CalendarSearch/CalendarSearch";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@alfalab/core-components-skeleton";

export default function IDPs({ title, newIdpButton, tabs }) {
  const dispatch = useDispatch();
  const { idps, loading } = useSelector(idpsCurrent);

  useEffect(() => {
    dispatch(fetchGetIdps());
  }, [dispatch]);

  const TABS = [
    { title: "Личные", id: "tab-1" },
    { title: "Сотрудников", id: "tab-2" },
  ];
  const [selectedId, setSelectedId] = useState(TABS[1].id);
  const [isPersonalPage, setIsPersonalPage] = useState(true);

  const handleChange = (event, { selectedId }) => {
    setSelectedId(selectedId);
    selectedId === "tab-1" ? setIsPersonalPage(false) : setIsPersonalPage(true);
  };

  let activeCount = 0;
  let overdueCount = 0;
  let completedCount = 0;

  idps.map((obj) => {
    switch (obj.status) {
      case "active":
        activeCount++;
        break;
      case "overdue":
        overdueCount++;
        break;
      case "completed_approval":
        completedCount++;
        break;
      default:
        break;
    }
    return null;
  });

  return (
    <section>
      <div className={style.container}>
        <h1 className={style.title}>{title}</h1>
        {tabs ? (
          /* Переключатель Личные планы или Сотрудников */
          <Tabs size="xs" selectedId={selectedId} onChange={handleChange}>
            {TABS.map((item) => (
              <Tab title={item.title} id={item.id} key={item.id} />
            ))}
          </Tabs>
        ) : (
          ""
        )}

        <Space direction="horizontal" align="center">
          {newIdpButton ? (
            <Link to="/idp">
              <Button view="primary" size="s" style={{ margin: "32px 0" }}>
                Создать план
              </Button>
            </Link>
          ) : (
            ""
          )}
        </Space>

        <Skeleton visible={loading}>
          <PetalsList
            total={idps.length}
            active={activeCount}
            completed={completedCount}
            overdue={overdueCount}
          />
        </Skeleton>

        <CalendarSearch />
        <Skeleton visible={loading}>
          <IDPsTableItems isPersonalPage={isPersonalPage} idps={idps} />
        </Skeleton>
      </div>
    </section>
  );
}

IDPs.propTypes = {
  title: PropTypes.string,
  petals: PropTypes.bool,
  newIdpButton: PropTypes.bool,
  tabs: PropTypes.bool,
};
