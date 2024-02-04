import { useEffect, useState } from "react";
import style from "./IDPs.module.css";
import PetalsList from "../PetalsList/PetalsList";
import PropTypes from "prop-types";
import { Tabs, Tab } from "@alfalab/core-components-tabs";
import { Button } from "@alfalab/core-components-button";
import { Space } from "@alfalab/core-components-space";
import IDPsTableItems from "../IDPsTableItems/IDPsTableItems";

import { Link } from "react-router-dom";
import CalendarSearch from "../CalendarSearch/CalendarSearch";
import {
  useGetIdpEmployeeQuery,
  useGetIdpPrivateQuery,
} from "../../store/api/idpApi";

export default function IDPs({ petals, title, newIdpButton, tabs }) {
  const [page, setPage] = useState(1);
  const [isPersonalPage, setIsPersonalPage] = useState(false);

  const {
    data: privateIdps,
    isLoading: isPrivateLoading,
    isFetching: isPrivateFetching,
    isError,
  } = useGetIdpPrivateQuery();
  const {
    data: employeeIdps,
    isLoading: isEmployeeLoading,
    isFetching: isEmployeeFetching,
  } = useGetIdpEmployeeQuery();

  const TABS = [
    { title: "Личные", id: "tab-1" },
    { title: "Сотрудников", id: "tab-2" },
  ];
  const [selectedId, setSelectedId] = useState(TABS[0].id);

  const handleChange = (event, { selectedId }) => {
    setSelectedId(selectedId);
    selectedId === "tab-1" ? setIsPersonalPage(true) : setIsPersonalPage(false);
  };

  return (
    <section className={style.container}>
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
      {petals ? (
        <PetalsList
          isLoading={
            selectedId == "tab-1" ? isPrivateLoading : isEmployeeLoading
          }
          data={selectedId == "tab-1" ? privateIdps : employeeIdps}
        />
      ) : (
        ""
      )}
      <CalendarSearch />
      {!isPrivateFetching && !isEmployeeFetching ? (
        selectedId == "tab-1" ? (
          <IDPsTableItems
            setPage={setPage}
            page={page}
            isLoading={isPrivateLoading}
            data={privateIdps}
            isPersonalPage={selectedId == "tab-1"}
            isFetching={isPrivateFetching}
          />
        ) : (
          <IDPsTableItems
            setPage={setPage}
            page={page}
            isLoading={isPrivateLoading}
            data={employeeIdps}
            isFetching={isEmployeeFetching}
            isPersonalPage={isPersonalPage}
          />
        )
      ) : (
        <p>{isError.message}</p>
      )}
    </section>
  );
}

IDPs.propTypes = {
  title: PropTypes.string,
  petals: PropTypes.bool,
  newIdpButton: PropTypes.bool,
  tabs: PropTypes.bool,
};
