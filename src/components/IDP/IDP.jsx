import { useDispatch, useSelector } from "react-redux";

import style from "./IDP.module.css";
import TaskProgress from "../Progress/Progress";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import { Input } from "@alfalab/core-components-input";
import CommentInput from "../CreateTask/CommentInput/CommentInput";
import EditWorker from "../CreateTask/EditWorker/EditWorker";
import { Skeleton } from "@alfalab/core-components-skeleton";
import { openPopup1 } from "../../store/actions/popup1Actions";
import Popup from "../Popup/Popup";
import PetalsList from "../PetalsList/PetalsList";
import IDPsTableItems from "../IDPsTableItems/IDPsTableItems";

export default function IDP() {
  const dispatch = useDispatch();

  const popup1IsOpen = useSelector((state) => state.popup1.isOpen);

  // Деструктуризация с проверкой наличия end_date_plan
  const { end_date_plan, start_date, name } =  {name: 'Work - life - balance'};

  const data = {
    "in_total": 7,
    "active": 3,
    "closed": 2,
    "overdue": 2,
    "count": 19,
    "next": "http://51.250.70.185:8000/api/v1/idp/subordinates/?page=2",
    "previous": null,
    "results": [
        {
            "idp_id": "647f8678-5ad6-41ed-9e32-84164ee3ee0c",
            "name": "Work - life - balance",
            "employee": {
                "first_name": "Станислав",
                "last_name": "Паслов"
            },
            "end_date_plan": "2024-03-05T15:58:46Z",
            "status": "active"
        },
        {
            "idp_id": "5c12b72e-d9d5-44db-ad7f-e4b4e813e5db",
            "name": "активировать его и обновить в нем pip",
            "employee": {
                "first_name": "Станислав",
                "last_name": "Паслов"
            },
            "end_date_plan": "2024-03-05T15:12:38Z",
            "status": "overdue"
        },
        {
            "idp_id": "d3d87265-7b5d-4655-bde3-0bab623ef8b8",
            "name": "Вы должны таким образом переместиться",
            "employee": {
                "first_name": "Станислав",
                "last_name": "Паслов"
            },
            "end_date_plan": "2024-03-05T15:10:54Z",
            "status": "active"
        },
        {
            "idp_id": "03d2616f-9c62-4f7e-bf9a-5446aa6348b9",
            "name": "Гармония в теле: Забота о Здоровье и Физической Активности",
            "employee": {
                "first_name": "Станислав",
                "last_name": "Паслов"
            },
            "end_date_plan": "2024-03-05T14:48:23Z",
            "status": "two_weeks"
        },
        {
            "idp_id": "0f1e9b2e-6185-4ee9-a0ee-7a06bd1e1969",
            "name": "Далее в этом каталоге необходимо создать виртуальное окружение",
            "employee": {
                "first_name": "Станислав",
                "last_name": "Паслов"
            },
            "end_date_plan": "2024-03-05T15:11:56Z",
            "status": "two_weeks"
        },
        {
            "idp_id": "a293384a-121a-4cf4-a75d-90d693920f98",
            "name": "Для использования в коде переменных окружения",
            "employee": {
                "first_name": "Станислав",
                "last_name": "Паслов"
            },
            "end_date_plan": "2024-03-05T15:13:15Z",
            "status": "active"
        },
        {
            "idp_id": "00000000-0000-0000-0000-00000000000a",
            "name": "Изучить Best practices по фронту",
            "employee": {
                "first_name": "Станислав",
                "last_name": "Паслов"
            },
            "end_date_plan": "2024-01-10T21:00:00Z",
            "status": "overdue"
        },
        {
            "idp_id": "e1ab17d7-4d33-4905-a8fe-ebf26e28be07",
            "name": "Написать книгу",
            "employee": {
                "first_name": "Станислав",
                "last_name": "Паслов"
            },
            "end_date_plan": "2024-03-05T18:36:49Z",
            "status": "two_weeks"
        },
        {
            "idp_id": "00000000-0000-0000-0000-000000000007",
            "name": "Научиться эффективно ставить задачи разработчикам своей команды",
            "employee": {
                "first_name": "Иван",
                "last_name": "Павин"
            },
            "end_date_plan": "2024-03-18T21:00:00Z",
            "status": "active"
        },
        {
            "idp_id": "a0fe837f-63e2-4841-abec-3b0a11e18c4f",
            "name": "Обращаем внимание на надпись",
            "employee": {
                "first_name": "Станислав",
                "last_name": "Паслов"
            },
            "end_date_plan": "2024-03-05T15:57:39Z",
            "status": "closed"
        }
    ]
} // Временные данные
  return (
    <>
      {popup1IsOpen && (
        <Popup
          title="Сотрудник"
          buttonText="Сохранить"
          cancelButtonText="Отмена"
          search={true}
        />
      )}
      <LeftNavBar />
      <section className={style.container}>
        <h1 className={style.title}>План развития</h1>
        <div className={style.info}>
          <div className={style.infoDate}>
            <Skeleton visible={false}>
              <p className={style.subtitle}>до 11.02.2024{end_date_plan?.slice(0, 10)}</p>
            </Skeleton>
            <Skeleton visible={false}>
              <TaskProgress
                end_date_plan={'2024-02-10T15:12:38Z'}
                start_date={'2024-01-05T15:12:38Z'}
              />
            </Skeleton>
          </div>

          <div className={style.planName}>
            <p className={style.name}>Название</p>
            <Skeleton visible={false}>
              <Input
                className={style.input}
                labelView="inner"
                label=""
                value={name}
              />
            </Skeleton>
          </div>
          <CommentInput title="Добавить описание" />
          <div className={style.employee}>
            <EditWorker
              handleOpenEdit={() => dispatch(openPopup1())}
              text="Руководитель"
            />
            <div className={style.container__worker}>
              <p className={style.userName}>Алексей Чижов</p>
              <p className={style.post}>Руководитель отдела</p>
            </div>
          </div>
        </div>
        <h2 className={style.titleTask}>Задачи плана</h2>
        <PetalsList data={data} />
        <IDPsTableItems
            setPage={0}
            page={1}
            isLoading={false}
            data={data}
            isPersonalPage={true}
            isFetching={false}
          />
        

      </section>
    </>
  );
}
