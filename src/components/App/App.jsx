import { Route, Routes, useLocation } from "react-router-dom";
import IDPs from "../IDPs/IDPs";
import NewIDP from "../NewIDP/NewIDP";
import style from "./App.module.css";
import CreateTask from "../CreateTask/CreateTask";
import Header from '../Header/Header';
import LeftNavBar from "../LeftNavBar/LeftNavBar";
import NotFound from "../NotFound/NotFound";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Mentor from "../Mentor/Mentor";
import IDP from "../IDP/IDP";
function App() {
  const location = useLocation();
  const showLeftNavBar = ["/", "/idp", "/newTask", "/mentor"].includes(
    location.pathname
  );

  return (
    <section className={style.app}>
      <div className={style.appContainer}>
        <Header />
        <div className={style.mainContainer}>
        
        {/* Компоненты левого меню */}
        {showLeftNavBar && <LeftNavBar />}
        <Routes>
          <Route
            path="/"
            element={
              <IDPs
                petals={true}
                title="Планы развития"
                newIdpButton={true}
                tabs={true}
              />
            }
          />
          <Route path="/idp/:idpId" element={<IDP />} />
          <Route path="/idp" element={<NewIDP title="Новый план развития" />} />
          <Route
            path="/newTask"
            element={<CreateTask title="Новая задача" buttonText="Создать" />}
          />
          {/* <Route exact path="/" element={<EditTask />} />  */}
          <Route path="/mentor" element={<Mentor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop threshold={1500} showBelow={true} />
      </div>
      </div>
      
    </section>
  );
}

export default App;
