import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import IDPs from "../IDPs/IDPs";
import NewIDP from "../NewIDP/NewIDP";
import style from "./App.module.css";
import CreateTask from "../CreateTask/CreateTask";
import Header from "../Header/Header";
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import NotFound from "../NotFound/NotFound";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Mentor from "../Mentor/Mentor";
import IDP from "../IDP/IDP";
import Auth from "../Auth/Auth";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  useGetTokenMutation,
  useGetUserInfoQuery,
  usePostUserMutation,
} from "../../store/api/userApi";
import { setUserId } from "../../store/userSlice";
import { useGetIdpQuery } from "../../store/api/idpApi";
import { useGetTaskQuery } from "../../store/api/taskApi";


function App() {

  const location = useLocation();
  // const navigate = useNavigate();

  const loggedIn = useSelector((state) => state.users.loggedIn);

  const [email, setEmail] = useState("user4@mail.ru");
  const [password, setPassword] = useState("Testpassword");

  const dispatch = useDispatch()

  const user = useSelector(state => state.users)

  const token = localStorage.getItem('token')

  const {userData, isLoading} = useGetUserInfoQuery(token) 
  const {idps} = useGetIdpQuery(token)


  const [addUser] = usePostUserMutation();
  const [postToken] = useGetTokenMutation();

  // const preloaderState = useSelector((state) => state.users.preloaderState);

  // console.log(loggedIn);
  // useEffect(() => {
  //   tokenCheck();
  // }, [loggedIn]);

  // function tokenCheck() {
  //   const token = localStorage.getItem("auth_token");
  //   if (!token) {
  //     navigate("/");
  //   } else {
  //     navigate(location.pathname);
  //   }
  // }

  useEffect(() => {
    const userToken = localStorage.getItem('token')
    if(!userToken){
      addUser({ email, password })
      .then((res) => {
        const token = res.data.access;
        localStorage.setItem('token', token)
      })
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(!token){
      postToken({token})
    }
  }, []);



  const showLeftNavBar = ["/", "/idp", "/newTask", "/mentor"].includes(
    location.pathname
  );

  return (
    <section className={style.app}>
      <div className={style.appContainer}>
        {!loggedIn && <Header />}
        <div className={style.mainContainer}>
          {/* Компоненты левого меню */}
          {showLeftNavBar && <LeftNavBar />}
          <Routes>
            <Route exact path="/auth" element={<Auth />} />

            <Route
              path="/"
              element={
                loggedIn ? (
                  <IDPs
                    petals={true}
                    title="Планы развития"
                    newIdpButton={true}
                    tabs={true}
                  />
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />
            <Route
              path="//idp/:idpId"
              element={loggedIn ? <IDP /> : <Navigate to="/auth" />}
            />
            <Route
              path="//idp"
              element={
                loggedIn ? (
                  <NewIDP title="Новый план развития" />
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />
            <Route
              path="/newTask"
              element={
                loggedIn ? (
                  <CreateTask title="Новая задача" buttonText="Создать" />
                ) : (
                  <Navigate to="/auth" />
                )
              }
            />
            <Route
              path="/mentor"
              element={loggedIn ? <Mentor /> : <Navigate to="/auth" />}
            />
            <Route path="*" element={<NotFound />} />

            {/* <Route path="/idp/:idpId" element={<IDP />} /> */}
            {/* <Route path="/idp" element={<NewIDP title="Новый план развития" />} /> */}
            {/* <Route
            path="/newTask"
            element={<CreateTask title="Новая задача" buttonText="Создать" />}
          /> */}
            {/* <Route exact path="/" element={<EditTask />} />  */}
            {/* <Route path="/mentor" element={<Mentor />} /> */}
          </Routes>
          <ScrollToTop threshold={1500} showBelow={true} />
        </div>
      </div>
    </section>
  );
}

export default App;
