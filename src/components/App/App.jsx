import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setloggedIn } from "../../store/userSlice";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import EditTask from "../EditTask/EditTask";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loggedIn = useSelector((state) => state.users.loggedIn);

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
    } else {
      dispatch(setloggedIn(true));
      if (location.pathname === "/auth" && loggedIn) {
        navigate("/idps");
      } else {
        navigate(location.pathname);
      }
    }
  }

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  const showLeftNavBar = [
    "/idps",
    "/idp",
    "/newTask",
    "/mentor",
    "/:taskId",
  ].includes(location.pathname);

  return (
    <section className={style.app}>
      <div className={style.appContainer}>
        {loggedIn && <Header />}
        <div className={style.mainContainer}>
          {/* Компоненты левого меню */}
          {showLeftNavBar && <LeftNavBar />}
          <Routes>
            <Route exact path="/auth" element={<Auth />} />

            <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
              <Route
                path="/idps"
                element={
                  <IDPs
                    checkToken={tokenCheck}
                    petals={true}
                    title="Планы развития"
                    newIdpButton={true}
                    tabs={true}
                  />
                }
              />
              <Route
                path="/idp/:idpId/:last_name/:first_name"
                element={<IDP />}
              />
              <Route
                path="/idp"
                element={<NewIDP title="Новый план развития" />}
              />
              <Route
                path="/newTask"
                element={
                  <CreateTask title="Новая задача" buttonText="Создать" />
                }
              />
              <Route
                path="/:idpId/:taskId"
                element={
                  <>
                    <LeftNavBar />
                    <EditTask />
                  </>
                }
              />
              <Route path="/mentor" element={<Mentor />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTop threshold={500} showBelow={true} />
        </div>
      </div>
    </section>
  );
}

export default App;
