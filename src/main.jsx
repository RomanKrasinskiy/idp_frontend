import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import {store} from './store/store.js'
import { BrowserRouter } from "react-router-dom";
import './index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);
