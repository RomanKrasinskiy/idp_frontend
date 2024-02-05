import style from "./Mentor.module.css";
import { Space } from "@alfalab/core-components-space";
import IDPsTableItems from "../IDPsTableItems/IDPsTableItems";
import CalendarSearch from "../CalendarSearch/CalendarSearch";

export default function Mentor() {
  const data = {
    in_total: 19,
    active: 11,
    closed: 3,
    overdue: 5,
    count: 19,
    next: "http://51.250.70.185:8000/api/v1/idp/subordinates/?page=2",
    previous: null,
    results: [
      {
        idp_id: "5c12b72e-d9d5-44db-ad7f-e564b4e813e5db",
        name: "Развивать навыки в программировании",
        employee: {
          first_name: "Александр",
          last_name: "Иванов",
        },
        end_date_plan: "2024-03-05T15:12:38Z",
        status: "overdue",
      },
      {
        idp_id: "647f8678-5ad6-41ed-9e32-84134564ee3e2e0c",
        name: "Изучить новые методики управления временем",
        employee: {
          first_name: "Дмитрий",
          last_name: "Смирнов",
        },
        end_date_plan: "2024-03-05T15:58:46Z",
        status: "two_weeks",
      },
      {
        idp_id: "9b9b16e2-00d5-4f88-b204-d3134563c3cb5509",
        name: "Практиковать медитацию для повышения концентрации",
        employee: {
          first_name: "Игорь",
          last_name: "Петров",
        },
        end_date_plan: "2024-03-05T14:49:52Z",
        status: "closed",
      },
      {
        idp_id: "d3d87265-7b5d-4655-bde3-0bab623ef2348b8",
        name: "Читать книги по лидерству и развитию личности",
        employee: {
          first_name: "Алексей",
          last_name: "Соколов",
        },
        end_date_plan: "2024-03-05T15:10:54Z",
        status: "active",
      },
      {
        idp_id: "03d2616f-9c62-4f7e-bf9a-5446aa2346348b9",
        name: "Изучить новые методы обучения и запоминания информации",
        employee: {
          first_name: "Наталья",
          last_name: "Козлова",
        },
        end_date_plan: "2024-03-05T14:48:23Z",
        status: "active",
      },
      {
        idp_id: "0f1e9b2e-6185-4ee9-a0ee-7a06bd75671e1969",
        name: "Развивать навыки в области музыки",
        employee: {
          first_name: "Мария",
          last_name: "Морозова",
        },
        end_date_plan: "2024-03-05T15:11:56Z",
        status: "two_weeks",
      },
      {
        idp_id: "df6f70b4-fa27-4d73-b817-b4f8a954561ae86",
        name: "Повышать квалификацию в области программирования",
        employee: {
          first_name: "Евгений",
          last_name: "Беляков",
        },
        end_date_plan: "2024-03-05T15:10:41Z",
        status: "active",
      },
      {
        idp_id: "a293384a-121a-4cf4-a75d-90d694563920f98",
        name: "Изучить новые языки программирования",
        employee: {
          first_name: "Ольга",
          last_name: "Тимофеева",
        },
        end_date_plan: "2024-03-05T15:13:15Z",
        status: "active",
      },
      {
        idp_id: "74482b7e-406d-4382-b5cb457-d342c96b5f9f",
        name: "Практиковать методики саморазвития",
        employee: {
          first_name: "Владимир",
          last_name: "Лебедев",
        },
        end_date_plan: "2024-03-05T14:49:01Z",
        status: "two_weeks",
      },
      {
        idp_id: "6e16948d-34450549-4ec3-a8d7-f266239d7a26",
        name: "Учить иностранный язык для расширения кругозора",
        employee: {
          first_name: "Анна",
          last_name: "Сидорова",
        },
        end_date_plan: "2024-03-05T14:49:29Z",
        status: "overdue",
      },
      {
        idp_id: "0f1e9b2e-6185-3454ee9-a0ee-7a06bd1e1969",
        name: "Развивать навыки в области музыки",
        employee: {
          first_name: "Мария",
          last_name: "Морозова",
        },
        end_date_plan: "2024-03-05T15:11:56Z",
        status: "two_weeks",
      },
      {
        idp_id: "df6f70b4-fa27-4d73-474b817-b4f8a951ae86",
        name: "Повышать квалификацию в области программирования",
        employee: {
          first_name: "Евгений",
          last_name: "Беляков",
        },
        end_date_plan: "2024-03-05T15:10:41Z",
        status: "active",
      },
      {
        idp_id: "a293384a-121a-4cf4-a75d-90234d693920f98",
        name: "Изучить новые языки программирования",
        employee: {
          first_name: "Ольга",
          last_name: "Тимофеева",
        },
        end_date_plan: "2024-03-05T15:13:15Z",
        status: "active",
      },
      {
        idp_id: "74482b7856e-406d-4382-b5cb-d342c96b5f9f",
        name: "Практиковать методики саморазвития",
        employee: {
          first_name: "Владимир",
          last_name: "Лебедев",
        },
        end_date_plan: "2024-03-05T14:49:01Z",
        status: "two_weeks",
      },
      {
        idp_id: "6e16948d-0549-4ec3-a8d7-456f266239d7a26",
        name: "Учить иностранный язык для расширения кругозора",
        employee: {
          first_name: "Анна",
          last_name: "Сидорова",
        },
        end_date_plan: "2024-03-05T14:49:29Z",
        status: "overdue",
      },
    ],
  };

  return (
    <section className={style.container}>
      <h1 className={style.title}>Задачи ментора</h1>
      <Space direction="horizontal" align="center"></Space>
      <CalendarSearch />

      <IDPsTableItems
        page={1}
        isLoading={false}
        data={data}
        isPersonalPage={false}
        isFetching={false}
      />
    </section>
  );
}

Mentor.propTypes = {};
