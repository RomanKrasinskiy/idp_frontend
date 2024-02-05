import { Select } from "@alfalab/core-components-select";
import logo from "../../images/LogoHeader.svg";
import style from "./Auth.module.css";
import { BaseOption } from "@alfalab/core-components-select/shared";
import { Button } from "@alfalab/core-components-button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setlogin } from "../../store/authSlice";
import { usePostAuthMutation } from "../../store/api/authApi";
import { setloggedIn } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const OPTIONS = [
  {
    key: "1",
    content: "Первый",
    email: "user1@mail.ru",
    password: "Testpassword",
  },
  {
    key: "2",
    content: "Второй",
    email: "user2@mail.ru",
    password: "Testpassword",
  },
  {
    key: "3",
    content: "Третий",
    email: "user3@mail.ru",
    password: "Testpassword",
  },
  {
    key: "4",
    content: "Четвёртый",
    email: "user4@mail.ru",
    password: "Testpassword",
  },
  {
    key: "5",
    content: "Пятый",
    email: "user5@mail.ru",
    password: "Testpassword",
  },
  {
    key: "6",
    content: "Шестой",
    email: "user6@mail.ru",
    password: "Testpassword",
  },
  {
    key: "7",
    content: "Седьмой",
    email: "user7@mail.ru",
    password: "Testpassword",
  },
  {
    key: "8",
    content: "Восьмой",
    email: "qweqwe@example.com",
    password: "Testpassword",
  },
];

export default function Auth() {
  const [selectedOption, setSelectedOption] = useState(null); // новое состояние
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectChange = (selectedKey) => {
    const selected = selectedKey.selectedMultiple[0]; // Предполагаем, что выбрана только одна опция
    setSelectedOption(selected);
    if (selected) {
      const { email, password } = selected;
      dispatch(setlogin({ email, password }));
    }
  };

  const [postAuth] = usePostAuthMutation();

  const { email, password } = useSelector((state) => state.auth);
  const handleLogin = () => {
    postAuth({ email, password })
      .then((res) => {
        const token = res.data.access;
        localStorage.setItem("token", token);
        dispatch(setToken(token));
        dispatch(setloggedIn(true));
        navigate("/idps");
      })
      .catch((error) => {
        console.error("Ошибка при аутентификации:", error);
        // Обработка ошибок, например, вывод сообщения об ошибке пользователю
      });
  };

  return (
    <section className={style.auth}>
      <div className={style.authContainer}>
        <div className={style.authContainerHeader}>
          <img className={style.logo} src={logo} />
        </div>
        <div className={style.authSelect}>
          <h5 className={style.authTitle}>Выберите аккаунт для входа</h5>
          <div style={{ width: 320, marginBottom: "72px" }}>
            <Select
              allowUnselect={true}
              size="m"
              options={OPTIONS}
              // placeholder='Аккаунт'
              label="Аккаунт"
              Option={BaseOption}
              block={true}
              optionClassName={style.optionClassName}
              onChange={handleSelectChange}
            />
          </div>
          <div>
            <Button
              disabled={!selectedOption}
              view="primary"
              size="s"
              onClick={handleLogin}
            >
              Войти
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
